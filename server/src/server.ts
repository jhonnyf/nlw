import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('teste');

    response.json(['Jhonny', 'Augusto', 'Giovanny', "Nilzemar"]);
});

app.listen(3333);