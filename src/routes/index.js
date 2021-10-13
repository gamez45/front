const express = require('express');
const router = express.Router();
const fs = require('fs');
const uuidv4 = require('uuid/v4');
const request = require('request');


router.get('/', async (req, res) => {

  
fs.readFile('../chocolopas/uploads/6473fafa26cba1dac0c9ea16a4ac0c.jpg', 'base64', (err, response) => {
  if (err) {
    return console.log(err);
  }
 

let contents = response;



  res.render('login',{contents});

});


});

router.post('/', (req, res) => {
  const token = []
  
    const { loginEmail, loginPassword } = req.body;
  
    if (!loginEmail || !loginPassword ) {
      res.status(400).send("Ingresar datos");
      return;
    }
  
    var newLogin = {
      loginEmail,
      loginPassword
      
    };
  
    console.log(newLogin)
  
    
    var options = {
      'method': 'POST',
      'url': 'http://tlacuache.racing/auth/login',
      'headers': {
        'Authorization': 'Bearer',
        'Content-Type': 'application/json',
       },
      body: JSON.stringify({"email": newLogin.loginEmail,"password": newLogin.loginPassword})
    
    };
    request(options, function (error, response) {
      try{
      
      const res0 = response.body;
      
      const respa = JSON.parse(res0);
      const respa0 = respa.data;
      const token0 = respa0.access_token;
      const A = token0;
      
    
      token.push(A)
    
     fs.writeFileSync('./src/setting/user/user1Token.json', JSON.stringify(`${token}`));
    console.log(token)
  
    res.render('tablero');
  
  }catch(e){
  
    res.render('index');
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
