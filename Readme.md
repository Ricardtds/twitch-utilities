# Twitch Utilities

***

Esta api foi criada com a intenção de utilizar os valores fornecidos pela api da [CoinGecko](https://www.coingecko.com/api) gratuita dentro de bots da twitch!

O objetivo é retornar somente o **valor** de uma criptomoeda convertido para uma moeda de sua escolha com o intuito de que seja utilizada de forma mais agradável.

## Criptomoedas disponíveis:
    
>Como esta aplicação apenas retorna os valores obtidos do [CoinGecko](https://www.coingecko.com) os valores disponíveis são também os do CoinGecko.
[CoinGecko CriptoMoedas](https://api.coingecko.com/api/v3/coins/list)

## Moedas disponíveis
>Como esta aplicação apenas retorna os valores obtidos do [CoinGecko](https://www.coingecko.com) os valores disponíveis são também os do CoinGecko.
[CoinGecko Moedas](https://api.coingecko.com/api/v3/simple/supported_vs_currencies)

## Como requisitar o valor de uma criptomoeda:

> Para realizar uma requisição você você deverá utilizar o seguinte formato:
```
https://ricardinst-utilities.herokuapp.com/moeda?vs_currencies=[moeda]&coin=[id-criptomoeda]
```

>  Um exemplo em que retorna o valor da criptomoeda SLP(Smooth Love Potion) em BRL(Real Brasileiro):
```
https://ricardinst-utilities.herokuapp.com/moeda?vs_currencies=brl&coin=smooth-love-potion
```
```
Resposta do exemplo: 0.306187 dados de: 02/12/2021, 15:44:21
```
