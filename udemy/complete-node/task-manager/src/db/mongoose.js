import mongoose from 'mongoose';

// connecting to database through mongoose
mongoose.connect(process.env.MONGODB_URL);
