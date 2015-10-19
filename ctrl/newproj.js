/**
 * Created by zhs007 on 15/10/19.
 */

// 使用了ES6特性

var BaseCtrl = require('../base/basectrl').BaseCtrl;
var mgrCtrl = require('../base/ctrlmgr').mgrCtrl;
var CtrlDef = require('../base/ctrldef');
//var PageDef = require('../base/pagedef');
var mgrProj = require('../base/projmgr').mgrProj;


// 新建项目
// 跳转页面
class Ctrl_NewProj extends BaseCtrl {

    //--------------------------------------------
    // 属性


    //--------------------------------------------
    // 接口

    // 构造函数
    constructor() {
        super(CtrlDef.CTRL_NEWPROJ);
    }

    onRequest(ri) {
        ri.objRet.newurl = '/main';
        //ri.res.redirect('/main');

        return false;
    }
}

var ctrlNewProj = new Ctrl_NewProj();
mgrCtrl.addCtrl(ctrlNewProj);

exports.ctrlNewProj = ctrlNewProj;