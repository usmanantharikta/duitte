'use strict';
var connection = require('../config/connect');
var client = require('../config/client');
const assert = require('assert');
var response = require('../model/sucess');

exports.users = function(req, res){
    // let limit = req.query.limit;
    // console.log('limit : '+ limit);
    // connection.query('SELECT * FROM employee limit '+limit, function (error, rows, fields){
    //     if(error){
    //         console.log('error');   
    //     }else{
    //         // console.log(rows);
    //         response.success(rows, res);
    //     }
    // });

    client.connect(function(err){
        assert.equal(null, err);
        console.log("Connected successfully to server");

        const db =client.db('budget');
        // db.collection('account').find().toArray(function(err, result){
        //     console.log(result);
        // });

        db.collection('transaction').aggregate([
            {
                $lookup: {
                    from: "account",
                    localField: "account",
                    foreignField: "id",
                    as: "fromItems"
                }
            },
            {
                $replaceRoot: {newRoot : {$mergeObjects: [{$arrayElemAt: ["$fromItems", 0]}, "$$ROOT" ]}}
            },
            {$project: { fromItems : 0 }}
        ]).toArray(function(err, result){
            console.log(result);
            response.success(result, res);
        });
        
    });
};