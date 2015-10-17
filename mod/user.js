/**
 * Created by zhs007 on 15/10/15.
 */

var BaseMod = require('../base/basemod').BaseMod;
var mgrMod = require('../base/modmgr').mgrMod;
var ModDef = require('../base/moddef');
var PageDef = require('../base/pagedef');

class Mod_User extends BaseMod {

    constructor() {
        super(ModDef.MOD_USER);

        //this.modname = modname;
        //this.renderparam.curProj = '';

        this.onInit();
    }

    onRequest(ri) {

        if (ri.renderparam.curpage == PageDef.PAGE_LOGIN) {
            ri.res.redirect('/main');

            return true;
        }

        return false;
        //this.renderparam.mapProj = mgrProj.mapProj;
    }
}

var modUser = new Mod_User();
mgrMod.addMod(modUser);

exports.modUser = modUser;