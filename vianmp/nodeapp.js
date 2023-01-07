const express = require('express')
const path = require('path')
const app = express()
//const app = express.Router()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })


app.get('/file/:name', function (req, res, next) {

    // http://localhost:3000/file/react.js
    var options = {
      root: path.join(__dirname, 'file'),  // directory with content
      dotfiles: 'deny',
      headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
      }
    }
  
    var fileName = req.params.name
    res.sendFile(fileName, options, function (err) {
      if (err) {
        next(err)
      } else {
        console.log('Sent:', fileName)
      }
    })
  })


  app.get('/', function (req, res, next) {

    // http://localhost:3000/file/react.js
    var options = {
      root: path.join(__dirname, '/pages'),  // directory with content
      dotfiles: 'deny',
      headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
      }
    }
  
    var fileName = 'index.html'
    res.sendFile(fileName, options, function (err) {
      if (err) {
        next(err)
      } else {
        console.log('Sent:', fileName)
      }
    })
  })



  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})