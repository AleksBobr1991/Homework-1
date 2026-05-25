const fse = require('fs-extra')

fse.ensureDirSync('./NewPapka');
fse.ensureFileSync('./NewPapka/NewFile.txt');
fse.ensureDirSync('./NewPapka2');
fse.moveSync('./NewPapka/NewFile.txt', './NewPapka2/NewFile.txt');
fse.ensureDirSync('./NewPapka3');
fse.copySync('./NewPapka2/NewFile.txt', './NewPapka3/NewFile.txt');
fse.writeJsonSync('./NewPapka/file.json', {name: 'myname'});
console.log(fse.readJsonSync('./NewPapka/file.json'));
// jsonData = fse.readJsonSync('./NewPapka/file.json');
// console.log(jsonData);
fse.removeSync('./NewPapka/file.json');
fse.removeSync('./NewPapka');
fse.removeSync('./NewPapka2/NewFile.txt');
fse.removeSync('./NewPapka2');
fse.removeSync('./NewPapka3/NewFile.txt');
fse.removeSync('./NewPapka3');


