import express from 'express';
import patientRoutes from './routes/patientRoutes';
import doctorRoutes from './routes/doctorRoutes';
import emergencyRoutes from './routes/emergencyRoutes';
import treatmentRoutes from './routes/treatmentRoutes';

const app = express();
app.use(express.json());

// Rutas
app.use('/api', patientRoutes);
app.use('/api', doctorRoutes);
app.use('/api', emergencyRoutes);
app.use('/api', treatmentRoutes);

// Puesta en marcha del servidor
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
