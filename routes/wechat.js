/* ************************************************************************** */
/*                                                                            */
/* 每位工程师都有保持代码优雅和整洁的义务                                             */
/*                                                                            */
/* ************************************************************************** */
/**
 * Created by saber on 16/5/12.
 */
var express = require('express');
var wechat = require('wechat');
var OAuth = require('wechat-oauth');
var config = require('../config/index.js');
var router = express.Router();
//router.all('/', wechat('saber', function(req, res, next){
//  console.log('????');
//  res.send('火影忍者');
//  var message = req.weixin;
//  console.log(message);
//  if(message.MsgType === 'text'){
//
//  }
//
//}));
var wxOAuthClient = new OAuth(config.appID, config.appsecret);

router.all('/', wechat('saber').text(function(message, req, res, next) {
  console.log(message);
  //res.reply('刘靖雯是一个美女')
  res.reply([
    {
      title: '你来我家接我吧',
      description: '这是女神与高富帅之间的对话',
      picurl: 'http://nodeapi.cloudfoundry.com/qrcode.jpg',
      url: 'http://nodeapi.cloudfoundry.com/'
    },
    {
      title: '你来我家接我吧',
      description: '这是女神与高富帅之间的对话',
      picurl: 'http://nodeapi.cloudfoundry.com/qrcode.jpg',
      url: 'http://nodeapi.cloudfoundry.com/'
    }
  ]);
  //var url = wxOAuthClient.getAuthorizeURL('http://oxhvhlvynz.proxy.qqbrowser.cc/oauth', 1, 'snsapi_userinfo');
  //console.log(url);
  //res.reply('OAuth2.0网页授权演示'+
  //    '<a' +
  //    ' href="'+url+'">点击这里体验</a>'+
  //    '技术支持');
}).event(function(message, req, res, next) {
  console.log(message);
  switch (message.EventKey) {
  case 'activity':
    res.reply([
      {
        "title": "最新动态",
        "description": "莱丽文化的最新动态",
        "picurl": "https://mmbiz.qlogo.cn/mmbiz/ibMask9rxz2H2iaJUUw8lvggREibiaMyrx9TjYxK6aySEW0yL9ACLBc6PO3IbibC4Q6VCjopekbOb25ibwynIzhnyCIQ/0?wx_fmt=jpeg",
        "url": "http://mp.weixin.qq.com/s?__biz=MjM5Nzg1MzY1Nw==&mid=205816138&idx=1&sn=1b2ef93db269dcd7a9d7bd0b636c21f9#rd"
      }])
    break;
  }
}).middlewarify());
module.exports = router;