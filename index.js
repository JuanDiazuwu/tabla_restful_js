const express = require('express');
const app = express();

app.post('/results/:x/:y', (req, res) =>{
    const {x, y} = req.params;
    res.send((Number(x) * Number(y)).toString());
});

app.get('/results/:x/:y', (req, res) => {
    const {x, y} = req.params;
    res.send((Number(x) + Number(y)).toString());
});

app.get('/results/', (req, res) =>{
    res.send('Results list');
});

app.put('/results/:x/:y', (req, res) => {
    const {x, y} = req.params;
    res.send((Number(x) / Number(y)).toString());
});

app.patch('/results/:x/:y', (req, res) => {
    const {x, y} = req.params;
    res.send((Number(x) ** Number(y)).toString());
});

app.delete('/results/:x/:y', (req, res) => {
    const {x, y} = req.params;
    res.send((Number(x) - Number(y)).toString());
});

app.listen(6969);