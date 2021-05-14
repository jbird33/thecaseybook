const express = require('express');
const app = express();

// Below allows to be able to navigate to the public folder
app.use(express.static('public'));

//-------------------------------------------------
app.get('/', (req, res) => {
    res.render('index.ejs');
})



//-------------------------------------------------
app.listen(3000, (req, res) => {
    console.log("Up and listening on port 3000!");
})