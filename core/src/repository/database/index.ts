import connector from "./connector";

class DB {
  connector = connector;
  constructor() {
    this.connector = connector;
  }
}
export default new DB();
