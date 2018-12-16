var express = require('express');
var router = express.Router();

    var sql = require("mssql");


    var config = {
    
        user: 'sa',
        password: 'abcdefg',
        server: 'localhost\\AA', 
        database: 'hospital',
        port: 8080,
        dialect: 'mssql'
    }
    
    sql.connect(config, function(err){
    if(err) console.log(err);
    
    var request = new sql.Request();
    request.query('select * from doctors', function(err,recordset){
        if(err) console.log(err);
        router.get('/', function(req,res){
        res.render('index',{
            data:recordset
        })
        
    })
    
    })

})



module.exports = router;
