const express = require('express')

const github = require('github-profile')

const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.set('view engine','ejs')

app.get('/',(req,res)=>{
      res.render("index",{profile: ''})
})

app.post('/getInfo',(req,res) => {
      github(req.body.email).then((profile) => {
            console.log(profile)
            res.render('index',{profile:profile})
      })
})

app.listen(5000,()=>{
      console.log("Server Started")
})