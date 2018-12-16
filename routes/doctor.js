var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    res.render ('Doctors',{
        title: 'Es'
    });
   
})
module.exports = router;