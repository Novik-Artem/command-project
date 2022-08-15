import Connector from "../connector";

class Quotes {
  getPersonQuote = async (name) => {
    const result = {
      value: null,
      error: null,
    };
    try {
      const response = await Connector.connector.get(
        `quotes/random?author=${name}`
      );
      let info = response.data;
      info.length > 0
        ? (result.value = response.data)
        : (result.value = "Нет цитат");
    } catch (error) {
      result.error = error;
    }
    return result;
  };
}
export default new Quotes();
