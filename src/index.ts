import express from 'express';
import connectDB from './config/db';
import config from './config/config';
import authRoutes from './modules/user/routes/auth.route';


const app = express();

connectDB();

app.use(express.json());

app.use('/api/auth', authRoutes);

const PORT = config.PORT;

app.listen(PORT, () => {
    console.log(`Server đang được chạy trên: ${PORT}`)
})