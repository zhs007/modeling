/**
 * Created by zhs007 on 15/10/19.
 */

var BasePage = require('./basepage').BasePage;
//var PageDef = require('../../base/pagedef');
var mgrCtrl = require('./ctrlmgr').mgrCtrl;
var RequestInfo = require('./requestinfo').RequestInfo;

class CtrlPage extends BasePage {

    //--------------------------------------------
    // 属性

    // mapCtrl  -   子ctrl的map


    //--------------------------------------------
    // 接口

    // 构造函数
    constructor(pagename) {
        super(undefined, pagename);

        this.mapCtrl = {};
    }

    // 和模块一样
    addCtrl(ctrlname) {
        let ctrl = mgrCtrl.mapCtrl[ctrlname];
        if (!this.mapCtrl.hasOwnProperty(ctrlname)) {
            this.mapCtrl[ctrlname] = ctrl;
        }
    }

    // 请求的处理
    // 如果发现ctrl，则直接处理ctrl的onRequest
    onRequest(ri) {
        let isret = super.onRequest(ri);
        if (isret) {
            return true;
        }

        if (ri.params.hasOwnProperty('ctrl')) {
            let ctrlname = ri.params.ctrl;

            if (this.mapCtrl.hasOwnProperty(ctrlname)) {
                return this.mapCtrl[ctrlname].onRequest(ri);
            }
        }

        return false;
    }

    // 路由调用接口，框架用
    onRoute(req, res) {
        let ri = new RequestInfo(req, res);

        ri.renderparam.curpage = this.pagename;
        ri.objRet = {};

        if (this.onRequest(ri)) {
            return ;
        }

        if (this.jadefile != undefined) {
            ri.renderFile(this.jadefile);
        }
        else  {
            ri.sendRetObj();
        }
    }
}

exports.CtrlPage = CtrlPage;