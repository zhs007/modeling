/**
 * Created by zhs007 on 15/10/11.
 */

var express = require('express');
var router = express.Router();

var BaseMod = require('../../base/basemod').BaseMod;
var mgrProj = require('../../base/projmgr').mgrProj;

class Mod_NewProj extends BaseMod {

    constructor(jadefile) {
        super(jadefile);

        this.name = 'Mod_NewProj';

        this.onInit();
    }

    onRequest(req, res) {
    }
}

var mod = new Mod_NewProj('views/main/index.jade');

router.get('/', function(req, res) {
    mod.onRoute(req, res);
});

module.exports = router;