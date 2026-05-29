import fs from 'fs';
import path from 'path';

function processDirectory(dir: string) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.html') || fullPath.endsWith('.json')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // Let's replace 'RAC Forge', 'racforge', 'RACFORGE', 'RacForge' -> 'RAC Forge Private Limited'
      // But only if it's not a url component, not an email component, not a twitter handle.
      // So look around: avoid preceding with `@`, `/`, `.`, `www.`
      // avoid succeeding with `.`, `.com`, `/`, `@`
      // Also protect "RAC Forge Private Limited" so we don't end up with "RAC Forge Private Limited Private Limited"
      
      const before = content;
      
      // Replace existing "RAC Forge Private Limited" to a placeholder first
      content = content.replace(/RAC\sForge\sPrivate\sLimited/gi, '___TEMP_PROTECTED___');
      
      // Replace variations
      // Negative lookbehind for `[/\.@\w-]` and negative lookahead for `[/\.@\w-]` (Wait, JS lookbehind is supported in modern Node)
      const keywordRegex = /(?<![/\.\-_@a-zA-Z0-9])(RAC\sForge|racforge|RACFORGE|RacForge)(?![/\.\-_@a-zA-Z0-9])/g;
      
      content = content.replace(keywordRegex, 'RAC Forge Private Limited');
      
      // Restore placeholder
      content = content.replace(/___TEMP_PROTECTED___/g, 'RAC Forge Private Limited');

      if (content !== before) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

// Ensure the Regex is safe by testing
const testStr = 'Check out racforge or RAC Forge, but not info@racforge.com or racforge.com or rac-forge or www.racforge.com';
const testRes = testStr
  .replace(/(?<![/\.\-_@a-zA-Z0-9])(RAC\sForge|racforge|RACFORGE|RacForge)(?![/\.\-_@a-zA-Z0-9])/g, 'RAC Forge Private Limited');
console.log('Test result:', testRes);

processDirectory('./src/pages');
processDirectory('./src/components');
processDirectory('./src/data');
// index.html we already fixed manually, but if we missed any, this might catch it.
contentUpdateForFile('./index.html');

function contentUpdateForFile(fullPath: string) {
    if (fs.existsSync(fullPath)) {
        let content = fs.readFileSync(fullPath, 'utf8');
        const before = content;
        content = content.replace(/RAC\sForge\sPrivate\sLimited/gi, '___TEMP_PROTECTED___');
        const keywordRegex = /(?<![/\.\-_@a-zA-Z0-9])(RAC\sForge|racforge|RACFORGE|RacForge)(?![/\.\-_@a-zA-Z0-9])/g;
        content = content.replace(keywordRegex, 'RAC Forge Private Limited');
        content = content.replace(/___TEMP_PROTECTED___/g, 'RAC Forge Private Limited');
        
        if (content !== before) {
            fs.writeFileSync(fullPath, content, 'utf8');
            console.log(`Updated ${fullPath}`);
        }
    }
}
