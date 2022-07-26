const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 8000;

const pubDir = path.join(__dirname, './public');
const viewDir = path.join(__dirname, './templates/views');
const partialDir = path.join(__dirname, './templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewDir);
hbs.registerPartials(partialDir);
app.use(express.static(pubDir));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Final Space',
        name: 'Dinesh'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Dinesh'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text',
        title: 'Help',
        name: 'Dinesh'
    })
})

app.listen(8000, () => console.log(`Server started on port ${port}`));