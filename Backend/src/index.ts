import express from 'express';
import { getPatients, addPatient } from './models/patient';

const app = express();
app.use(express.json());

app.get('/patients', (req, res) => {
  res.send(getPatients());
});

app.post('/patients', (req, res) => {
  addPatient(req.body);
  res.status(201).json({ message: 'Patient added' });
});

// Otros endpoints 
const port = 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
