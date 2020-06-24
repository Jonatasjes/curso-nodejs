module.exports = (appp) => {

    appp.get('/noticias', (req,res)=>{

        const connection = appp.config.dbConnections()
        

        const noticiasDAO = new appp.app.models.NoticiasDAO(connection)

        noticiasDAO.getNoticias( (error,result) => {
            res.render('noticias/noticias', {noticias : result})
        })
    })

    app.get('/noticia', (req, res)=> {
        const connection = app.config.dbConnections()

        const noticiaDAO = new app.app.models.NoticiasDAO(connection)

        noticiaDAO.getNoticia((error, result) => {
            res.render('noticias/noticia', {noticia: result})
        })
    })
}
