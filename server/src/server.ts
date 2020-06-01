import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Aplicação ok');
    response.json([
        'Diego',
        'Robson',
        'Cleiton',
        'Joelma'
    ]);
});

app.listen(3333); 