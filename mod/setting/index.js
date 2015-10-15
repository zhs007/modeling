/**
 * Created by zhs007 on 15/10/11.
 */

var express = require('express');
var router = express.Router();

var BaseMod = require('../../base/basemod').BaseMod;
var config = require('../../config');

class Mod_Setting extends BaseMod {

    constructor(jadefile) {
        super(jadefile);

        this.name = 'Mod_Setting';

        this.onInit();
    }

    onRequest(req, res) {
    }
}

var mod = new Mod_Setting('views/setting/index.jade');

router.get('/', function(req, res) {
    mod.onRoute(req, res);
});

module.exports = router;