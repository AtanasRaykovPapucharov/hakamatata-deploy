const express = require('express');
const app = express();
const path = require('path');
const prerender = require('prerender-node');
const port = process.env.PORT || 3339;

app.use(prerender);
app.use('/', express.static(path.join(__dirname, './')));
app.listen(port, () => {
    console.log('Server listening at ' + port);
});
