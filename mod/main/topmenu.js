/**
 * Created by zhs007 on 15/10/15.
 */

var BaseMod = require('../../base/basemod').BaseMod;
var mgrMod = require('../../base/modmgr').mgrMod;
var ModDef = require('../../base/moddef');

class Mod_Main_TopMenu extends BaseMod {

    constructor() {
        super(ModDef.MOD_MAIN_TOPMENU);

        //this.name = ;
        //this.renderparam.curProj = '';

        this.onInit();
    }

    onRequest(ri) {
        return false;
        //this.renderparam.mapProj = mgrProj.mapProj;
    }
}

var modMainTopMenu = new Mod_Main_TopMenu();
mgrMod.addMod(modMainTopMenu);

exports.modMainTopMenu = modMainTopMenu;