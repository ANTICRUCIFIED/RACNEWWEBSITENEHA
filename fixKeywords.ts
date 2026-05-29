import fs from 'fs';
import path from 'path';

const extraKeywords = ", medical device regulatory consultant India, CDSCO registration consultant, USFDA 510(k) clearance consultant, medical device import license India, medical device manufacturing license CDSCO, EU MDR consultant India, SaMD regulatory consultant, CE marking medical devices India, ISO 13485 consultant India, medical device clinical trial consultant, CDSCO Sugam portal registration, medical device compliance consultant";

function processDirectory(directory: string) {
  if (!fs.existsSync(directory)) return;
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      let newContent = content.replace(/keywords="([^"]+)"/g, (match, p1) => {
        if (!p1.includes('CDSCO registration consultant')) {
          return `keywords="${p1}${extraKeywords}"`;
        }
        return match;
      });

      if (content !== newContent) {
        fs.writeFileSync(fullPath, newContent, 'utf8');
        console.log(`Updated keywords in ${fullPath}`);
      }
    }
  }
}

processDirectory(path.join(process.cwd(), 'src/pages'));
