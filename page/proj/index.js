/**
 * Created by zhs007 on 15/10/14.
 */

var express = require('express');
var router = express.Router();

var BasePage = require('../../base/basepage').BasePage;
var PageDef = require('../../base/pagedef');

class Page_Proj extends BasePage {

    constructor(jadefile) {
        super(jadefile, PageDef.PAGE_MAIN);

        this.name = Page_Proj.name;


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

var page = new Page_Proj('views/proj/index.jade');

router.get('/', function(req, res) {
    page.onRoute(req, res);
});

function init(app) {
    app.use('/proj', router);
}

exports.init = init;