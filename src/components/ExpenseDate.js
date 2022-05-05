import {Grid} from "@material-ui/core";
import * as React from "react";
import styles from '../styles/expenseStyles'

const ExpenseDate = (props) => {
    let classes = styles();
    const year = props.date.getFullYear();
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    return (
        <div>
            <Grid container direction="column" className={classes.date}>
              <div>{month}</div>
              <div>{day}</div>
              <div>{year}</div>x
            </Grid>
        </div>
    )
}

export default ExpenseDate;