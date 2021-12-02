const express = require('express')
const axios = require('axios')
const app = express()

function timeConverter(UNIX_timestamp){
    let a = new Date(UNIX_timestamp * 1000);
    return a.toLocaleString('en-GB', { timeZone: 'America/Sao_Paulo' });
}

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
            res.send('Erro na moeda que deseja converter!')
        }        
        else {
            let horario = timeConverter(response.data[req.query.coin]['last_updated_at'])
            res.send(`${response.data[`${req.query.coin}`][`${req.query.vs_currencies}`]} dados de: ${horario}`)            
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
