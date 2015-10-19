/**
 * Created by zhs007 on 15/10/19.
 */

// 使用了ES6特性

var RequestInfo = require('./requestinfo').RequestInfo;
var mgrMod = require('./modmgr').mgrMod;

// ctrl基类
class BaseCtrl {

    //--------------------------------------------
    // 属性

    // ctrlname -   ctrl名


    //--------------------------------------------
    // 接口

    // 构造函数
    constructor(ctrlname) {
        this.ctrlname = ctrlname;
    }

    // 处理请求
    onRequest(ri) {
        return false;
    }
}

exports.BaseCtrl = BaseCtrl;