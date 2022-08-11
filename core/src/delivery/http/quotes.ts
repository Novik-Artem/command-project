import express, { Router, Request, Response } from "express";
import UC from "../../usecases";
import cors from "cors";

const router: Router = express.Router();

router.use(cors());

router.get("/quotes", cors(), async (req: Request, res: Response) => {
  const { value, error } = await UC.APIQuotes.getQuotes();
  if (error) {
    res.status(500).json(error || new Error("UC undefined error"));
    return;
  }
  res.status(200).json(value);
});

router.get("/quotes/random", cors(), async (req: Request, res: Response) => {
  const { author } = req.query;

  const { value, error } = await UC.APIQuotes.getQuotes();
  if (error) {
    res.status(500).json(error || new Error("UC undefined error"));
    return;
	}

	const newArray = value.filter((item) => {
		return item.author === author
	})

	function getRandomArbitrary(newArray) {
		return Math.ceil(Math.random() * (newArray.length - 0) + 0)
	}

	const randomQuote = getRandomArbitrary(newArray)
	
	res.status(200).json(newArray[randomQuote] || null);
	
});

export default router;

//?author=Jesse+Pinkman
