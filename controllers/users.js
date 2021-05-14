// Almost need this everyone --------------------------
const users = require('../models/users');

// ----------------------------------------------------

const index = (req, res) => {
    res.render('users/index.ejs', {users: users});
}







// Need this in everyone to export the above ----------

module.exports = {
    index
}