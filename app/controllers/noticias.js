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
    const id_noticia = req.query

    noticiaDAO.getNoticia(id_noticia, (error, result)=> {
        res.render('noticias/noticia', {noticia: result})
    })
}