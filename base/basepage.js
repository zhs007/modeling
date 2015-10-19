/**
 * Created by zhs007 on 15/10/15.
 */

// 使用了ES6特性

var RequestInfo = require('./requestinfo').RequestInfo;
var mgrMod = require('./modmgr').mgrMod;

// 页面基类
class BasePage {

    //--------------------------------------------
    // 属性

    // jadefile -   jade模块文件
    // lstMod   -   模块队列
    // pagename -   页面名


    //--------------------------------------------
    // 接口

    // 构造函数
    constructor(jadefile, pagename) {
        this.jadefile = jadefile;

        this.lstMod = [];

        this.pagename = pagename;

        //this.jadecache = '';
        //this.renderparam = {};
    }

    // 增加模块，传入模块名，这个模块应该是先初始化过的，否则会出错
    addMod(modname) {
        let mod = mgrMod.mapMod[modname];
        let last = this.lstMod.findIndex(function (val, index, arr) {
            return val.modname == modname;
        });

        if (last < 0) {
            this.lstMod.push(mod);
        }
    }

    // 移除模块
    removeMod(modname) {
        var index = this.lstMod.findIndex(function (val, index, arr) {
            return val.modname == modname;
        });

        if (index >= 0) {
            this.lstMod.splice(index);
        }
    }

    // 处理请求，会调用模块的onRequest接口
    // 如果某一个模块onRequest返回true，则中断直接返回true
    onRequest(ri) {
        for (let i = 0; i < this.lstMod.length; ++i) {
            if (this.lstMod[i].onRequest(ri)) {
                return true;
            }
        }
        //this.lstMod.forEach(function (val, index, arr) {
        //    if (val.onRequest(ri)) {
        //        return true;
        //    }
        //});

        return false;
    }

    // 路由调用接口，框架用
    onRoute(req, res) {
        let ri = new RequestInfo(req, res);

        ri.renderparam.curpage = this.pagename;

        if (this.onRequest(ri)) {
            return ;
        }

        if (this.jadefile != undefined) {
            ri.renderFile(this.jadefile);
        }
    }
}

exports.BasePage = BasePage;