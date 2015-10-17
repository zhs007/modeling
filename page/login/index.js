/**
 * Created by zhs007 on 15/10/16.
 */

var express = require('express');
var router = express.Router();

var BasePage = require('../../base/basepage').BasePage;
var PageDef = require('../../base/pagedef');

class Page_Login extends BasePage {

    constructor(jadefile) {
        super(jadefile, PageDef.PAGE_LOGIN);

        this.name = Page_Login.name;


        this.addMod('user');
        //this.onInit();
    }

    onRequest(ri) {

        return super.onRequest(ri);
        //this.renderparam.mapProj = mgrProj.mapProj;
    }
}

var page = new Page_Login('views/login/index.jade');

router.get('/', function(req, res) {
    page.onRoute(req, res);
});

module.exports = router;