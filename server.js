const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');


app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));
//Dit zorgt ervoor dat Express formulierdata kan lezen (zoals naam, email, wachtwoord).

app.get('/', (req, res) => { res.send("Homepagina werkt!"); });
app.get('/succes', (req, res) => { res.send("Het was een succes!"); });
app.get('/register', (req, res) => {
    res.render('pages/register');
});
//Deze route laat jouw registratieformulier zien.

app.post('/succes', (req, res) => {
    const { naam, email, wachtwoord } = req.body;

    console.log("Nieuwe registratie");
    console.log("Naam:", naam);
    console.log("Email:", email);
    console.log("Wachtwoord:", wachtwoord);

    res.render("pages/succes", {naam, email, wachtwoord});
    

});

app.listen(2000, () => {
    console.log("server draait op localhost:2000");
});

//req.body bevat alle gegevens uit het formulier 

