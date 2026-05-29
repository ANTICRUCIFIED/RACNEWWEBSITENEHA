import fs from 'fs';
import path from 'path';

function processDirectory(dir: string) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      const before = content;
      
      content = content.replace(/RAC Forge Private Limited \(RAC Forge Private Limited\)/g, 'RAC Forge Private Limited');
      content = content.replace(/RAC Forge Private Limited \/ RAC Forge Private Limited/g, 'RAC Forge Private Limited');

      if (content !== before) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDirectory('./src/pages');
processDirectory('./src/components');
