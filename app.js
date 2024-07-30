const express = require('express');
const path = require('path')
const expressLayouts  = require( 'express-ejs-layouts' )

const  app = express();

app.set("view engine", "ejs");
app.use(expressLayouts);

app.use(express.static(path.join(__dirname, '/public')));


const router =  require('./routes/router');
app.use(router.routes)

/*
app.get('/', (req, res) => {res.send('dashboard con node js')} );*/


app.listen(3000,()=> {console.log("Server up running in http://localhost:3000")})