import { Quote } from '../../entity/Quote';

class qoutesService {
  getQuotes = async () => {
    const result = {
      value: await Quote.find(),
      error: undefined,
    };
    if (result.error) return { error: result.error };
    return { value: result.value };
  };

}

export default new qoutesService();
