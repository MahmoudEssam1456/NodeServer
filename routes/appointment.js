var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    res.render ('Appointment',{
        title: 'Es'
    });
   
})
module.exports = router;