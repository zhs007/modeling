/**
 * Created by zhs007 on 15/10/15.
 */

// 使用了ES6特性

var BaseMod = require('../base/basemod').BaseMod;
var mgrMod = require('../base/modmgr').mgrMod;
var ModDef = require('../base/moddef');
var PageDef = require('../base/pagedef');

// 用户模块
class Mod_User extends BaseMod {

    //--------------------------------------------
    // 属性


    //--------------------------------------------
    // 接口

    // 构造函数
    constructor() {
        super(ModDef.MOD_USER);

        this.onInit();
    }

    onRequest(ri) {
        if (ri.renderparam.curpage == PageDef.PAGE_LOGIN) {
            ri.res.redirect('/main');

            return true;
        }

        return false;
    }
}

var modUser = new Mod_User();
mgrMod.addMod(modUser);

exports.modUser = modUser;