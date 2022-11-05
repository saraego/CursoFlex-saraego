const express = require('express')
const {engine} = require('express-handlebars')
const app = express()

require('dotenv').config()

const helpers = require('./helpers/handlebars')
const router = require('./routes/routes')



app.engine('handlebars', engine({
    helpers: helpers
}))

app.set('view engine', 'handlebars')

app.use(express.urlencoded({extended: true}))
app.use('/',router)


app.listen(process.env.PORT, ()=>{
    console.log("servido ligado na porta 3000");
})