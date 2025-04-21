import express, { Request, Response } from "express";
import financialRecordModel from "../schema/financial-record";

const router = express.Router();

router.get("/getAllByUserID/:userId", async (req: Request, res: Response) => {
    try{
        const userId = req.params.userId;
        const records = await financialRecordModel.find({userId: userId})
        if (records.length === 0) {
            res.status(404).send("No records found!");
            return;
        }
        res.status(200).send(records);
    } catch (err) {
        res.status(500).send(err);
    }
})

export default router;