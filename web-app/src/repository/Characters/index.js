import Connector from "../connector";

class Caracters {
  getPersons = async (number) => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await Connector.connector.get(`characters?limit=${number}`);
      result.value = response.data;
    } catch (error) {
      result.error = error;
    }
    return result;
  };
  getPerson = async (id) => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await Connector.connector.get(`characters/${id}`);
      result.value = response.data[0];
    } catch (error) {
      result.error = error;
    }
    return result;
  };
  getPersonData = async (name) => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await Connector.connector.get(`characters?name=${name}`);
      result.value = response.data[0];
      console.log(response.data)
    } catch (error) {
      result.error = error;
    }
    return result;
  };
}
export default new Caracters();
