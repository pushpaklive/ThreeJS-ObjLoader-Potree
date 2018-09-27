var express = require('express');
var path = require('path');
const app = express();

app.use(express.static(path.join(__dirname,'public')))

app.listen(5000, function() { console.log('listening on port 5000'); });