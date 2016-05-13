/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/5/12.
 */

var express = require('express');
var argv = require('optimist').argv;
var config = require('./config');
console.log(config);
var app = express();
// 设置 env
app.set('env', process.NODE_ENV ||config.env);
app.use(require('./routes'));
var port = argv.p || config.port;
app.listen(port, function(e){
  if (e) throw e;
  console.log('server started at %d', port);
});