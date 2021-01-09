import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/styles";
import clsx from "clsx";

const useStyles = makeStyles({
    otherColumns: {
        display: "flex",
        flexDirection: "row",
        marginTop: 10
    },
    ticketItem: {
        display: "flex",
        flexDirection: "column",
        width: 140,
    },
    leftPadding: {
        paddingLeft: 20
    },
    font: {
        fontWeight: 600
    },
    title: {
        color: "#A0B0B9"
    },
})

export default function WayInformationRow({segment}) {

    const classes = useStyles()

    const getFlightTime = () => {
        const date1 = new Date(segment.date[0] + segment.date[1] + segment.date[2] + segment.date[3], segment.date[5] + segment.date[6] - 1, segment.date[8] + segment.date[9], segment.date[11] + segment.date[12], segment.date[14] + segment.date[15])
        const date2 = new Date(date1.valueOf() + segment.duration * 60000)
        const hour1 = date1.getHours() < 10 ? "0" + date1.getHours() : date1.getHours()
        const hour2 = date2.getHours() < 10 ? "0" + date2.getHours() : date2.getHours()
        const minute1 = date1.getMinutes() < 10 ? "0" + date1.getMinutes() : date1.getMinutes()
        const minute2 = date2.getMinutes() < 10 ? "0" + date2.getMinutes() : date2.getMinutes()
        return hour1 + ":" + minute1 + " - " + hour2 + ":" + minute2
    }

    const getTransferCount = () => {
        if (segment.stops.length > 10 && segment.stops.length < 15) return segment.stops.length + " пересадок"
        else if ((segment.stops.length % 10) === 1) return segment.stops.length + " пересадка"
        else if ((segment.stops.length % 10) > 1 && (segment.stops.length % 10) < 5) return segment.stops.length + " пересадки"
        else if ((segment.stops.length % 10) === 0 && (segment.stops.length % 10) > 4) return segment.stops.length + " пересадок"
    }

    return (
        <Box className={classes.otherColumns}>
            <Box className={classes.ticketItem}>
                <Typography className={clsx(classes.font, classes.title)}>{segment.origin + " - " + segment.destination}</Typography>
                <Typography className={classes.font}>{getFlightTime()}</Typography>
            </Box>
            <Box className={clsx(classes.ticketItem, classes.leftPadding)}>
                <Typography className={clsx(classes.font, classes.title)}>В пути</Typography>
                <Typography className={classes.font}>{Math.trunc(segment.duration / 60)}ч {segment.duration % 60}м</Typography>
            </Box>
            <Box className={clsx(classes.ticketItem, classes.leftPadding)}>
                <Typography className={clsx(classes.font, classes.title)}>{getTransferCount()}</Typography>
                <Typography className={classes.font}>{segment.stops.join(", ")}</Typography>
            </Box>
        </Box>
    )
}