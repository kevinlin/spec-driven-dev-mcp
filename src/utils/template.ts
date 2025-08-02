import { readFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

// Get __dirname in a way that works in both ESM and CommonJS
const getModuleDir = () => {
  // Check if we're in a CommonJS environment where import.meta.url might be undefined
  if (typeof import.meta !== 'undefined' && import.meta.url) {
    return dirname(fileURLToPath(import.meta.url));
  }
  
  // Fallback: assume we're in the compiled dist directory structure
  // From dist/utils/template.js, go up to project root, then to templates
  return join(process.cwd(), 'src', 'utils');
};

const __dirname = getModuleDir();

export async function readTemplate(
  templateName: string, 
  variables: Record<string, string> = {}
): Promise<string> {
  // From src/utils go up two levels to the project root, then enter templates
  const templatePath = join(__dirname, '../../templates', templateName);
  console.error(`[MCP] Reading template: ${templatePath}`);
  
  let content = await readFile(templatePath, 'utf-8');
  
  // Replace variables
  Object.entries(variables).forEach(([key, value]) => {
    const regex = new RegExp(`\{${key}\}`, 'g');
    content = content.replace(regex, value);
  });
  
  return content;
}