/**
 * Created by zhs007 on 15/10/13.
 */

var jadecache = require('jadecache');
var renderparams = require('./renderparams');

class RequestInfo {

    constructor(req, res) {
        this.res = res;
        this.req = req;

        this.params = {};

        if (req.method == 'POST') {
            this.params = req.body;
        }
        else if (req.method == 'GET') {
            this.params = req.query;
        }

        for (let key in req.params) {
            this.params[key] = req.params[key];
        }

        //console.log(JSON.stringify(req.body));
        //console.log(JSON.stringify(req.query));
        //console.log(JSON.stringify(req.params));
        console.log(JSON.stringify(this.params));

        this.session = {};
        if (req.session != undefined) {
            this.session = req.session;
        }

        this.renderparam = renderparams.getDefaultParam(req);
    }

    //setModRenderParam(modname, renderparam) {
    //    this.renderparam[modname] = renderparam;
    //}
    //
    //setModSession(modname, session) {
    //    this.session[modname] = session;
    //}

    renderFile(jadefile) {
        this.res.send(jadecache.render2str(jadefile, this.renderparam));
    }

    renderCache(jadename, str) {
        this.res.send(jadecache.rendercache2str(jadename, str, this.renderparam));
    }
}

exports.RequestInfo = RequestInfo;