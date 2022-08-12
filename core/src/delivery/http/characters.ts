import express, { Router, Request, Response } from "express";
import UC from "../../usecases";
import cors from "cors";

const router: Router = express.Router();

router.use(cors());

router.get("/characters", cors(), async (req: Request, res: Response) => {
  const { value, error } = await UC.APICharacters.getCharacters();

  if (error) {
    res.status(500).json(error || new Error("UC undefined error"));
    return;
  }

  const limit = Number(req.query.limit);
  const offset = Number(req.query.offset);
	let page = Number(req.query.page);

  if (limit && limit > 0 && page) {
    let countCharacters = value.length;
    let countPages = Math.ceil(countCharacters / limit);
    if (page < 1) {
      page = 1;
    }
    if (page > countPages) {
      page = countPages;
    }

    let start = (page - 1) * limit;
    const newArr = value.slice(start, start + limit);
    res.status(200).json(newArr);
  } else if (limit && limit > 0 && offset) {
    const newArray = value.slice(offset);
    const newValLimit = newArray.slice(0, limit);
    res.status(200).json(newValLimit);
  } else if (limit && limit > 0) {
    const newArray = value.slice(0, limit);
    res.status(200).json(newArray);
  } else {
    res.status(200).json(value);
  }
});

router.get("/characters/:id", cors(), async (req: Request, res: Response) => {
  const id = req.params.id;
  const { value, error } = await UC.APICharacters.getCharactersById(id);
  if (error) {
    res.status(500).json(error || new Error("UC undefined error"));
    return;
  }
  res.status(200).json(value);
});

export default router;
