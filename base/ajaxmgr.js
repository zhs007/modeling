/**
 * Created by zhs007 on 15/8/3.
 */

var jadecache = require('jadecache');
var renderparams = require('./renderparams');
var mainworkspace = require('./mainworkspace');
//var testmgr = require('./testmgr');
//var slotsmgr = require('../data/slotsmgr');

function renderimp(req, res, mws) {
    var param = renderparams.getDefaultParam(req);
    var ret = {};

    ret.navsidebar = jadecache.render2str('views/inc/nsb_main.jade', param);

    if (mws == mainworkspace.MSW_TEST_MAIN) {
        ret.mainworkspace = jadecache.render2str('views/test/main.jade', param);

        //slotsmgr.procMainConfig(param.lstconfig, function (lstlabel, lstval) {
        //    ret.configchart_label = lstlabel;
        //    ret.configchart_val = lstval;
        //});
        //ret.configchart_label = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ,21, 22, 23];
        //ret.configchart_val = [500, 600, 600, 600, 100, 500, 500, 500, 500, 500, 500, 100, 500, 500, 500, 200, 300, 500, 100, 100, 100, 100, 100, 100];
    }
    else if (mws == mainworkspace.MSW_TEST_RUNNING) {
        ret.mainworkspace = jadecache.render2str('views/test/running.jade', param);
    }
    else if (mws == mainworkspace.MSW_REFURBISH_RUNNING) {
        //ret.mainworkspace = jadecache.render2str('views/test/running.jade', param);
        //
        //ret.si_clientnums = testmgr.getStatistics(req.session.id, 'si_clientnums');
        //ret.si_heaptotal = testmgr.getStatistics(req.session.id, 'si_heaptotal');
        //ret.si_heapused = testmgr.getStatistics(req.session.id, 'si_heapused');
        //ret.si_totalclientnums = testmgr.getStatistics(req.session.id, 'si_totalclientnums');
    }

    res.send(JSON.stringify(ret));
}

function render(req, res, mainworkspace) {
    req.session.curmainworkspace = mainworkspace;

    renderimp(req, res, mainworkspace);
}

exports.render = render;