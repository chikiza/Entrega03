const express = require('express')
const path = require('path')
const expressLayouts = require('express-ejs-layouts')

const app = express()

app.set('view engine', 'ejs')
app.use(expressLayouts)

app.get('/', (req, res)=>{
    res.send('dashboard con Node')
})

app.listen(3000, ()=> {
    console.log('server up runing')
})