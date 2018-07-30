const express = require('express')
const app = express()

const routers = require('./js/routers') (app)

const port = 3000

app.listen(port, () => {
	console.log('listening...')
})
