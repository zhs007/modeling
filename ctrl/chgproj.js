/**
 * Created by zhs007 on 15/10/19.
 */

// 使用了ES6特性

var BaseCtrl = require('../base/basectrl').BaseCtrl;
var mgrCtrl = require('../base/ctrlmgr').mgrCtrl;
var CtrlDef = require('../base/ctrldef');
//var PageDef = require('../base/pagedef');
var mgrProj = require('../base/projmgr').mgrProj;
var ErrInfo = require('../base/errinfo');


// 改变项目
// 跳转页面
class Ctrl_ChgProj extends BaseCtrl {

    //--------------------------------------------
    // 属性


    //--------------------------------------------
    // 接口

    // 构造函数
    constructor() {
        super(CtrlDef.CTRL_CHGPROJ);
    }

    onRequest(ri) {

        if (!ri.params.hasOwnProperty('projname')) {
            ri.objRet.errinfo = ErrInfo.ERR_NOPARAM;

            return false;
        }

        ri.session.modProj.curprojname = ri.params.projname;
        //ri.renderparam.modProj.curproj = mgrProj.findProj(ri.params.projname);

        ri.objRet.newurl = '/proj';
        //ri.res.redirect('/main');

        return false;
    }
}

var ctrlChgProj = new Ctrl_ChgProj();
mgrCtrl.addCtrl(ctrlChgProj);

exports.ctrlChgProj = ctrlChgProj;