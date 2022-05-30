const express = require('express');
const path = require('path');
const Parser = require('body-parser');
const {getCow, addCow} = require('../database/index.js');
const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(Parser.json());


app.post('/api/cows',(req,res)=>{
  console.log("req.body ____ "+req.body)

  addCow(req.body, (err,data)=>{
    if(err){
      console.log('err in post')
    }else{
      console.log('data inside post'+ JSON.stringify(data));
      res.json(data);;
    }
  })
})

app.get('/api/cows', (req, res) => {
  console.log("req.body___in get"+req.body)
  getCow((err,results)=>{
    if(err){
      console.log('err inside get server')
    }else{
      console.log('result inside get'+ JSON.stringify(results));
      res.json(results);
    }
  })

})

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
