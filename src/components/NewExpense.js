import {Button, Grid, Paper, TextField} from "@material-ui/core";
import {useEffect, useState} from "react";

const NewExpense = ({addExpense}) => {

    const [inputFields, setInputFields] = useState({title: '', expenseAmount: '', date: new Date()});

    const handleSubmit = (event) => {
        event.preventDefault();
        addExpense(inputFields);
    }

    const handleTitleChange = (event) => {
        setInputFields({
            ...inputFields,
            title: event.target.value
        })
    }

    const handleExpenseAmountChange = (event) => {
        setInputFields({
            ...inputFields,
            expenseAmount: event.target.value
        })
    }

    const handleDateChange = (event) => {
        setInputFields({
            ...inputFields,
            date: event.target.value
        })
    }

    return (
        <>
            <Paper square style={{width: "400px", height: "200px"}}>
                <form onSubmit={handleSubmit}>
                    <Grid container>
                        <div style={{width: "200px"}}>Title :</div>
                        <TextField title="title" onChange={handleTitleChange}/>
                    </Grid>
                    <Grid container>
                        <div style={{width: "200px"}}>Expense Amount :</div>
                        <TextField title="expense Amount" onChange={handleExpenseAmountChange}/>
                    </Grid>
                    <Grid container>
                        <div style={{width: "200px"}}>Date :</div>
                        <TextField title="date" type="date" onChange={handleDateChange}/>
                    </Grid>
                    <Button type="submit" size={"small"} style={{
                        alignSelf: "center",
                        margin: "12px",
                        backgroundColor: "lightgreen",
                        border: "1px solid green"
                    }}>Submit</Button>
                </form>
            </Paper>
        </>
    )
}

export default NewExpense;