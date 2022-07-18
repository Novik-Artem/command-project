import Database from "./database";
class Repository {
	db = Database;
	
  constructor() {
    this.db = Database;
  }
  connect = async () => {
    await this.db.connector;
  };
}
export default new Repository();
