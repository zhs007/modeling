/**
 * Created by zhs007 on 15/7/31.
 */

var mod_main = require('../mod/main/index');
var mod_help = require('../mod/help/index');
var mod_setting = require('../mod/setting/index');
var mod_newproj = require('../mod/newproj/index');

function init(app) {
    app.use('/', mod_main);
    app.use('/help', mod_help);
    app.use('/setting', mod_setting);
    app.use('/newproj', mod_newproj);
}

exports.init = init;