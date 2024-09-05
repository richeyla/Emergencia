import express from 'express';
import fs from 'fs';
import path from 'path';
import cors from 'cors';


const app = express();
app.use(express.json());

app.use(cors());

app.use(cors({
    origin: 'http://localhost:3000', // Cambia esto al origen específico que quieras permitir
    methods: 'GET,POST', // Métodos HTTP permitidos
    allowedHeaders: 'Content-Type,Authorization', // Headers permitidos
}));


const dataPath = path.join(__dirname, 'data', '/Backend/src/data/paciente.json');

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

app.put('internal/:nombre', (req, res) => {
    const { nombre } = req.params;

    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ error: 'Error al escribir en el archivo JSON' });
            return;
        }
        const jsonData = JSON.parse(data);
        const paciente = jsonData.find(p => p.nombre === nombre);

        if (paciente) {
            paciente.internado = true;

            fs.writeFile(dataPath, JSON.stringify(jsonData, null, 2), (err) => {
                if (err) {
                    res.status(500).json({ error: 'Error al escribir en el archivo JSON' });
                } else {
                    res.status(201).json({ message: 'Paciente Internado correctamente' });
                }
            });
        } else {
            res.status(404).json({ error: 'Paciente no encontrado' });
        }
    });
});


app.listen(3000, () => {
    console.log('Server running on port 3000');
});
