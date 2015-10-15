/**
 * Created by zhs007 on 15/10/13.
 */

class ModMgr {

    constructor() {
        this.mapMod = {};
    }

    addMod(mod) {
        if (this.mapMod.hasOwnProperty(mod.modname)) {
            return false;
        }

        this.mapMod[mod.modname] = mod;

        return true;
    }
}

var mgrMod = new ModMgr();

exports.mgrMod = mgrMod;