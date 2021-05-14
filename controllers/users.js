// Almost need this everyone --------------------------
const users = require('../models/users');

// ----------------------------------------------------

const index = (req, res) => {
    res.render('users/index.ejs', {users: users});
}

const signup = (req, res) => {
    res.render('users/signup.ejs')
}







// Need this in everyone to export the above ----------

module.exports = {
    index,
    signup
}