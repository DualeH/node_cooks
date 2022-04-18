'use strict'
const host = ''
const { Client } = require('@elastic/elasticsearch')
const client = new Client({
    node: host,
    auth: {
        username: 'elastic',
        password: 'X1@dataori'
    }
})

client.info().then(res => console.log(res))
module.exports =  client;

