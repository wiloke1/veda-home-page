const fs = require('fs');
const path = require('path');

const rootFile = path.resolve(__dirname, 'config.yml');
const rootContent = fs.readFileSync(rootFile, 'utf8');
const outputFile = path.resolve(__dirname, '../admin/config.yml');

const result = rootContent.replace(/^.*@include.*/gm, match => {
  const fileName = path.resolve(__dirname, `${match.replace(/.*@include\s*/g, '').trim()}.yml`);
  const tab = match.match(/^\s*(?=@include)/gm)?.[0] ?? '';
  const childContent = fs.readFileSync(fileName, 'utf8').replace(/^/gm, tab);
  return childContent;
});

fs.writeFileSync(outputFile, result);
