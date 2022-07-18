import { AppDataSource } from "../../data-source";

class DBConnector {
	
  constructor() {
    AppDataSource.initialize();
  }

  //const isMigrationsNeed = await this.connector.showMigrations();
  //if (isMigrationsNeed) {
  //  console.log("STARTING MIGRATION");
  //  await this.connector.runMigrations();
  //  console.log("MIGRATION SUCCEED");
  //}
}

export default new DBConnector();
