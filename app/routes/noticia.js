module.exports = (app) => {
    app.get('/noticia', (req, res)=> {
        const connection = app.config.dbConnections()

        const noticiaDAO = new app.app.models.NoticiasDAO(connection)

        noticiaDAO.getNoticia((error, result) => {
            res.render('noticias/noticia', {noticia: result})
        })
    })   
}