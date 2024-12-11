import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI ?? 'mongodb://localhost:27017/backend_project';
    await mongoose.connect(uri, {});
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // stop service
  }
};

export default connectDB;
