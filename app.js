const app = require('./config/server')

const rotaHome = require('./app/routes/home')(app)

const rotaFormularioInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia')(app)

const rotaNoticias = require('./app/routes/noticias')(app)

app.listen(3000, ()=>{
    console.log('Servidor rodando com Express')
})