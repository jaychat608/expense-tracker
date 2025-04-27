import { useUser } from "@clerk/clerk-react";
import {createContext, useContext, useState, useEffect} from "react";


interface FinancialRecord {
    id?: string;
    userId: string;
    date: Date;
    description: string;
    amount: number;
    category: string;
    payment: string;
}

interface FinancialRecordsContextType {
    records: FinancialRecord[];
    addRecord: (record: FinancialRecord) => void;
    // updateRecord: (id: string, newRecord: FinancialRecord) => void;
    // deleteRecord: (id: string) => void;
}
export const FinancialRecordsContext = createContext<FinancialRecordsContextType | undefined>(undefined);

export const FinancialRecordsProvider = ({children} : {children: React.ReactNode}) => {

    const [records, setRecords] = useState<FinancialRecord[]>([]);
    const { user } = useUser();

    const fetchRecords = async () => {
        if (!user){
            return;
        }
        const response = await fetch(`http://localhost:3001/financial-records/getAllByUserID/${user?.id}`)
        if (response.ok){
            const records = await response.json();
            setRecords(records);
        }
    }

    useEffect(() => {
        fetchRecords;
    }, [user]);

    const addRecord = async (record: FinancialRecord) => {
        const response = await fetch("http://localhost:3001/financial-records", {
            method: "POST", 
            body: JSON.stringify(record), 
            headers: {'Content-Type': "application/json"}});
        try{
            if (response.ok) {
                const newRecord = await response.json()
                setRecords((prev) => [...prev, newRecord])
            }
        } catch (err) {
            console.log("This is main problem");
        }
    };

    return <FinancialRecordsContext.Provider value = {{records, addRecord}}>
        {children}
    </FinancialRecordsContext.Provider>
}

export const useFinancialRecords = () => {
    const context = useContext<FinancialRecordsContextType | undefined>(
        FinancialRecordsContext
    );

    if (!context) {
        throw Error("No context found!");
    }

    return context;
}