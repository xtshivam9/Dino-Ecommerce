import { Project, SyntaxKind, JsxElement, Node } from "ts-morph";

const project = new Project();
project.addSourceFilesAtPaths([
    "src/features/project-report/pdf/sections/**/*.tsx",
    "src/features/project-report/pdf/components/DatabaseSchemaSection.tsx"
]);

let modifiedCount = 0;

for (const file of project.getSourceFiles()) {
    let changed = true;
    let iterations = 0;
    let fileChanged = false;

    while (changed && iterations < 10) {
        changed = false;
        iterations++;
        
        const texts = file.getDescendantsOfKind(SyntaxKind.JsxElement)
            .filter(el => {
                const tagName = el.getOpeningElement().getTagNameNode().getText();
                return tagName === "Text" && el.getText().includes("Table ");
            });

        for (const el of texts) {
            
            const parent = el.getParent();
            if (!parent || !(Node.isJsxElement(parent) || Node.isJsxFragment(parent))) continue;
            
            const children = parent.getJsxChildren();
            const elIndex = children.findIndex(c => c === el || (c.getKind() === SyntaxKind.JsxElement && c.getFullText().includes(el.getFullText())));
            
            if (elIndex === -1) continue;
            
            let tableNodeIndex = -1;
            
            // Search backwards for the table
            for (let j = elIndex - 1; j >= 0; j--) {
                const child = children[j];
                if (child.getKind() === SyntaxKind.JsxText) continue;
                if (child.getKind() === SyntaxKind.JsxElement && child.getText().startsWith("<View")) {
                    tableNodeIndex = j;
                    break;
                }
            }
            
            if (tableNodeIndex === -1) {
                 // Search forwards for the table
                 for (let j = elIndex + 1; j < children.length; j++) {
                     const child = children[j];
                     if (child.getKind() === SyntaxKind.JsxText) continue;
                     if (child.getKind() === SyntaxKind.JsxElement && child.getText().startsWith("<View")) {
                         tableNodeIndex = j;
                         break;
                     }
                 }
            }

            if (tableNodeIndex !== -1) {
                // Check if already wrapped
                if (Node.isJsxElement(parent) && parent.getOpeningElement().getText().includes("wrap={false}")) {
                    const viewChildren = children.filter(c => c.getKind() === SyntaxKind.JsxElement);
                    if (viewChildren.length <= 2) {
                        continue;
                    }
                }
                
                // Also check if text contains \n indicating it's formatted maybe?
                const minIdx = Math.min(elIndex, tableNodeIndex);
                const maxIdx = Math.max(elIndex, tableNodeIndex);
                
                const tableNode = children[tableNodeIndex];
                let tableText = tableNode.getText();
                tableText = tableText.replace(/\bwrap=\{false\}\s*/g, "");
                tableText = tableText.replace(/\bwrap\s*/g, ""); 
                
                const textContent = el.getText();
                
                const newContent = `<View wrap={false}>\n${elIndex < tableNodeIndex ? textContent + '\n' + tableText : tableText + '\n' + textContent}\n</View>`;
                
                file.replaceText([children[minIdx].getStart(), children[maxIdx].getEnd()], newContent);
                changed = true;
                fileChanged = true;
                break; // Break the inner loop, restart descendent search
            }
        }
    }
    
    if (fileChanged) {
        file.saveSync();
        modifiedCount++;
        console.log(`Updated ${file.getFilePath()}`);
    }
}
console.log(`Modified ${modifiedCount} files.`);
