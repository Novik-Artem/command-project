import { AppDataSource } from "./data-source";
import express, { Request, Response } from "express";
import { User } from "./entity/User";

const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 7000;

// const characters = [
//   {
//     char_id: 1,
//     name: "Walter White",
//     birthday: "09-07-1958",
//     occupation: "High School Chemistry Teacher",
//     img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
//     status: "Presumed dead",
//     nickname: "Heisenberg",
//   },
//   {
//     char_id: 2,
//     name: "Jesse Pinkman",
//     birthday: "09-24-1984",
//     occupation: "High School Chemistry Teacher",
//     img: "https://vignette.wikia.nocookie.net/breakingbad/images/9/95/JesseS5.jpg/revision/latest?cb=20120620012441",
//     status: "Alive",
//     nickname: "Cap n' Cook",
//   },
//   {
//     char_id: 3,
//     name: "Skyler White",
//     birthday: "08-11-1970",
//     occupation: "High School Chemistry Teacher",
//     img: "https://s-i.huffpost.com/gen/1317262/images/o-ANNA-GUNN-facebook.jpg",
//     status: "Alive",
//     nickname: "Sky",
//   },
//   {
//     char_id: 4,
//     name: "Walter White Jr.",
//     birthday: "07-08-1993",
//     occupation: "High School Chemistry Teacher",
//     img: "https://media1.popsugar-assets.com/files/thumbor/WeLUSvbAMS_GL4iELYAUzu7Bpv0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/01/12/910/n/1922283/fb758e62b5daf3c9_TCDBRBA_EC011/i/RJ-Mitte-Walter-White-Jr.jpg",
//     status: "Alive",
//     nickname: "Flynn",
//   },
//   {
//     char_id: 5,
//     name: "Henry Schrader",
//     birthday: "Unknown",
//     occupation: "High School Chemistry Teacher",
//     img: "https://vignette.wikia.nocookie.net/breakingbad/images/b/b7/HankS5.jpg/revision/latest/scale-to-width-down/700?cb=20120620014136",
//     status: "Deceased",
//     nickname: "Hank",
//   },
//   {
//     char_id: 6,
//     name: "Marie Schrader",
//     birthday: "Unknown",
//     occupation: "High School Chemistry Teacher",
//     img: "https://vignette.wikia.nocookie.net/breakingbad/images/1/10/Season_2_-_Marie.jpg/revision/latest?cb=20120617211645",
//     status: "Alive",
//     nickname: "Marie",
//   },
//   {
//     char_id: 7,
//     name: "Mike Ehrmantraut",
//     birthday: "Unknown",
//     occupation: "High School Chemistry Teacher",
//     img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_mike-ehrmantraut-lg.jpg",
//     status: "Deceased",
//     nickname: "Mike",
//   },
//   {
//     char_id: 8,
//     name: "Saul Goodman",
//     birthday: "Unknown",
//     occupation: "High School Chemistry Teacher",
//     img: "https://vignette.wikia.nocookie.net/breakingbad/images/1/16/Saul_Goodman.jpg/revision/latest?cb=20120704065846",
//     status: "Alive",
//     nickname: "Jimmy McGill",
//   },
//   {
//     char_id: 9,
//     name: "Gustavo Fring",
//     birthday: "Unknown",
//     occupation: "High School Chemistry Teacher",
//     img: "https://vignette.wikia.nocookie.net/breakingbad/images/1/1f/BCS_S4_Gustavo_Fring.jpg/revision/latest?cb=20180824195925",
//     status: "Deceased",
//     nickname: "Gus",
//   },
//   {
//     char_id: 10,
//     name: "Hector Salamanca",
//     birthday: "Unknown",
//     occupation: "High School Chemistry Teacher",
//     img: "https://vignette.wikia.nocookie.net/breakingbad/images/b/b4/Hector_BCS.jpg/revision/latest?cb=20170810091606",
//     status: "Deceased",
//     nickname: "Don Hector",
//   },
//   {
//     char_id: 11,
//     name: "Domingo Molina",
//     birthday: "Unknown",
//     occupation: "High School Chemistry Teacher",
//     img: "https://vignette.wikia.nocookie.net/breakingbad/images/e/e7/Krazy8.png/revision/latest?cb=20130208041554",
//     status: "Deceased",
//     nickname: "Krazy-8",
//   },
//   {
//     char_id: 12,
//     name: "Tuco Salamanca",
//     birthday: "Unknown",
//     occupation: "High School Chemistry Teacher",
//     img: "https://vignette.wikia.nocookie.net/breakingbad/images/a/a7/Tuco_BCS.jpg/revision/latest?cb=20170810082445",
//     status: "Deceased",
//     nickname: "Tuco",
//   },
//   {
//     char_id: 13,
//     name: "Marco & Leonel Salamanca",
//     birthday: "Unknown",
//     occupation: "High School Chemistry Teacher",
//     img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_the-cousins-lg.jpg",
//     status: "Deceased",
//     nickname: "The Cousins",
//   },
//   {
//     char_id: 14,
//     name: "Lydia Rodarte-Quayle",
//     birthday: "Unknown",
//     occupation: "High School Chemistry Teacher",
//     img: "https://media1.popsugar-assets.com/files/thumbor/wERDST0TUb-iHCSb2r5ZpsvaZLo/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2013/07/17/675/n/1922283/fae2f583f04bb80f_Laura-Fraser-is-back-as-Lydia-Rodarte-Quayle_gallery_primary/i/Laura-Fraser-Lydia-Rodarte-Quayle.jpg",
//     status: "Deceased",
//     nickname: "Lydia",
//   },
//   {
//     char_id: 15,
//     name: "Todd Alquist",
//     birthday: "Unknown",
//     occupation: "High School Chemistry Teacher",
//     img: "https://vignette.wikia.nocookie.net/breakingbad/images/9/95/Todd_brba5b.png/revision/latest?cb=20130717134303",
//     status: "Deceased",
//     nickname: "Ricky Hitler",
//   },
//   {
//     char_id: 16,
//     name: "Jane Margolis",
//     birthday: "Unknown",
//     occupation: "High School Chemistry Teacher",
//     img: "https://vignette.wikia.nocookie.net/breakingbad/images/b/b4/Jane.jpg/revision/latest?cb=20090621233653",
//     status: "Deceased",
//     nickname: "Apology Girl",
//   },
//   {
//     char_id: 17,
//     name: "Skinny Pete",
//     birthday: "Unknown",
//     occupation: "High School Chemistry Teacher",
//     img: "https://vignette.wikia.nocookie.net/breaking-bad-tv/images/c/ce/Sp.png/revision/latest?cb=20121016143623",
//     status: "Alive",
//     nickname: "Skinny",
//   },
//   {
//     char_id: 18,
//     name: "Brandon Mayhew",
//     birthday: "Unknown",
//     occupation: "High School Chemistry Teacher",
//     img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_badger-lg.jpg",
//     status: "Alive",
//     nickname: "Badger",
//   },
//   {
//     char_id: 19,
//     name: "Huell Babineaux",
//     birthday: "Unknown",
//     occupation: "High School Chemistry Teacher",
//     img: "https://vignette.wikia.nocookie.net/breakingbad/images/c/c1/4x11_-_Huell.png/revision/latest?cb=20130913100459&path-prefix=es",
//     status: "Alive",
//     nickname: "Huell",
//   },
//   {
//     char_id: 20,
//     name: "Steven Gomez",
//     birthday: "Unknown",
//     occupation: "High School Chemistry Teacher",
//     img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_steven-gomez-lg.jpg",
//     status: "Deceased",
//     nickname: "Gomie",
//   },
// ];

const app = express();
app.use(express.json());

const pg = require('pg');


app.post("/users", async (req: Request, res: Response) => {
  const { name, email, role } = req.body;

  try {
    const user = User.create({ name, email, role });
    await user.save();
    return res.status(201).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

app.get("/users", async (req: Request, res: Response) => {

  try {
    const user = await User.find();
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});
//app.listen(PORT_DB, () => console.log("good"));



AppDataSource.initialize()
  .then(async () => {
    app.listen(PORT, () =>
      console.log("Server up at http://localhost:4000")
    );
  })
	.catch((error) => console.log(error));
