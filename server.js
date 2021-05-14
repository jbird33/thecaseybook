// Lines 1 to 16 are required per file of this type ----
const express = require('express');
const app = express();

const routes = require('./routes');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
// The above have to be before the below ---
app.use('/users', routes.users);


// Below allows to be able to navigate to the public folder for the css
app.use(express.static('public'));


//-------------------------------------------------
app.get('/', (req, res) => {
    res.render('index.ejs');
})





//-------------------------------------------------
app.listen(3000, (req, res) => {
    console.log("Up and listening on port 3000!");
})