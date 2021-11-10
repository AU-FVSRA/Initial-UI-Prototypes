const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'ConvertedPUG'));

app.get('/', (req, res) => {
    res.render('MainLayout.pug', {
        page_title: 'Minor Injury Report | FVSR',
        user: {isLoggedIn: true, firstName: "James"},
        copyright_current_year: new Date().getFullYear(),
        pretty: true //This is for pretty HTML output (technically its deprecated, but it still works)
    });
});


app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});