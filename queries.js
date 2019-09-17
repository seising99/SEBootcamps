/* Add all the required libraries*/
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config'),
	listingFile = require('./listings.json');

/* Connect to your database using mongoose - remember to keep your key secret*/
mongoose.connect(config.db.uri, { useNewUrlParser: true });

/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html

var findLibraryWest = function() {

	Listing.find({name: 'Library West'}, function(err,docs){
		
		console.log(docs);
		
	});

};

var removeCable = function() {
 
	Listing.findOneAndDelete({code: 'CABL'}, function(err){})
 
};
var updatePhelpsMemorial = function() {
  
    //Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then 
    //log the updated document to the console. 
	Listing.findOneAndUpdate({code: 'PHL'},{address: '1953 Museum Rd, Gainesville, FL 32603, United States'}, function(err){});
   
};
var retrieveAllListings = function() {
  
	Listing.find({}, function(err,docs){
		
		console.log(JSON.stringify(docs,null,1));
		
	});
	
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();
