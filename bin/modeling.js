/**
 * Created by zhs007 on 15/7/31.
 */

var config = require('../config');
var debug = require('debug')(config.appname);
var app = require('../app');
var util = require('util');
var log = require('../base/logger');

var now = new Date();

log.log('info', util.format('%s %d-%d-%d start...', config.appname, now.getFullYear(), now.getMonth() + 1, now.getDate()));
log.log('info', util.format('ver is %s', config.ver));

app.set('port', config.service_port);

var server = app.listen(app.get('port'), function() {
    log.log('info', 'Express server listening on port ' + server.address().port, {port: server.address().port});
});