"use strict";
const nodecg_1 = require("./util/nodecg");
module.exports = (nodecg) => {
    nodecg_1.set(nodecg);
    nodecg.log.info('Extension code working!');
};
