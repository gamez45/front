const express = require('express');
const router = express.Router();
const fs = require('fs');
const uuidv4 = require('uuid/v4');
const request = require('request');
const _ = require('lodash');
const session = {}

router.get('/', async(req, res) => {


    fs.readFile('../uploads/2064c728-9f5a-49b6-9405-bb0dea599451.jpg', 'base64', (err, response) => {
        if (err) {
            return console.log(err);
        }


        let contents = response;



        res.render('login', { contents });

    });


});

router.post('/', (req, res) => {
    const token = []

    const { loginEmail, loginPassword } = req.body;

    if (!loginEmail || !loginPassword) {
        res.status(400).send("Ingresar datos");
        return;
    }

    let newLogin = {
        loginEmail,
        loginPassword

    };

    console.log(newLogin)


    let options = {
        'method': 'POST',
        'url': 'https://tlacuache.racing/auth/login',
        'headers': {
            'Authorization': 'Bearer',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "email": newLogin.loginEmail, "password": newLogin.loginPassword })

    };
    request(options, async function(error, response) {
        try {

            const res0 = response.body;

            const respa = JSON.parse(res0);
            const respa0 = respa.data;
            const token0 = respa0.access_token;
            const A = token0;


            token.push(A);
            let uS = await _.words(newLogin.loginEmail, "@").index;

            let uE = await JSON.stringify(newLogin.loginEmail).slice(1, uS + 1);

            console.log(uE);


            fs.writeFileSync('./src/setting/user/' + uE + '.json', JSON.stringify(`${token}`));



            res.status(token).redirect('/tablero/:uE');


        } catch (e) {

            res.redirect('/');
        }
    });




});


router.get('/tablero', (req, res) => {
    userParam = req.params.uE;
    console.log(User);

    let User = require(`../setting/user/${userParam}.json`);

    let options = {
        'method': 'GET',
        'url': 'https://tlacuache.racing/collections',
        'headers': {
            'Authorization': `Bearer ${User}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "email": newLogin.loginEmail, "password": newLogin.loginPassword })

    };
    request(options, function(error, response) {
        try {

            const res0 = response.body;

            const respa = JSON.parse(res0);
            const respa0 = respa.data;
            const token0 = respa0.access_token;
            const A = token0;


            token.push(A)

            fs.writeFileSync('./src/setting/user/user1Token.json', JSON.stringify(`${token}`));
            console.log(token)

            res.render('tablero');

        } catch (e) {

            res.redirect('/');
        }


    });
});

router.get('/productlist', (req, res) => {
    res.render('productlist');
});

router.get('/productlist', (req, res) => {
    res.render('productlist');
});

router.get('/addproduct', (req, res) => {
    res.render('addproduct');
});

router.get('/mercadolibre', (req, res) => {
    res.render('mercadolibre');
});

module.exports = router;