const Estados = require('../models/Estados.js');

module.exports = function(app) {

  //var  = require('../models/Estados.js');
  var estado = require('../models/Estados.js');

  //GET - Return all  in the DB
  findAllEstados = function(req, res) {
	estado.find(function(err, tvshows) {
  		if(!err) {
        console.log('GET /estados')
  			res.send(tvshows);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };

  //GET - Return a TVShow with specified ID
  findById = function(req, res) {
	estado.findById(req.params.id, function(err, tvshow) {
  		if(!err) {
        console.log('GET /estados/' + req.params.id);
  			res.send(tvshow);
  		} else {
  			console.log('ERROR: ' + err);
  		}
  	});
  };

  //Link routes and functions
  app.get('/estados', findAllEstados);
  app.get('/estados/:id', findById);
  

}