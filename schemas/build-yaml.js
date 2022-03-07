const fs = require('fs');
const path = require('path');

/**
 * It takes a string, and replaces all lines that start with `*include` with the contents of the file
 * that is referenced
 * @param {string} content
 * @returns {string} The content of the file that was included.
 */
function getYaml(content) {
  const result = content.replace(/^.*\*include.*/gm, match => {
    const lineHasInclude = match.replace(/.*\*include\s*/g, '').trim();
    if (!!lineHasInclude) {
      const fileName = path.resolve(__dirname, lineHasInclude.includes('.yml') ? lineHasInclude : `${lineHasInclude}.yml`);
      const tab = match.match(/^\s*(?=\*include)/gm)?.[0] ?? '';
      const childContent = fs.readFileSync(fileName, 'utf8').trim().replace(/^/gm, tab);
      return getYaml(childContent);
    }
    return '';
  });

  return result;
}

/**
 * It takes the contents of the config.yml file, and writes it to the config.yml file, but with the
 * variables replaced with the values from the environment
 */
function compileYaml() {
  const inputFile = path.resolve(__dirname, 'config.yml');
  const outputFile = path.resolve(__dirname, '../static/admin/config.yml');
  const inputContent = fs.readFileSync(inputFile, 'utf8');

  fs.writeFileSync(outputFile, getYaml(inputContent));
}

compileYaml();
