module.exports.index = function(app, req, res) {
    const connection = app.config.dbConnections()
    const noticiasModel = new app.app.models.NoticiasDAO(connection)

    noticiasModel.get5UltimasNoticias(function(error, result){
        res.render('home/index', {noticias: result})
    })
}