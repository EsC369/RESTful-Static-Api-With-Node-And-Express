const http = require('http');
const express = require('express');
const itemsRouter = require('./routes/api/items');
const app = express();
app.use(express.json());

app.use('/items', itemsRouter);
app.use('/', function(req, res) {
    res.send({"msg": "Api Works!"});
});

const server = http.createServer(app);
const port = 5000;
server.listen(port);
console.debug('Server listening on port ' + port);