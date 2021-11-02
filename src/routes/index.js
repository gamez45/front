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

router.post('/', async (req, res) => {
    const token = []

    const { loginEmail, loginPassword } = await req.body;

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

            const res0 = await response.body;

            const respa = await JSON.parse(res0);
            const respa0 = await respa.data;
            const token0 = await respa0.access_token;
            const A = await token0;


            let WT = await token.push(A);
            let uS = await _.words(newLogin.loginEmail, "@").index;

            let uE = await JSON.stringify(newLogin.loginEmail).slice(1, uS + 1);


            let wW = await fs.writeFileSync('./src/setting/user/' + uE + '.json', JSON.stringify(`${token}`));


            res.redirect(`/dashboards/${uE}`);


        } catch (e) {

            res.redirect('/');
        }
    });




});


router.get('/dashboards/:user', async(req, res) => {
    userName = await req.params.user;



    let userToken = await require(`../setting/user/${userName}.json`);

    let options = {
        'method': 'GET',
        'url': 'https://tlacuache.racing/items/menus',
        'headers': {
            'Authorization': `Bearer ${userToken}`,
            'Content-Type': 'application/json',
        }
    };
    request(options, async function(error, response) {
        try {

            const res0 = await response.body;

            const resData = await JSON.parse(res0);

            const menus = await resData.data;

           


            let wM = await fs.writeFileSync('./src/setting/collections/menu.json', JSON.stringify(menus));

            res.render(`dashboards`, { menus, userName })
           
        } catch (e) {

            res.redirect('/');
        }


    });
});


router.get('/pm_products/:user', async (req, res) => {
    userName = await req.params.user;



    let userToken = await require(`../setting/user/${userName}.json`);
    let menus = await require(`../setting/collections/menu.json`);
    
    

    let options = {
        'method': 'GET',
        'url': 'https://tlacuache.racing/items/pm_products?limit=25&fields[]=mastercodesid.partid.partname&fields[]=mastercodesid.positionid.positionname&fields[]=mastercodesid.mastercodesid&fields[]=pim_mpn.pim_mpn_mpnid.brandid.brandlogo.id&fields[]=pim_mpn.pim_mpn_mpnid.brandid.brandlogo.type&fields[]=pim_mpn.pim_mpn_mpnid.brandid.brandlogo.title&fields[]=pim_mpn.pim_mpn_mpnid.mpn&fields[]=pim_mpn._requires&fields[]=pim_mpn.id&fields[]=sku&fields[]=status&fields[]=id&sort[]=id&page=1&filter=%7B%22status%22:%7B%22_neq%22:%22archived%22%7D%7D&meta[]=filter_count&meta[]=total_count',
        'headers': {
            'Authorization': `Bearer ${userToken}`,
            'Content-Type': 'application/json',
        }
    };
    request(options, async function(error, response) {
        try {
           // let menus = await require(`../setting/collections/menu.json`);
            const res0 = await response.body;

            const resData = await JSON.parse(res0);

            const Meta = await resData.meta
            const pmProducts = await resData.data



          

           res.render(`pm_products`, { pmProducts, menus, userName })
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