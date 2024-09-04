import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
app.use(express.json());

const dataPath = path.join(__dirname, 'data', 'tuarchivo.json');

// Endpoint para obtener los datos
app.get('/data', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Error al leer el archivo JSON' });
        } else {
            res.json(JSON.parse(data));
        }
    });
});

// Endpoint para agregar datos
app.post('/data', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Error al leer el archivo JSON' });
            return;
        }

        const jsonData = JSON.parse(data);
        const newEntry = req.body;

        // Agregar la nueva entrada al JSON
        jsonData.push(newEntry);

        // Escribir de vuelta el archivo JSON
        fs.writeFile(dataPath, JSON.stringify(jsonData, null, 2), (err) => {
            if (err) {
                res.status(500).json({ error: 'Error al escribir en el archivo JSON' });
            } else {
                res.status(201).json({ message: 'Datos agregados correctamente' });
            }
        });
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
