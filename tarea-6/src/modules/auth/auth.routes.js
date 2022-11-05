const {signIn, signUP} = require('./auth.controller');
const router = require('express').Router();

router.post('/signup', signUP);
router.post('/signin', signIn);

module.exports = router;