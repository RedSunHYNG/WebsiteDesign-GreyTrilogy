var express = require('express');
var router = express.Router();
var sql = require('../config/mysql.js')
/* GET home page. */
router.get('/', function(req, res, next) {
  sql.query('select * from tbanner',function(err,data){
    console.log(err)
    console.log(data)
    res.send(data);
  })
});

module.exports = router;
