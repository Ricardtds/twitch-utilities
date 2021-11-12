const express = require('express')
const app = express()
const axios = require('axios')

app.get('/',(req,res)=>{
    res.sendStatus(200)
})

app.get('/moeda/',(req,res)=>{  
    axios.request(`https://api.coingecko.com/api/v3/simple/price?ids=${req.query.coin}&vs_currencies=${req.query.vs_currencies}`)
    .then(response=>{
        if(response.data[req.query.coin][req.query.vs_currencies] == undefined) {
            res.send('Erro no nome da moeda')
        } else {
            res.send(`${response.data[`${req.query.coin}`][`${req.query.vs_currencies}`]}`)
        }    
    }).catch((error)=>{
        res.send(`Erro ao obter moeda`)
    })
})

app.all('/*', (req,res)=>{
    res.sendStatus(204)
})

app.listen(process.env.PORT || 3000, () =>{
    console.log('Servidor rodando!');
})
    