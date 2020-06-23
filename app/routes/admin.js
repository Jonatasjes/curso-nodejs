module.exports = function(app) {
    app.get('/formulario_inclusao_noticia', (req,res)=>{
        res.render('admin/form_add_noticia', {validacao: {}, noticia: {}})
    })

    app.post('/noticias/salvar', (req,res)=>{
        const noticia = req.body

        req.assert('titulo','Título é obrigatório.').notEmpty()
        req.assert('resumo','Título é obrigatório.').notEmpty()
        req.assert('resumo','Resumo deve ter entre 10 e 100 caracteres.').len(10,100)
        req.assert('autor','Nome do autor é obrigatório.').notEmpty()
        req.assert('data_noticia','Data é obrigatória.').notEmpty().isDate({format: 'YYYY-MM-DD'})
        req.assert('noticia','Notícia é obrigatória.').notEmpty()

        const erros = req.validationErrors()

        if(erros) {
            res.render('admin/form_add_noticia', {validacao: erros, noticia: noticia})
            return
        }

        const connection = app.config.dbConnections()
        const noticiasDAO = new app.app.models.NoticiasDAO(connection)

        noticiasDAO.salvarNoticia(noticia, (error, result)=> {
            res.redirect('/noticias')
        })

    })
}
