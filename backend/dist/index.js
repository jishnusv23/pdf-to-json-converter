"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const morgan_1 = __importDefault(require("morgan"));
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const PORT = Number(process.env.PORT) || 3001;
const corsOPtions = {
    origin: process.env.FRONT_END_URL,
    methods: "GET,POST,PUT,PATCH,DELETE,HEAD",
    credentials: true,
};
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, morgan_1.default)("dev"));
app.use((0, cors_1.default)(corsOPtions));
//checking postman
app.get("/test", (res, req) => {
    console.log("working the port");
    res.status(200).json({ success: true, message: "appicall working " });
});
app.listen(PORT || 3001, () => {
    console.log(`the Service will runing on the ${PORT}`);
});
