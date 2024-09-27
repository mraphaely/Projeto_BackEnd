import express from 'express';
import cors from 'cors';
import conn from './config/conn.js';
import router from './router/user-router.js';

const PORT = 3693;
const app = express();

app.use(cors());
app.use(express.urlencoded( {extended: true} ));
app.use(express.json());

app.use('/', router);

conn
   .sync()
   .then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
   })
   .catch((error) => console.log(error));
