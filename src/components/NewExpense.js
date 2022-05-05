import {Button, Grid, Paper, TextField} from "@material-ui/core";

const NewExpense = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event)
    }

    return (
        <>
            <Paper square style={{width: "400px", height: "200px"}}>
                <form onSubmit={handleSubmit}>
                    <Grid container>
                        <div style={{width:"200px"}}>Title : </div>
                        <TextField  title="title" />
                    </Grid>
                    <Grid container>
                        <div style={{width:"200px"}}>Expense Amount  : </div>
                        <TextField  title="expense Amount"/>
                    </Grid>
                    <Grid container >
                        <div style={{width:"200px"}}>Date : </div>
                        <TextField  title="date" type="date" />
                    </Grid>
                    <Button type="submit" size={"small"} style={{alignSelf:"center",margin:"12px",backgroundColor:"lightgreen",border:"1px solid green"}}>Submit</Button>
                </form>
            </Paper>
        </>
    )
}

export default NewExpense;