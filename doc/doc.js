// eslint-disable-next-line import/no-extraneous-dependencies
const jsdoc2md = require('jsdoc-to-markdown');
const fs = require('fs');

// generate doc with jsdoc
function generateDoc() {
  jsdoc2md.render({ files: 'src/*.js', separators: true }).then((data) => {
    fs.writeFileSync('./doc/doc.md', data);
  });
}

// generate readme with template and doc
function generateReadme() {
  generateDoc();
  const readmeData = fs.readFileSync('./doc/readme-template.md', 'utf8');
  const docData = fs.readFileSync('./doc/doc.md');
  fs.unlinkSync('README.md');
  fs.writeFileSync('README.md', readmeData);
  fs.appendFileSync('README.md', docData);
}

generateReadme();
