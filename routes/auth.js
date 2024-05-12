const router = require('express').Router();
const { isAuthenticated } = require('../models/auth');
const authController = require('../controllers/auth');

router.get('/', (req, res) => {
    res.render('login.ejs', { messages: { error: '' } });
});

// router.post('/login', isAuthenticated, (req, res) => {
//     res.redirect('/home');
// });
router.get('/login', authController.login);
router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.get('/home', authController.home);


module.exports = router;