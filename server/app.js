/**
 * Created by gfrethem on 9/25/15.
 */
var express = require('express');
var colors = require('./public/assets/data');



var app = express();

app.use(express.static(__dirname + '/public'));

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Listening on port: ' + port);
});

app.get('/', function(request, response) {
    response.sendFile(__dirname + '/public/views/index.html')
});

app.get('/getColors', function(request, response) {
    response.send(colors);
    console.log('Colors JSON sent.')
});


module.exports = app;