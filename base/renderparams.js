/**
 * Created by zhs007 on 15/8/3.
 */

var config = require('../config');

function getDefaultParam(req) {
    return {
        title: config.title
    };
}

exports.getDefaultParam = getDefaultParam;