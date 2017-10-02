var User = require('../models/users.model');

module.exports = {

  auth: function(req, res) {
    user = new User({
      username: req.body.username,
      password: req.body.password
    });

    user.save(function (err) {
      if (err) {
        console.log(err)
      }else{
        res.redirect('/');
      }

    });
  }


}
