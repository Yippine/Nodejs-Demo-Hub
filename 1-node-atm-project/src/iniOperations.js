const fs = require("fs");
const ini = require("ini");

function readFromINI(section, key, filePath) {
    const config = ini.parse(fs.readFileSync(filePath, "utf-8"));
    return config[section][key];
}

function writeToINI(section, key, value, filePath) {
    const config = ini.parse(fs.readFileSync(filePath, "utf-8"));
    config[section][key] = value;
    fs.writeFileSync(filePath, ini.stringify(config));
}

function updateMultipleINI(updates) {
    updates.forEach(({ filePath, section, key, value }) => {
        writeToINI(section, key, value, filePath);
    });
}

module.exports = { readFromINI, writeToINI, updateMultipleINI };
