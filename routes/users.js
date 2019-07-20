var express = require('express');
var router = express.Router();
var model = require('../models/index');

const scriptSaldo = `SELECT id as saldoId, saldo FROM toyousoc_toyou_rede.wo_moedas WHERE user_id = :id GROUP BY saldo ORDER BY id desc`;

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
  model.sequelize.query(scriptSaldo,
    {
      replacements: { id: req.params.id },
      type: model.sequelize.QueryTypes.SELECT
    }
  )
    .then(result => res.json({
      error: false,
      data: result && (result[0] && result[0].saldo)
    }))
    .catch(error => res.json({
      error: true,
      exception: error
    }))
});

router.get('/:id/saldo/historico', (req, res, next) => {
  model.sequelize.query(scriptSaldo,
    {
      replacements: { id: req.params.id },
      type: model.sequelize.QueryTypes.SELECT
    }
  )
    .then(result => res.json({
      error: false,
      data: result
    }))
    .catch(error => res.json({
      error: true,
      exception: error
    }))
});

module.exports = router;
