// src/utils/logger.js
const debug = (scope) => (...args) => console.log(`[${scope}]`, ...args);
module.exports = { debug };
