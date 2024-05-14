// node tool to convert tiles from json to js with export

import fs from 'fs';
import path from 'path';

const tilesFolder = path.join('./');
const folders = fs.readdirSync(tilesFolder);

function convertFile(folder, file) {
    let jsonFile = path.join(tilesFolder, folder, file);
    const tile = fs.readFileSync(jsonFile, 'utf8');

    let jsFile = path.join(tilesFolder, folder, file.replace('.json', '.js'));
    fs.writeFileSync(jsFile, `export default ${tile}`);
    fs.unlinkSync(jsonFile);
}

folders.forEach((folder) => {
    if (folder === 'worldgrid.json') {
        convertFile('', 'worldgrid.json');

    } else if (fs.lstatSync(path.join(tilesFolder, folder)).isDirectory())
    {
        const files = fs.readdirSync(path.join(tilesFolder, folder));
        files.forEach((file) => {
            convertFile(folder, file);
        });
    }
});

