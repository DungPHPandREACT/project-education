import express from 'express';
import connectDB from './config/db';
import config from './config/config';


const app = express();

connectDB();

app.use(express.json());

const PORT = config.PORT;

app.listen(PORT, () => {
    console.log(`Server đang được chạy trên: ${PORT}`)
})