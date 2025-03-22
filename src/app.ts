import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectToDb } from './utils/connectToDb';
import logger from './utils/logger';
import authRouter from './routes/authRouter';
dotenv.config();

const app = express();

app.use(cors({origin: "http://localhost:3000", credentials: true}));
app.use("/auth", authRouter);
app.listen(2000, () => {
    logger.info("App is running on port 2000");
    connectToDb();
});