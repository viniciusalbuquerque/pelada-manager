const controllers = require('./controllers/controllers')
module.exports = (app) => {
	app.get('/peladas', controllers.peladaController.getPeladas)
	app.put('/peladas/add', controllers.peladaController.newPelada)
}