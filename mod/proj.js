/**
 * Created by zhs007 on 15/10/19.
 */

// 使用了ES6特性

var BaseMod = require('../base/basemod').BaseMod;
var mgrMod = require('../base/modmgr').mgrMod;
var ModDef = require('../base/moddef');
var PageDef = require('../base/pagedef');
var mgrProj = require('../base/projmgr').mgrProj;

// renderparam.modProj
// lstproj      -   项目列表
// curproj      -   当前选择项目

// session.modProj
// curprojname  -   当前项目名

// 项目模块
class Mod_Proj extends BaseMod {

    //--------------------------------------------
    // 属性


    //--------------------------------------------
    // 接口

    // 构造函数
    constructor() {
        super(ModDef.MOD_PROJ);

        this.onInit();
    }

    onRequest(ri) {
        if (!ri.session.hasOwnProperty('modProj')) {
            ri.session.modProj = {};

            ri.session.modProj.curprojname = '';
        }

        if (ri.renderparam.curpage == PageDef.PAGE_NEWPROJ) {
            ri.session.modProj.curprojname = '';
        }

        ri.renderparam.modProj = {};

        ri.renderparam.modProj.lstproj = mgrProj.lstProj;
        ri.renderparam.modProj.curproj = mgrProj.findProj(ri.session.modProj.curprojname);

        //    ri.res.redirect('/main');
        //
        //    return true;
        //}

        return false;
    }
}

var modProj = new Mod_Proj();
mgrMod.addMod(modProj);

exports.modProj = modProj;