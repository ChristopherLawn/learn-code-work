const { Language } = require('../models');
const javascriptData = require('./languageData/javascript-data');
const phpData = require('./languageData/php-data');
const nodeData = require('./languageData/node-data');
const reactData = require('./languageData/react-data');
const javaData = require('./languageData/java-data');
const rubyData = require('./languageData/ruby-data');
const rData = require('./languageData/r-data');
const perlData = require('./languageData/perl-data');
const pythonData = require('./languageData/python-data');
const apexData = require('./languageData/apex-data');
const csharpData = require('./languageData/csharp-data');
const cData = require('./languageData/c-data');
const cPlusData = require('./languageData/c-plus-data');
const swiftData = require('./languageData/swift-data');

const languageData = [
    javascriptData,
    phpData,
    nodeData,
    reactData,
    javaData,
    rubyData,
    rData,
    perlData,
    pythonData,
    apexData,
    csharpData,
    cData,
    cPlusData,
    swiftData
];

const seedLanguages = () => Language.bulkCreate(languageData);
module.exports = seedLanguages;