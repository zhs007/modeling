/**
 * Created by zhs007 on 15/7/31.
 */

// 对接express的路由

// 首先把模块全部初始化，这里只需要按下面的规则写，就可以初始化了，目前没想到更自动的方案
//var modMainTopMenu = require('../mod/main/topmenu').modMainTopMenu;
//var modMainLeftMenu = require('../mod/main/leftmenu').modMainLeftMenu;
//var modMainWorkSpace = require('../mod/main/workspace').modMainWorkSpace;
var modUser = require('../mod/user').modUser;
var modProj = require('../mod/proj').modProj;

// 首先把ctrl全部初始化，这里只需要按下面的规则写，就可以初始化了，目前没想到更自动的方案
var ctrlNewProj = require('../ctrl/newproj').ctrlNewProj;
var ctrlChgProj = require('../ctrl/chgproj').ctrlChgProj;

// 页面的声明
var pageLogin = require('../page/login/index');
var pageMain = require('../page/main/index');
var pageHelp = require('../page/help/index');
var pageSetting = require('../page/setting/index');
var pageNewProj = require('../page/newproj/index');
var pageProj = require('../page/proj/index');
var pageProjCtrl = require('../page/projctrl/index');

// 这个函数将页面路由和app绑定起来
function init(app) {
    pageLogin.init(app);
    pageMain.init(app);
    pageHelp.init(app);
    pageSetting.init(app);
    pageNewProj.init(app);
    pageProj.init(app);
    pageProjCtrl.init(app);
}

exports.init = init;