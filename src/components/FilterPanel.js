import React from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/styles";
import {Typography} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles({
    main:{
        display:"flex",
        flexDirection:"column"
    }
})

export default function FilterPanel(){

    const classes = useStyles()

    return(
        <Box>
        <Paper elevation={3} className={classes.main}>
            <FormControlLabel control={<Checkbox/>} label={<Typography>Все</Typography>}/>
            <FormControlLabel control={<Checkbox/>} label={<Typography>Без пересадок</Typography>}/>
            <FormControlLabel control={<Checkbox/>} label={<Typography>1 пересадка</Typography>}/>
            <FormControlLabel control={<Checkbox/>} label={<Typography>2 пересадки</Typography>}/>
            <FormControlLabel control={<Checkbox/>} label={<Typography>3 пересадки</Typography>}/>
        </Paper>
        </Box>
    )
}