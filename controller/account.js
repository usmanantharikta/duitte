'use strict';

exports.sendJson = function(values, res){
    // res.setHeader('Content-Type', 'application/json');
    let data = values.map((val , index) => {
        return {'id': index+1, 'name' : val.name};
    })
    res.json(data);
    res.end();
};