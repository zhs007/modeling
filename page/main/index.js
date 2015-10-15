/**
 * Created by zhs007 on 15/10/14.
 */

var express = require('express');
var router = express.Router();

var BasePage = require('../../base/basepage').BasePage;

class Page_Main extends BasePage {

    constructor(jadefile) {
        super(jadefile);

        this.name = Page_Main.name;


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

var page = new Page_Main('views/main/index.jade');

router.get('/', function(req, res) {
    page.onRoute(req, res);
});

module.exports = router;