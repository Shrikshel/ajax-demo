const express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/ajax', function(req,res){
  res.send("Simple AJAX Demo!!!!")
})

app.listen(3000, function(){
  console.log('Listening At ' + 3000);
})
