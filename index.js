const express = require('express')
const app = express()
const axios = require('axios')

app.get('/',(req,res)=>{
    res.sendStatus(200)
})

let lastvalue = '';

app.get('/moeda/slp',(req,res)=>{  
    axios.request('https://api.coingecko.com/api/v3/simple/price?ids=smooth-love-potion&vs_currencies=brl')
    .then(response=>{
        res.send(`${response.data['smooth-love-potion']['brl']}`)
        lastvalue = response.data['smooth-love-potion']['brl'];
    }).catch((error)=>{
        res.send(`ERROR: último valor foi: ${lastvalue}`)
    })
})

app.all('/*', (req,res)=>{
    res.sendStatus(204)
})

app.listen(process.env.PORT || 3000, () =>{
    console.log('Servidor rodando!');
})
    