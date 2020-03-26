const MongoClient = require('mongodb').MongoClient
const url = 'mongodb+srv://usman:4nth4r1kt4@cluster0-50jna.gcp.mongodb.net/test?retryWrites=true&w=majority';
// module.exports= con;
const client = new MongoClient(url);

module.exports = client;