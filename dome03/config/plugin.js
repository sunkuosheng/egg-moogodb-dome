'use strict';

/** @type Egg.EggPlugin */
module.exports = {
    cors: {
        enable: true,
        package: 'egg-cors',
    },
    mongoose: {
        enable: true,
        package: 'egg-mongoose',
    },
};
// exports.cors = {
//     enable: true,
//     package: 'egg-cors',
// };
// exports.mongoose = {
//     enable: true,
//     package: 'egg-mongoose',
// };
