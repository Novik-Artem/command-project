import { Character } from "../../entity/Character";

class charactersService {
  getCharacters = async () => {
    const result = {
      value: await Character.find(),
      error: undefined,
    };
    if (result.error) return { error: result.error };
    return { value: result.value };
  };
}

export default new charactersService();
