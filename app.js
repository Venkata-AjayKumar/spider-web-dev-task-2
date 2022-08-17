const express=require("express")
const path=require('path')
const fs=require('fs')

const app=express();

app.use('/static',express.static('static'))
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'))
app.get("/",(req,res)=>{
app.render('index.pug')

})
app.listen(8800,()=>{
    console.log('server running...')
})