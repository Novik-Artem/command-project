import charactersService from "./charactersService";
import quotesService from "./quotesService";
class UseCases {
	APICharacters = charactersService;
	APIQuotes = quotesService
}
export default new UseCases();
