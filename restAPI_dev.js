var express = require('express');
var app = express();

var api_routes = require('./api_routes_dev.js');
app.use('/api', api_routes);

app.use('/', express.static('front_end'));

app.listen(3000, function() {
    console.log("Server is running.")
    console.log(employee);
});

module.exports = app;