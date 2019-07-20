var express = require('express');
var router = express.Router();
var model = require('../models/index');

const scriptSaldo = `SELECT id as saldoId, saldo FROM toyousoc_toyou_rede.wo_moedas WHERE user_id = :id ORDER BY id desc`;
const promiseScriptSaldo = id => model.sequelize.query(scriptSaldo,
  {
    replacements: { id },
    type: model.sequelize.QueryTypes.SELECT
  }
);
const promiseCreateSaldo = (user_id, saldo) => model.wo_moedas.create({ user_id, saldo });

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
    }));
});

router.get('/:id/saldo', (req, res, next) => {
  promiseScriptSaldo(req.params.id).then(result => res.json({
    error: false,
    data: result && (result[0] && result[0].saldo)
  }))
    .catch(error => res.json({
      error: true,
      exception: error
    }));
});

router.get('/:id/saldo/historico', (req, res, next) => {
  promiseScriptSaldo(req.params.id).then(result => res.json({
    error: false,
    data: result
  }))
    .catch(error => res.json({
      error: true,
      exception: error
    }));
});

router.put('/:id/saldo/deducao', (req, res, next) => {
  promiseScriptSaldo(req.params.id).then(result => {
    const saldoAtual = (result && (result[0] && result[0].saldo)) || 0;
    const novoSaldo = saldoAtual - req.body.saldo;

    promiseCreateSaldo(req.params.id, novoSaldo)
      .then(result => res.json({
        error: false,
        message: 'Valor deduzido no saldo!'
      }))
      .catch(error => res.json({
        error: true,
        exception: error
      }));
  })
    .catch(error => res.json({
      error: true,
      exception: error
    }));
});

router.put('/:id/saldo/adicao', (req, res, next) => {
  promiseScriptSaldo(req.params.id).then(result => {
    const saldoAtual = (result && (result[0] && result[0].saldo)) || 0;
    const novoSaldo = saldoAtual + req.body.saldo;

    promiseCreateSaldo(req.params.id, novoSaldo)
      .then(result => res.json({
        error: false,
        message: 'Valor adicionado no saldo!'
      }))
      .catch(error => res.json({
        error: true,
        exception: error
      }));
  })
    .catch(error => res.json({
      error: true,
      exception: error
    }));
});

router.put('/:id/saldo/novo', (req, res, next) => {
  promiseCreateSaldo(user_id, saldo).then(result => res.json({
    error: false,
    message: 'Novo saldo inserido com sucesso!'
  }))
    .catch(error => res.json({
      error: true,
      exception: error
    }));
});

module.exports = router;
