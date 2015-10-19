/**
 * Created by zhs007 on 15/10/14.
 */

var express = require('express');
var router = express.Router();

var CtrlPage = require('../../base/ctrlpage').CtrlPage;
var PageDef = require('../../base/pagedef');

class Page_ProjCtrl extends CtrlPage {

    constructor() {
        super(PageDef.PAGE_PROJCTRL);

        this.name = Page_ProjCtrl.name;


        this.addMod('user');
        this.addMod('proj');

        this.addCtrl('newproj');
    }

    onRequest(ri) {
        return super.onRequest(ri);
    }
}

var page = new Page_ProjCtrl();

router.all('/:ctrl/', function(req, res) {
    page.onRoute(req, res);
});

module.exports = router;