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
      result.value = response.data.quote ? response.data.quote : "Нет цитаты!";
    } catch (error) {
      result.error = error;
    }
    return result;
  };
}
export default new Quotes();
