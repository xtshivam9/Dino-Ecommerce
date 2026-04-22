import os, re
files = [
    'D:/work/Dino-Ecommerce/report-generator/src/features/project-report/pdf/sections/Introduction.tsx',
    'D:/work/Dino-Ecommerce/report-generator/src/features/project-report/pdf/sections/Objectives.tsx',
    'D:/work/Dino-Ecommerce/report-generator/src/features/project-report/pdf/sections/ProblemStatement.tsx',
    'D:/work/Dino-Ecommerce/report-generator/src/features/project-report/pdf/sections/ProcessModel.tsx',
    'D:/work/Dino-Ecommerce/report-generator/src/features/project-report/pdf/sections/RequirementGathering.tsx',
    'D:/work/Dino-Ecommerce/report-generator/src/features/project-report/pdf/sections/SDLCOverview.tsx',
    'D:/work/Dino-Ecommerce/report-generator/src/features/project-report/pdf/sections/SRS.tsx'
]

file_success = []

for filepath in files:
    if not os.path.exists(filepath): continue
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    table_regex = re.compile(r'<Text[^>]*>[\s\n]*Table\s+\d+\.\d+:[\s\S]*?</Text>')
    
    replacements = []
    
    for match in table_regex.finditer(content):
        t_start = match.start()
        t_end = match.end()
        
        before_text = content[:t_start]
        last_view_close = before_text.rfind('</View>')
        if last_view_close == -1: continue
        
        if before_text[last_view_close + 7:].strip():
            continue
            
        v_end_pos = last_view_close + 7
        
        depth = 1
        pos = v_end_pos - 7
        v_start_pos = -1
        while depth > 0 and pos >= 0:
            open_v = before_text.rfind('<View', 0, pos)
            close_v = before_text.rfind('</View>', 0, pos)
            
            if open_v > close_v:
                depth -= 1
                pos = open_v
            elif close_v != -1:
                depth += 1
                pos = close_v
            else:
                pos = -1
                
        if pos >= 0:
            v_start_pos = pos
            original_str = content[v_start_pos:t_end]
            
            view_opening_tag_match = re.search(r'^<View[^>]*>', original_str)
            if not view_opening_tag_match: continue
            
            view_opening_tag = view_opening_tag_match.group(0)
            new_view_opening_tag = re.sub(r'\s*wrap=\{false\}|\s*wrap=\"false\"', '', view_opening_tag)
            
            modified_original = original_str.replace(view_opening_tag, new_view_opening_tag, 1)
            
            indent_match = re.search(r'\n([ \t]*)$', content[:v_start_pos])
            indent = indent_match.group(1) if indent_match else ''
            
            new_str = f'<View wrap={{false}}>\n{indent}{modified_original}\n{indent}</View>'
            replacements.append({
                'orig': original_str,
                'newS': new_str,
                'startIndex': v_start_pos
            })
            
    replacements.sort(key=lambda x: x['startIndex'], reverse=True)
    new_content = content
    for r in replacements:
        start = r['startIndex']
        end = start + len(r['orig'])
        new_content = new_content[:start] + r['newS'] + new_content[end:]
        
    if replacements:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        file_success.append(filepath)

print('Modified files: ' + ', '.join(file_success))
