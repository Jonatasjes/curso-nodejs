module.exports = (appp) => {

    appp.get('/noticias', (req,res)=>{

        const connection = appp.config.dbConnections()
        

        const noticiasDAO = new appp.app.models.NoticiasDAO(connection)

        noticiasDAO.getNoticias( (error,result) => {
            res.render('noticias/noticias', {noticias : result})
        })
    })
}
