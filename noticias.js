const http = require('http')

const server = http.createServer((req, res)=> {

    const categoria = req.url
    console.log(categoria)
    switch(categoria) {
        case '/tecnologia':
            res.end('<html><body>Notícias de Tecnologia</body></html>')
            break;
        case '/moda':
            res.end('<html><body>Notícias de Moda</body></html>')      
            break;
        case '/beleza':
            res.end('<html><body>Notícias de beleza</body></html>')
            break;
        default:
            res.end('<html><body>Portal de notícias</body></html>')
            break;
    }

})

server.listen(3000)