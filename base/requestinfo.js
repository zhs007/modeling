/**
 * Created by zhs007 on 15/10/13.
 */

var jadecache = require('jadecache');
var renderparams = require('./renderparams');

class RequestInfo {

    constructor(res, req) {
        this.res = res;
        this.req = req;

        this.params = {};

        if (req.method == 'POST') {
            this.params = req.body;
        }
        else if (req.method == 'GET') {
            this.params = req.query;
        }

        this.session = {};
        if (res.session != undefined) {
            this.session = res.session;
        }

        this.renderparam = renderparams.getDefaultParam(req);
    }

    setModRenderParam(mod) {
        this.renderparam[mod.name] = mod.renderparam;
    }

    setModSession(mod) {
        this.session[mod.name] = mod.session;
    }

    render(jadefile) {
        this.req.send(jadecache.render2str(jadefile, this.renderparam));
    }
}

exports.RequestInfo = RequestInfo;