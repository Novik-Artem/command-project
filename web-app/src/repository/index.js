import connector from "./connector";
import Caracters from "./Characters";
import Quotes from "./Quotes";


class Core {
    connector = connector;
    Caracters = Caracters;
    Quotes = Quotes;
}

export default new Core();
