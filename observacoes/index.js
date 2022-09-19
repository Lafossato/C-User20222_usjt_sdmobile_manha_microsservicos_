const express = require('express')
const app = express()
//aplicamos um middleware
app.use(express.json())

//localhost:5000/lembretes/abcd/observacoes
app.post('/lembretes/:id/observacoes', (req, res) =>{

})

//localhost:5000/lembretes/:id/observacoes
app.get('/lembretes/:id/observacoes' , (req,res) => {

})

app.listen(5000, () => console.log('Observacoes. Porta 5000.'))