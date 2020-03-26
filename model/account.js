'use strict';
var connection = require('../config/connect');
var client = require('../config/client');
const assert = require('assert');
var accountResponse = require('../controller/account');

module.exports = {
    account: function(req, res){
        client.connect(function(err){
            assert.equal(null, err);
            console.log("Connected successfully to server");
    
            const db =client.db('budget');
    
            db.collection('account').find().toArray(function(err, result){
                accountResponse.sendJson(result, res);
            });
            
        });
    },
    saveAccount: function(req, res){
        var data = req.body;
        client.connect(function(err){
            assert.equal(null, err);
            console.log("Connected successfully to server");
    
            const db =client.db('budget');

            db.collection('account').insertOne(data, function(err, result){
                console.log(result);
                if (err) throw err;
                // db.close();
            });
            
            // db.collection('account').find().toArray(function(err, result){
                //     accountResponse.sendJson(result, res);
                // });
                
            });
            
            accountResponse.sendJson(data, res);
        // accountResponse.sendJson(data, res);
    }

};
