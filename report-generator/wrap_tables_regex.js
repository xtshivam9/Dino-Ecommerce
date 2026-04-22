const fs = require('fs');

const files = [
    "src/features/project-report/pdf/components/DatabaseSchemaSection.tsx",
    "src/features/project-report/pdf/sections/COCOMOEstimation.tsx",
    "src/features/project-report/pdf/sections/Conclusions.tsx",
    "src/features/project-report/pdf/sections/DesignDiagrams.tsx",
    "src/features/project-report/pdf/sections/FeasibilityStudy.tsx",
    "src/features/project-report/pdf/sections/Implementation.tsx",
    "src/features/project-report/pdf/sections/Introduction.tsx",
    "src/features/project-report/pdf/sections/Objectives.tsx",
    "src/features/project-report/pdf/sections/ProblemStatement.tsx",
    "src/features/project-report/pdf/sections/ProcessModel.tsx",
    "src/features/project-report/pdf/sections/RequirementGathering.tsx",
    "src/features/project-report/pdf/sections/SDLCOverview.tsx",
    "src/features/project-report/pdf/sections/SRS.tsx",
    "src/features/project-report/pdf/sections/Annexures.tsx"
];

let totalModifications = 0;

for (const filepath of files) {
    if (!fs.existsSync(filepath)) continue;
    let code = fs.readFileSync(filepath, "utf-8");
    
    // Case 1: <View [wrap={false}] ... > ... </View>\s*<Text ... >Table \d+\.\d+.*</Text>
    const case1Regex = /(<View(?:\s+wrap=\{false\})?[^>]*>[\s\S]*?<\/View>)\s*(<Text[^>]*>\s*Table [A-Z0-9\.]+:[^<]*<\/Text>)/g;
    
    // Case 2: <Text ... >Table \d+\.\d+.*</Text>\s*<View [wrap={false}] ... > ... </View>
    const case2Regex = /(<Text[^>]*>\s*Table [A-Z0-9\.]+:[^<]*<\/Text>)\s*(<View(?:\s+wrap=\{false\})?[^>]*>[\s\S]*?<\/View>)/g;
    
    let modified = false;

    // We do multiple passes since there could be multiple instances
    const replacer1 = (match, viewBlock, textBlock) => {
        let cleanView = viewBlock.replace(/\bwrap=\{false\}\s*/, ''); // remove inner wrap=false
        totalModifications++;
        modified = true;
        // make sure not to double wrap, if the parent is already <View wrap={false}> we might capture it wrongly, but since we match `Table ` text exactly outside the view, it's fine.
        return `<View wrap={false}>\n${cleanView}\n${textBlock}\n</View>`;
    };
    
    const replacer2 = (match, textBlock, viewBlock) => {
        let cleanView = viewBlock.replace(/\bwrap=\{false\}\s*/, '');
        totalModifications++;
        modified = true;
        return `<View wrap={false}>\n${textBlock}\n${cleanView}\n</View>`;
    };

    // Protect against matching too widely by ensuring the <View> doesn't contain another `Table ` text inside it natively
    // A better approach is to only match Views that look like tables (e.g. have mapped rows or specific styles)
    // But since it's a fixed report, and the `Table X.Y:` text is always adjacent to the table View, this is safe.

    let prevCode = code;
    code = code.replace(case1Regex, replacer1);
    code = code.replace(case2Regex, replacer2);

    if (code !== prevCode) {
        fs.writeFileSync(filepath, code);
        console.log("Updated", filepath, "modifications made in this file.");
    }
}

console.log("Total tables wrapped:", totalModifications);
