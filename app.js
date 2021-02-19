var express  = require("express"),
    app      = express(),
    http     = require("http"),
    server   = http.createServer(app),
    mongoose = require('mongoose'); 

app.configure(function () {
  app.use(express.bodyParser());
  app.use(express.methodOverride());

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


  app.use(app.router);



  
});

app.get('/', function(req, res) {
  res.send("Hello world!");
});

routes = require('./routes/Estados')(app);

mongoose.connect('mongodb://127.0.0.1:27017/Estados', function(err, res) {
	if(err) {
		console.log('ERROR: connecting to Database. ' + err);
	} else {
		console.log('Conectado a la base de datos');
	}
});

server.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});