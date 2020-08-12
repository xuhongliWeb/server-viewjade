var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 定义 上传页面路由

router.get('/upload',function(req,res,next) {
  res.render('upload', {title: '上传'})
})
module.exports = router;
