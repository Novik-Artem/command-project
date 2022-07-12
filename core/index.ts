import express from 'express';

const PORT:number = 4000;

const app: express.Application = express();

app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));