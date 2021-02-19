var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var estado = new Schema({
	nombre: 		{ type: String },
	color: 		{ type: String },
	
});


module.exports = mongoose.model('Estados', estado);