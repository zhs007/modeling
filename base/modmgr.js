/**
 * Created by zhs007 on 15/10/13.
 */

class ModMgr {

    constructor() {
        this.mapMod = {};
    }

    addMod(name, mod) {
        this.mapMod[name] = mod;
    }
}

var mgrMod = new ModMgr();

exports.mgrMod = mgrMod;