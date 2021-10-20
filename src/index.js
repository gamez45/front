const app = require('./app');
const https = require('https');
const path = require('path');
const fs = require('fs');


async function main() {
    await app.listen(app.get('port'));
    console.log('Server on port', app.get('port'));
}

main();