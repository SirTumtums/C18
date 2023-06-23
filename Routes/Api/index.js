const router = require('express').Router();
const thoughtRoute = require('./thoughtRoute');
const userRoute = require('./userRoute');

router.use('/User', userRoute);
router.use('/Thought', thoughtRoute);

module.exports = router;