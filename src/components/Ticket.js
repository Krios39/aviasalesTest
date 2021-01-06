import Box from "@material-ui/core/Box";
import React from "react";
import {makeStyles} from "@material-ui/styles";
import {Typography} from "@material-ui/core";
import WayInformationRow from "./WayInformationRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
    main:{
        marginTop:20,
    },
    ticket: {
        display: "flex",
        flexDirection: "column",
        padding:20
    },
    firstColumn: {
        display: "flex",
        flexDirection: "row",
        justifyContent:"space-between"
    },
})

export default function Ticket({ticket}) {
    const classes = useStyles()

    return (
        <Box className={classes.main}>
        <Paper elevation={3} className={classes.ticket}>
            <Box className={classes.firstColumn}>
                <Typography> {ticket.price}</Typography>
                <Typography> Лого</Typography>
            </Box>
            <WayInformationRow segment={ticket.segments[0]}/>
            <WayInformationRow segment={ticket.segments[1]}/>
        </Paper>
        </Box>
    )
}