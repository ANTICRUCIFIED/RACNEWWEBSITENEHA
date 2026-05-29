import fs from 'fs';
import path from 'path';

function fixHeadingsInFile(fullPath: string) {
  let content = fs.readFileSync(fullPath, 'utf8');
  let before = content;

  // Replace <motion.h1 ...> with <motion.div ...><h1 className="...">
  content = content.replace(/<motion\.h1([^>]*)className="([^"]*)"([^>]*)>/g, '<motion.div$1$3>\n<h1 className="$2">');
  content = content.replace(/<\/motion\.h1>/g, '</h1>\n</motion.div>');

  // Same for motion.h2
  content = content.replace(/<motion\.h2([^>]*)className="([^"]*)"([^>]*)>/g, '<motion.div$1$3>\n<h2 className="$2">');
  content = content.replace(/<\/motion\.h2>/g, '</h2>\n</motion.div>');

  if (content !== before) {
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Updated headings in ${fullPath}`);
  }
}

function processDirectory(dir: string) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      fixHeadingsInFile(fullPath);
    }
  }
}

processDirectory(path.join(process.cwd(), 'src/pages'));
