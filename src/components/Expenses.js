import ExpenseItem from "./ExpenseItem";
import {Grid} from "@material-ui/core";
import React from "react";


const Expenses = () => {
    const expenses = [
        {
            id: '1',
            title: 'Grocery',
            expenseAmount: 100,
            date: new Date(2020, 7, 14),
        },
        {
            id: '2',
            title: 'Petrol',
            expenseAmount: 200,
            date: new Date(2021, 2, 28),
        },
        {
            id: '3',
            title: 'Electricity',
            expenseAmount: 300,
            date: new Date(2021, 5, 12),
        },
    ];
    return (
        <>
            <Grid container direction="column" style={{padding: "15px"}}>
                <ExpenseItem title={expenses[0].title}
                             expenseAmount={expenses[0].expenseAmount}
                             date={expenses[0].date}/>

                <ExpenseItem title={expenses[1].title}
                             expenseAmount={expenses[1].expenseAmount}
                             date={expenses[1].date}/>

                <ExpenseItem title={expenses[2].title}
                             expenseAmount={expenses[2].expenseAmount}
                             date={expenses[2].date}/>
            </Grid>
        </>
    )
}

export default Expenses;