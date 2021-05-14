// Almost need this everyone --------------------------
const users = require('../models/users');

// ----------------------------------------------------

const index = (req, res) => {
    res.render('users/index.ejs', {users: users});
}

const signup = (req, res) => {
    res.render('users/signup.ejs')
}

const createUser = (req, res) => {
    const uuid = new Date().valueOf();
    req.body.uuid = uuid;
    users.push(req.body);
    console.log(uuid);
    res.redirect('/users');
}

const show = (req, res) => {
    for(let i = 0; i < users.length; i++) {
        if( parseInt(users[i].uuid) === parseInt(req.params.id)) {
            res.render('users/profile.ejs', {user: users[i] })
        }
        else{
            res.render('users/signup.ejs');
        }
    }
}




// Need this in everyone to export the above ----------

module.exports = {
    index,
    signup,
    createUser,
    show
}