/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/5/13.
 */
var express = require('express');
var OAuth = require('wechat-oauth');
var router = express.Router();
router.all('/', function(req, res, next){
  req.query.code;
  res.send('用户授权成功' + req.query.code);

});
module.exports = router;