/**
 * Created by zhs007 on 15/10/15.
 */

var RequestInfo = require('./requestinfo').RequestInfo;
var mgrMod = require('./modmgr').mgrMod;

class BasePage {

    constructor(jadefile, pagename) {
        this.jadefile = jadefile;

        this.lstMod = [];

        this.pagename = pagename;

        //this.jadecache = '';
        //this.renderparam = {};
    }

    addMod(modname) {
        let mod = mgrMod.mapMod[modname];
        let last = this.lstMod.findIndex(function (val, index, arr) {
            return val.modname == modname;
        });

        if (last < 0) {
            this.lstMod.push(mod);
        }
    }

    removeMod(modname) {
        var index = this.lstMod.findIndex(function (val, index, arr) {
            return val.modname == modname;
        });

        if (index >= 0) {
            this.lstMod.splice(index);
        }
    }

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

    onRoute(req, res) {
        let ri = new RequestInfo(req, res);

        ri.renderparam.curpage = this.pagename;

        if (this.onRequest(ri)) {
            return ;
        }

        ri.renderFile(this.jadefile);
    }
}

exports.BasePage = BasePage;