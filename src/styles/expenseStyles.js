import {makeStyles} from "@material-ui/core";

export default makeStyles(() => ({

    expenseItem: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
        padding: "0.5rem",
        margin: "1rem 0",
        borderRadius: "12px",
        // backgroundColor: "#4b4b4b"
    },
    expenseAmount: {
        border: "5px solid white",
        backgroundColor: "purple",
        borderRadius: 20,
        alignItems: "flex-end",
        justifyItems: "flex-end",
        minHeight: "20px",
        maxHeight: "40px",
    },

    date: {
        paddingLeft: "40px"
    },

    title: {
        fontWeight: "bold",
        fontSize: "18px",
        alignItems: "left"
    }
}))