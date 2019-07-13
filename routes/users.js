var express = require('express');
var router = express.Router();
var model = require('../models/index');

/* GET users listing. */
router.get('/', function(req, res, next) {
  model.wo_users.findAll({})
    .then(users => res.json({
      error: false,
      data: users
    }))
    .catch(error => res.json({
      error: true,
      data: [],
      exception: error 
    }))
});

module.exports = router;
