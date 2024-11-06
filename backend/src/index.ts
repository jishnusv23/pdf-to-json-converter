import express, { Application, Request, Response } from "express";
import { config } from "dotenv";
import morgan from "morgan";
import path from "path";
import router from "./router";
config();
const app: Application = express();
import cors from "cors";

const PORT: number = Number(process.env.PORT) || 3001;

const corsOPtions = {
  origin: process.env.FRONT_END_URL,
  methods: "GET,POST,PUT,PATCH,DELETE,HEAD",
  credentials: true,
};
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("dev"));
app.use(cors(corsOPtions));

//checking postman
app.get("/test", (res: Response, req: Request) => {
  console.log("working the port");
  res.status(200).json({ success: true, message: "appicall working " });
});
app.use(router)

app.listen(PORT || 3001, () => {
  console.log(`the Service will runing on the ${PORT}`);
});
