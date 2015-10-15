/**
 * Created by zhs007 on 15/10/15.
 */

var RequestInfo = require('./requestinfo').RequestInfo;
var mgrMod = require('./modmgr').mgrMod;

class BasePage {

    constructor(jadefile) {
        this.jadefile = jadefile;

        this.lstMod = [];

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
        this.lstMod.forEach(function (val, index, arr) {
            val.onRequest(ri);
        });
    }

    onRoute(req, res) {
        let ri = new RequestInfo(req, res);

        this.onRequest(ri);

        ri.renderFile(this.jadefile);
    }
}

exports.BasePage = BasePage;