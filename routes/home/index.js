var express = require('express');
const flash = require('express-flash');
var router = express.Router();
var User = require('../../controllers/user.server.controller');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home/index', {title: 'LMS'});
});

router.route('/signin')
      .get(function(req, res) {
        res.render('home/signin', {title: 'Sign In'})
      })
      .post(User.auth);

module.exports = router;
