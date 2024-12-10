import express from 'express';
import connectDB from './config/db';

const app = express();

// Middleware
app.use(express.json());

// Health Check endpoint
app.get('/health', (_req, res) => {
    res.status(200).send({ status: 'OK', message: 'Server is running' });
});

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
