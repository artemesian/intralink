const express=require('express');
const app=express();
const cors=require('cors');
const bodyParser=require('body-parser');
const server=require('http').createServer(app);
require('dotenv').config();
const dbConnect = require('./db.connect');
const User=require('./routes/User.route.js')
const Article=require('./routes/Article.route.js')
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(cors());
app.use(bodyParser.json({linmit:"50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}))

app.use('/',User);
app.get('/',(req,res)=>{
	console.log('hello guys');
	res.json({message:'hello guys'})
})
const port =process.env.PORT;
server.listen(port,console.log(`server is running on port ${port}`))