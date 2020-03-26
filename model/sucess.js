'use strict';

exports.success = function(values, res){
    var data = {
        'status': 200,
        'values': values
    };
    // res.setHeader('Content-Type', 'application/json');
    // res.end(JSON.stringify(data));
    res.render('users', {title: 'List User', datas: data.values});
};