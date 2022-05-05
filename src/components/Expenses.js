import ExpenseItem from "./ExpenseItem";
import {Grid} from "@material-ui/core";
import React, {useState} from "react";
import NewExpense from "./NewExpense";


const Expenses = () => {

    const initialExpense = [
        {
            id: 1,
            title: 'Grocery',
            expenseAmount: 100,
            date: new Date(2020, 7, 14),
        },
        {
            id: 2,
            title: 'Petrol',
            expenseAmount: 200,
            date: new Date(2021, 2, 28),
        },
        {
            id: 3,
            title: 'Electricity',
            expenseAmount: 300,
            date: new Date(2021, 5, 12),
        },
    ];
    let idCount = 3;
    let [expense,setExpense] = useState(initialExpense);



    const addExpense = (newExpense) => {
        newExpense.id = idCount+1;
        idCount= idCount+1;
        setExpense([...expense,newExpense])
    }
    return (
        <>
            <Grid container direction="column" style={{padding: "15px"}}>
                <NewExpense addExpense={addExpense}/>
                {expense.map((expense) =>
                    <ExpenseItem title={expense.title}
                                 expenseAmount={expense.expenseAmount}
                                 date={new Date(expense.date)}/>
                )}
            </Grid>
        </>
    )
}

export default Expenses;