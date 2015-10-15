/**
 * Created by zhs007 on 15/7/31.
 */

//var mod_main = require('../mod/main/index');
//var mod_help = require('../mod/help/index');
//var mod_setting = require('../mod/setting/index');
//var mod_newproj = require('../mod/newproj/index');

var modMainTopMenu = require('../mod/main/topmenu').modMainTopMenu;
var modMainLeftMenu = require('../mod/main/leftmenu').modMainLeftMenu;
var modMainWorkSpace = require('../mod/main/workspace').modMainWorkSpace;
var modUser = require('../mod/user').modUser;

var pageMain = require('../page/main/index');

function init(app) {
    app.use('/', pageMain);
    //app.use('/help', mod_help);
    //app.use('/setting', mod_setting);
    //app.use('/newproj', mod_newproj);
}

exports.init = init;