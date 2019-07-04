const load = require('./loader');

const fortunes = load();

module.exports = () => fortunes[Math.floor(Math.random() * fortunes.length)];
