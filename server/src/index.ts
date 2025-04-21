// PWD: EnK44ERLEeKWjNv2
import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from './routes/financial-records';

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());

const mongoURI: string = "mongodb+srv://jayantachatterjee076:EnK44ERLEeKWjNv2@expense-tracker.jmqndca.mongodb.net/";

mongoose.connect(mongoURI).then(() => console.log("CONNECTION SUCCESSFUL!")).catch((err) => console.error("CONNECTION FAILED!", err));

app.use("/financial-records", financialRecordRouter);

app.listen(port, () => {
    console.log(`Server running on Port ${port}`);
});