const fs = require('fs');
const path = require('path');

const dir = path.dirname(fs.realpathSync(__filename));

const FORTUNE_FOLDER = dir + '/fortunes/';

module.exports = () => {
  const fortunelist = [];

  const files = fs.readdirSync(FORTUNE_FOLDER);

  files.forEach(file => {
    const fortunes = fs.readFileSync(FORTUNE_FOLDER + file, 'utf8');
    fortunes.split(/\s*\r?\n%\s*\r?\n/g).forEach(ft => fortunelist.push(ft));
  });

  return fortunelist;
};
