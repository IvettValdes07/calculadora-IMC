const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/calcular-imc', (req, res) => {

    const { peso, altura } = req.body;

    const p = parseFloat(peso);
    const a = parseFloat(altura);

    if (isNaN(p) || isNaN(a)) {
        return res.status(400).json({ error: "Valores inválidos" });
    }

    const imc = p / (a * a);

    res.json({
        imc: imc.toFixed(2)
    });

});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});