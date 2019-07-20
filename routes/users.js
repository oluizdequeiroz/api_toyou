var express = require('express');
var router = express.Router();
var model = require('../models/index');

/* GET users listing. */
router.get('/', function (req, res, next) {
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

router.get('/:id/saldo', (req, res, next) => {
  model.sequelize.query(`SELECT max(id), saldo FROM wo_moedas WHERE user_id = ${req.params.id} GROUP BY saldo`,
    { type: model.sequelize.QueryTypes.SELECT }
  )
    .then(user => res.json({
      error: false,
      data: user[0].saldo
    }))
    .catch(error => res.json({
      error: true,
      exception: error
    }))
});

module.exports = router;
