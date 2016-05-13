/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/5/12.
 */
var express = require('express');
var router = express.Router();

router.use('/wechat', require('./wechat'));
router.use('/oauth', require('./oauth'));
module.exports = router;