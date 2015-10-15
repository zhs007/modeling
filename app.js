/**
 * Created by zhs007 on 15/7/31.
 */

var config = require('./config.js');

//var dbmgr = require('./mod/dbmgr');
//dbmgr.newDBClient('user', config.basedb_host, config.basedb_user, config.basedb_pwd, config.basedb_name);
//dbmgr.newDBClient('app', config.basedb_host, config.basedb_user, config.basedb_pwd, config.basedb_name);
//
//var redismgr = require('./mod/redismgr');
//redismgr.newRedisClient('user', config.redis_host, config.redis_port);
//redismgr.newRedisClient('app', config.redis_host, config.redis_port);

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var redisOpt = {host: config.redis_host, port: config.redis_port, db: config.redis_dbindex};
var routemgr = require('./base/routemgr');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('trust proxy', 1);

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser('pbmgr'));
app.use(session({store: new RedisStore(redisOpt), secret: 'keyboard cat', resave: false, saveUninitialized: false}));
app.use(express.static(path.join(__dirname, 'public')));

routemgr.init(app);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
