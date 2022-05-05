import {Button, Grid, Paper} from '@material-ui/core'
import * as React from 'react'
import styles from "../styles/expenseStyles"
import ExpenseDate from "./ExpenseDate";
import {useState} from "react";

const ExpenseItem = ({title: initialTitle, expenseAmount, date}) => {

    const [title,setTitle] = useState(initialTitle);

    const onClickChangeTitle = () => {
        setTitle("New title");
    }

    const classes = styles();
    return (
        <div>
            <Paper className={classes.expenseItem}>
                <ExpenseDate date={date}/>
                <Grid item className={classes.title}>{title}</Grid>
                <Grid item xs={2} className={classes.expenseAmount}>Expense : {expenseAmount}</Grid>
                <Button size="small" onClick={onClickChangeTitle}  style={{color:"darkred",fontSize:"15px"}}>Change title</Button>
            </Paper>

        </div>
    )
}

export default ExpenseItem;