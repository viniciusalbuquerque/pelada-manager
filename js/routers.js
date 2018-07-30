
module.exports = (app) => {
	app.get('/peladas', (req, res) => {
		res.send('list peladas')
	})

}