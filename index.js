const express = require('express')
const axios = require('axios')
const app = express()

app.get('/',(req,res)=>{
    res.sendStatus(200)
})

app.get('/moeda/',(req,res)=>{  
    const options = {
        method: 'GET',
        url: 'https://api.coingecko.com/api/v3/simple/price',
        params: {
            vs_currencies: `${req.query.vs_currencies}`,
            include_last_updated_at: 'true',
            ids: `${req.query.coin}`
        }
    }
    axios.request(options)
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
