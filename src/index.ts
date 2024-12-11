import express from 'express';
import connectDB from './config/db';
import authRoutes from './routes/authRoutes';
import protectedRoutes from './routes/protectedRoutes';
const app = express();

// Middleware
app.use(express.json());
app.use('/api', protectedRoutes);

// Health Check endpoint
app.get('/health', (_req, res) => {
    res.status(200).send({ status: 'OK', message: 'Server is running' });
});
//auth
app.use('/api/auth', authRoutes);

// Port
const PORT = process.env.PORT ?? 3000;

const startServer = async () => {
    try {
        await connectDB(); // Conect to MongoDB
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Error starting server:', error);
        process.exit(1); // stop conection
    }
};

startServer();
