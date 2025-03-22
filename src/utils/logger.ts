import pino from 'pino';
import dayjs from 'dayjs';
import dotenv from 'dotenv';

dotenv.config();
const level = process.env.LOG_LEVEL || 'info';
const logger = pino({
    transport: {
        target: 'pino-pretty'
    },
    level,
    base: {
        pid: false,
    },
    timestamp: () => `,"time":"${dayjs().format()}"`
});

export default logger;