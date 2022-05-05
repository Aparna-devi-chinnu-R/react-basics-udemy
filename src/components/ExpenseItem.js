import {Grid, Paper} from '@material-ui/core'
import * as React from 'react'
import styles from "../styles/expenseStyles"
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = ({title, expenseAmount, date}) => {

    const classes = styles();
    return (
        <div>
            <Paper className={classes.expenseItem}>
                <ExpenseDate date={date}/>
                <Grid item className={classes.title}>{title}</Grid>
                <Grid item xs={2} className={classes.expenseAmount}>Expense : {expenseAmount}</Grid>
            </Paper>
        </div>
    )
}

export default ExpenseItem;