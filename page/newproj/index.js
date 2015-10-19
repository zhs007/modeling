/**
 * Created by zhs007 on 15/10/14.
 */

var express = require('express');
var router = express.Router();

var BasePage = require('../../base/basepage').BasePage;
var PageDef = require('../../base/pagedef');

class Page_NewProj extends BasePage {

    constructor(jadefile) {
        super(jadefile, PageDef.PAGE_NEWPROJ);

        this.name = Page_NewProj.name;


        this.addMod('user');
        this.addMod('proj');

        //this.addMod('topmenu');
        //this.addMod('leftmenu');
        //this.addMod('workspace');
        //this.onInit();
    }

    onRequest(ri) {

        super.onRequest(ri);
        //this.renderparam.mapProj = mgrProj.mapProj;
    }
}

var page = new Page_NewProj('views/newproj/index.jade');

router.get('/', function(req, res) {
    page.onRoute(req, res);
});

function init(app) {
    app.use('/newproj', router);
}

exports.init = init;