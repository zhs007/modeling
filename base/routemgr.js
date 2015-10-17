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

var pageLogin = require('../page/login/index');
var pageMain = require('../page/main/index');
var pageHelp = require('../page/help/index');
var pageSetting = require('../page/setting/index');

function init(app) {
    app.use('/', pageLogin);
    app.use('/main', pageMain);
    app.use('/help', pageHelp);
    app.use('/setting', pageSetting);
    //app.use('/help', mod_help);
    //app.use('/setting', mod_setting);
    //app.use('/newproj', mod_newproj);
}

exports.init = init;