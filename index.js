const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000;

const categories = require('./data/categories.json')
const news = require('./data/news.json')

app.use(cors())
app.get('/',(req,res) =>{
    res.send('Dragon news running..')
})

app.get('/categories',(req,res) =>{
    res.send(categories)
})

// All news data load korar jonno use kore
app.get('/news',(req,res) =>{
    res.send(news)
})

// Specific news data load korar jonno use kore
app.get('/news/:id',(req,res) =>{
    const id = req.params.id;

    const selectedNews = news.find(n => n._id === id)
    res.send(selectedNews)
})

// Category wise news data load korar jonno use kore. 
app.get('/categories/:id',(req,res) =>{
    const id = req.params.id;

    if(id == 0){
        res.send(news)
    }
    else{
        const categoryNews = news.filter(n => n.category_id === id)
        res.send(categoryNews)
    }

   
})

app.listen(port,() =>{
    console.log('API example app listening on port',port)   
})