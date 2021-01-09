import Box from "@material-ui/core/Box";
import React from "react";
import {makeStyles} from "@material-ui/styles";
import {Typography} from "@material-ui/core";
import WayInformationRow from "./WayInformationRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
    main: {
        marginTop: 20,
    },
    ticket: {
        display: "flex",
        flexDirection: "column",
        padding: 20
    },
    firstColumn: {
        display: "flex",
        flexDirection: "row",
    },
    price: {
        width: 147,
        fontSize: 24,
        color: "#2196F3",
        fontWeight: 600
    },
    logo: {
        marginLeft: 175,
    }
})

export default function Ticket({ticket}) {
    const classes = useStyles()

    const getLogo = () => {
        return "http://pics.avs.io/99/36/" + ticket.carrier + ".png"
    }

    return (
        <Box className={classes.main}>
            <Paper elevation={3} className={classes.ticket}>
                <Box className={classes.firstColumn}>
                    <Typography
                        className={classes.price}> {Math.trunc(ticket.price / 1000) + " " + ticket.price % 1000} Р</Typography>
                    <img className={classes.logo} src={getLogo()}  alt={"Kjuj"}/>
                </Box>
                <WayInformationRow segment={ticket.segments[0]}/>
                <WayInformationRow segment={ticket.segments[1]}/>
            </Paper>
        </Box>
    )
}