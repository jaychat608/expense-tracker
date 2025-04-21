// PWD: EnK44ERLEeKWjNv2
import express, { Express } from "express";
import mongoose from "mongoose";

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const mongoURI: string = "mongodb+srv://jayantachatterjee076:EnK44ERLEeKWjNv2@expense-tracker.jmqndca.mongodb.net/";

mongoose.connect(mongoURI).then(() => console.log("CONNECTION SUCCESSFUL!")).catch((err) => console.log("CONNECTION FAILED!", err));