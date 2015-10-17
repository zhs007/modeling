/**
 * Created by zhs007 on 15/10/15.
 */

var BaseMod = require('../../base/basemod').BaseMod;
var mgrMod = require('../../base/modmgr').mgrMod;
var ModDef = require('../../base/moddef');

class Mod_Main_WorkSpace extends BaseMod {

    constructor() {
        super(ModDef.MOD_MAIN_WORKSPACE);

        //this.modname = modname;
        //this.renderparam.curProj = '';

        this.onInit();
    }

    onRequest(ri) {
        return false;
        //this.renderparam.mapProj = mgrProj.mapProj;
    }
}

var modMainWorkSpace = new Mod_Main_WorkSpace();
mgrMod.addMod(modMainWorkSpace);

exports.modMainWorkSpace = modMainWorkSpace;