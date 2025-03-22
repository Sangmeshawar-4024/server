const express = require('express')

const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('About page!')
})

app.get('/home',(req,res)=>{
    res.send('Home page!')
})

app.post('/post',(req,res)=>{
    console.log(req.body)
    res.send('Post request received!')
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)  
 
})