/**
 * Created by zhs007 on 15/10/14.
 */

var express = require('express');
var router = express.Router();

var BasePage = require('../../base/basepage').BasePage;
var PageDef = require('../../base/pagedef');

class Page_Setting extends BasePage {

    constructor(jadefile) {
        super(jadefile, PageDef.PAGE_SETTING);

        this.name = Page_Setting.name;


        this.addMod('user');
        this.addMod('topmenu');
        this.addMod('leftmenu');
        this.addMod('workspace');
        //this.onInit();
    }

    onRequest(ri) {

        super.onRequest(ri);
        //this.renderparam.mapProj = mgrProj.mapProj;
    }
}

var page = new Page_Setting('views/setting/index.jade');

router.get('/', function(req, res) {
    page.onRoute(req, res);
});

module.exports = router;