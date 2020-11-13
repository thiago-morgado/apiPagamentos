const express = require('express')

const app = express();

app.get('/user', (req, res) => {
  const user = {
    nome: "thiago do nascimento morgado",
    email: "thiago_morgado@hotmail.com"
  }
  return res.json(user)
})

app.get('/', (req, res) => {
  return res.json()
})

app.listen(3333)