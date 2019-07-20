var express = require('express');
var router = express.Router();
var model = require('../models/index');

const simpleQuery = (sql, res) => model.sequelize.query(sql, { type: model.sequelize.QueryTypes.SELECT })
  .then(result => res.json({
    error: false,
    data: result
  }))
  .catch(error => res.json({
    error: true,
    exception: error
  }));

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

router.get('/:column/:type/:value', (req, res, next) => {
  const { column, type } = req.params;

  if (type === 'like') {
    simpleQuery(`SELECT * FROM wo_users WHERE ${column} like '%${req.params.value}%'`, res);
  } else {
    const value = type === 'int' ? parseInt(req.params.value) : (type === 'float' ? parseFloat(req.params.value) : `'${req.params.value}'`);
    if (type === 'in') {
      simpleQuery(`SELECT * FROM wo_users WHERE ${column} in (${value.split(",").join("','")})`, res);
    } else {
      simpleQuery(`SELECT * FROM wo_users WHERE ${column} = ${value}`, res);
    }
  }
});

module.exports = router;
