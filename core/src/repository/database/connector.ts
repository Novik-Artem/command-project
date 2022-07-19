import { AppDataSource } from "../../data-source";

class DBConnector {
  constructor() {
    AppDataSource.initialize();
  }
}

export default new DBConnector();
