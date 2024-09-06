import express from 'express'; // Importa el framework Express
import patientRoutes from './routes/patientRoutes'; // Rutas relacionadas con pacientes
import doctorRoutes from './routes/doctorRoutes';   // Rutas relacionadas con doctores
import emergencyRoutes from './routes/emergencyRoutes'; // Rutas relacionadas con emergencias
import treatmentRoutes from './routes/treatmentRoutes'; // Rutas relacionadas con tratamientos

const app = express(); // Inicializa la aplicación Express
app.use(express.json()); // Middleware para interpretar los datos JSON en las solicitudes

// Rutas
app.use('/api', patientRoutes);  
app.use('/api', doctorRoutes);   
app.use('/api', emergencyRoutes);
app.use('/api', treatmentRoutes); 

// Puesta en marcha del servidor
const port = process.env.PORT || 3001; // Toma el puerto de las variables de entorno o usa 3001 por defecto
app.listen(port, () => {
  console.log(`Server running on port ${port}`); // Muestra un mensaje cuando el servidor está corriendo
});
