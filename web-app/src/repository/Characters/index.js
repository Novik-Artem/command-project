import Connector from "../connector";

class Caracters {
  getPersons = async () => {
    const result = {
        value: null,
        error: null
    }
    try {
      const response =  await Connector.connector.get("/characters");
      result.value = response.data;
    } catch (error) {
      result.error = error;
    }
    return result
  };
}
export default new Caracters();
