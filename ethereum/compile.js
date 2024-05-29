const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildpath = path.resolve(__dirname, 'build');
fs.removeSync(buildpath);

const campaginPath = path.resolve(__dirname, "contracts", "Campaign.sol");
const source = fs.readFileSync(campaginPath, 'utf-8');
const output = solc.compile(source, 1).contracts;

fs.ensureDirSync(buildpath);

Object.keys(output).forEach(contract => {
    fs.outputJSONSync(
        path.resolve(buildpath, `${contract.replace(':', '')}.json`),
        output[contract]
    )
});

