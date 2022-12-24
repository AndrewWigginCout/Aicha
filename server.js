const express = require('express')
const path    = require('path')
const app = express()
const morgan = require('morgan')
app.use(morgan('tiny'))
app.use(express.urlencoded())

app.post('/index.html', (req,res)=>{
  console.log('POST')
  req.body.date=new Date()
  var car = req.body.prefer.includes("car")
  var json = JSON.stringify(req.body,null,2)
  var rs = "POST RECIEVED<br/>"
  if (car){
    rs+="FYI my favorite muscle car is the Ford Mustang. ;)<br>"
    rs+='<img src="mustang.webp"><br>'
  }
  res.status(200).send(rs+"<pre>"+json+"</pre")
})
app.use(express.static('.'))

const unknownEndpoint = (request, response) => {
  response.status(404).send(`<h1>404</h1>`)
  }
  app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})