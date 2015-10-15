/**
 * Created by zhs007 on 15/10/11.
 */

var mgrMod = require('./modmgr').mgrMod;
var RequestInfo = require('./requestinfo').RequestInfo;

class BaseMod {

    constructor(jadefile) {
        this.jadefile = jadefile;

        this.session = {};
        this.renderparam = {};
    }

    onInit() {
        mgrMod.addMod(this.name, this);
    }

    onRequest(req, res) {
    }

    onRoute(req, res) {
        let ri = new RequestInfo(req, res);

        this.onRequest(req, res);

        ri.setModRenderParam(this);
        ri.setModSession(this);
        //renderparam[this.name] = this.renderparam;
        //session[this.name] = this.session;

        ri.render(this.jadefile);
        //res.send(jadecache.render2str(this.jadefile, ri.renderparam));
    }
}

exports.BaseMod = BaseMod;