'use strict';
const express = require('express');
const app= express()
const cors = require('cors');
const logger = require('./middleware/logger');
const serverError =require('../src/error-handlers/500')
const pagNotFound =require('../src/error-handlers/404')
const validator = require('../src/middleware/validator')
app.use(cors())

app.use(logger)

app.get('/',handleHome)
app.get('/person',validator,nameHandler)

app.use("*",pagNotFound)
app.use(serverError)



function handleHome(req, res) {
    res.status(200).json({
      code: 200,
      message: 'Welcome to Home page',
    })
  }
  function nameHandler (req,res){
    // let name = req.quary.name
    // console.log(req.quary)
    res.status(200).json({
    code: 200,
    message: ` name is  ${req.query.name} `
  })
  }


  module.exports = {
    app,
    start
  }
function start (PORT){
app.listen(PORT ,() =>{
    console.log(`lets gooo on PORT: ${PORT}`)
})}