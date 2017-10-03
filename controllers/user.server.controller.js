var User = require('../models/users.model');
var bycrpt = require('bcrypt')
module.exports = {

  auth: function(req, res) {
    user = new User({
      username: req.body.username,
      password: req.body.password
    })

    if(user) {
      bycrpt.hash(user.password, 10, function(err, hash) {
        user.password = hash;
        user.save(function (err) {
          if (err) {
            console.log(err)
          }else{
            res.redirect('/');
          }
    
        })
      })
    }

  }


}
