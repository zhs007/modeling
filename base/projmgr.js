/**
 * Created by zhs007 on 15/10/13.
 */

var fs = require('fs');
var ProjInfo = require('./projinfo').ProjInfo;

class ProjMgr {

    constructor() {
        this.mapProj = {};
    }

    hasProj(name) {
        return this.mapProj.hasOwnProperty(name);
    }

    newProj(name, cname) {
        return new ProjInfo(name, cname);
    }

    load(file) {
        if (fs.existsSync(file)) {
            let info = fs.readFileSync(file, 'utf8');
            this.mapProj = JSON.parse(info);
        }
    }

    save(file) {
        let info = JSON.stringify(this.mapProj);
        fs.writeFileSync(file, info, 'utf8');
    }
}

var mgrProj = new ProjMgr();

mgrProj.load('projlist.json');

exports.mgrProj = mgrProj;