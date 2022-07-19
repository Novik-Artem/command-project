import repository from "./repository";
import app from "./delivery";

const PORT = 7000;

async function main() {
  await repository.connect();
  await app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
}
main();
