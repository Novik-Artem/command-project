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
  res.status(200).json(value);
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
