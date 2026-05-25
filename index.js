const fs = require('fs-extra');

fs.ensureDirSync('./NewPapka');
fs.ensureFileSync('./NewPapka/NewFile.txt');
fs.ensureDirSync('./NewPapka2');
fs.moveSync('./NewPapka/NewFile.txt', './NewPapka2/NewFile.txt');
fs.ensureDirSync('./NewPapka3');
fs.copySync('./NewPapka2/NewFile.txt', './NewPapka3/NewFile.txt');
fs.writeJsonSync('./NewPapka/file.json', {name: 'myname'});
console.log(fs.readJsonSync('./NewPapka/file.json'));
fs.removeSync('./NewPapka/file.json');
fs.removeSync('./NewPapka');
fs.removeSync('./NewPapka2/NewFile.txt');
fs.removeSync('./NewPapka2')
fs.removeSync('./NewPapka3/NewFile.txt');
fs.removeSync('./NewPapka3')
