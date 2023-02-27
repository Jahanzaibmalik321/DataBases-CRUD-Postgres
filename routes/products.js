var express = require('express');
var router = express.Router();

const {productInfo} = require ("../controller/index");
router.get('/getProducts',productInfo);

module.exports = router;
