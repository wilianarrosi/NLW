const express = require("express")
const server = express()

// config pasta public
server.use(express.static("public"))

// util template nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: false
})

// config. caminhos da app
// pagina inicial
server.get("/", (req, res) => {
    return res.render("index.html", { title: "Seu marketplace de coleta de resí­duos" })
})

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

server.get("/search-results", (req, res) => {
    return res.render("search-results.html")
})

// ligar servidor
server.listen(3000)
