const express = require("express")
const app = express()
app.use(express.json())
let pessoas = []

app.get('/pessoa', (req, res) => {
    res.json(pessoas);
})

app.get('/pessoa/:id', (req, res) => {
    const id = req.params.id
    for (i=0; i< pessoas.length; i++) {
        if (pessoas[i].id == id) {
            res.json(pessoas[i])
        }
    }
})

app.post('/pessoa', (req, res) => {
    const id = req.body.id
    const nome = req.body.nome
    let pessoa = {
        "id":id,
        "nome": nome
    }
    pessoas.push(pessoa);
    res.json(pessoa)
})

app.put('/pessoa/:id', (req, res) => {
    const id1 = req.params.id
    const id = req.body.id
    const nome = req.body.nome
    for (i = 0; i < pessoas.length; i++) {
        if (pessoas[i].id == id1) {
            pessoas[i].id = id
            pessoas[i].nome = nome
            res.send("Pessoa atualizada com sucesso!")
        }
    }
})

app.delete('/pessoa/:id', (req, res) => {
    const id = req.params.id

    for (i = 0; i < pessoas.length; i++) {
        if (pessoas[i].id == id) {
            pessoas.splice(i, 1)
            res.send("Pessoa deletada com sucesso!")
        }
    }
    
    
})

app.listen(3000, () => {
    console.log("Servidor rodando!")
})