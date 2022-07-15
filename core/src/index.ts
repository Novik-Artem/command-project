import { AppDataSource } from "./data-source";
import app from "./delivery";

const PORT = 7000;

AppDataSource.initialize()
  .then(async () => {
    app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
  })
  .catch((error) => console.log(error));
