module.exports.noticias = function(app, req, res) {
    const connection = app.config.dbConnections()
    const noticiasDAO = new app.app.models.NoticiasDAO(connection)
    noticiasDAO.getNoticias( (error,result) => {
        res.render('noticias/noticias', {noticias : result})
    })
}

module.exports.noticia = function(app, req, res) {
    const connection = app.config.dbConnections()
    const noticiaDAO = new app.app.models.NoticiasDAO(connection)
    noticiaDAO.getNoticia((error, result) => {
        res.render('noticias/noticia', {noticia: result})
    })
}