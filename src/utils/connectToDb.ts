import mongoose from 'mongoose';

export const connectToDb = async () => {
    const dbUri = process.env.DB_URI as string;
    try{
        await mongoose.connect(dbUri)
        console.log('connected to database');
    } catch(error){
        console.error('Error connecting to database:', error);
        process.exit(1);
    }
};