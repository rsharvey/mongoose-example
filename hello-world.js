/* Node.js Mongoose Skeleton Example
 *
 * This script demonstrates how to connect to a mongodb database and
 * perform basic operations.
 *
 * Set up:
 * 		- Install mongodb:
 * 		- Install node.js:
 * 		- Install npm, the node package manager:
 * 		- Install mongoose: npm install mongoose
 * 		- Start the database: mongod
 * 			(note that typing 'mongo' into the shell will open an interactive prompt.
 * 			Among other things, this allows us to see what databases are available. Usually
 * 			'test' is available, so that's the database we'll be using.)
 *		- Run this file: node example.js
 */

var mongoose = require('mongoose');

// connect to mongodb, and the 'test' database
mongoose.connect('mongodb://localhost:27017/test');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

// Define a simple schema. Note that this is authorative; we can't use a
// feild unless it is declared here first.
ThingSchema = new Schema({
  'name': String,
  'age': Number
});

// 'Thing' is the name of the mongo collection
var Thing = mongoose.model('Thing', ThingSchema);

// create a new instance of Thing
var newThing = new Thing({a:'hello world'});

newThing.save(function(err){
  // saving is asynchronous
  if(err) console.log("Something went wrong while saving the thing");
  else console.log("Thing was successfully saved");
});

// retrieving all Things
Thing.find({ /* mongo selectors go here */ } , function(err,docs){
  // find is also async
  // docs contains all the results
  // err contains the error if any
});
