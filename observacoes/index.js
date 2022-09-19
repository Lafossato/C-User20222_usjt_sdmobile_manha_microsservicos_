const express = require('express')
const{v4: uuidv4} = require ('uuid')
const app = express()
//aplicamos um middleware
app.use(express.json())

//localhost:5000/lembretes/abcd/observacoes
app.post('/lembrete/:id/observacoes', (req, res) =>{
    const idObs = uuidv4()
    //desestruturação do JavaScript
    //req.body = {texto: "Comprar açúcar"}
    //const texto = resq.body.texto
    const {texto} = req.body
//req.params é um objeto que representa os parametros da requisição
//o nome id representa o id contido na url, req,params.id
const observacoesDoLembrete = observacoesPorLembreteId[req.params.id] || []
observacoesDoLembrete.push({id: idObs, texto: texto})
observacoesPorLembreteId[req.params.id] = observacoesDoLembrete
//201: Created
res.status(201).send(observacoesDoLembrete)
})

//localhost:5000/lembretes/:id/observacoes
app.get('/lembretes/:id/observacoes' , (req,res) => {
app.get('/lembretes/:id/observacoes' , (req, res)=> {
    res.send(observacoesPorLembreteId[req.params.id] || [] )
})
})

app.listen(5000, () => console.log('Observacoes. Porta 5000.'))