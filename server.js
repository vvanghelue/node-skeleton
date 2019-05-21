const express = require('express')
const bodyParser = require('body-parser')

const PORT = 8765

//controllers
const testController = require('./controller/test.controller')

const app = express()
app.use(bodyParser.json())

app.get('/test', testController.test)
app.get('/test/params_test/:foo', testController.testParams)
app.post('/test_post', testController.testPost)

// static files (http://localhost:PORT/static/static_file.png)
app.use('/static', express.static(__dirname + '/static'))

app.listen(PORT)
console.log('Server listening on port : ' + PORT)