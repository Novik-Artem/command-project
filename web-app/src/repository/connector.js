import axios from 'axios'

class Connector {
  connector
  constructor() {
    this.connector = axios.create({baseURL: "https://www.breakingbadapi.com/api/"})
  }
}

export default new Connector()