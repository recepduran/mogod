const mongoose=require('mongoose')

// Course Modal Schema
const userSchema = new mongoose.Schema({
	
	name: String,
	orderFromSun: Number,
  hasRing: Boolean
  
},  {collection: 'planets'});
	

// Creating model objects

const User = mongoose.model('user', userSchema);
	
// Exporting our model objects
module.exports = {
	User
}
