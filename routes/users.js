var express = require('express');
var router = express.Router();

const {createUser} = require ("../controller/index");
router.post('/createUser',createUser);

const {getUser} = require ("../controller/index");
router.get('/getUser',getUser);

const {getUserById} = require ("../controller/index");
router.get('/getUserById',getUserById);

const {deleteUser} = require ("../controller/index");
router.delete('/deleteUser',deleteUser);

const {updateUser} = require ("../controller/index");
router.put('/updateUser',updateUser);

module.exports = router;
