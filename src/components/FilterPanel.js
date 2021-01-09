import React from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/styles";
import {FormControl, Typography, withStyles} from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import clsx from "clsx";

const AviasalesFormControlLabel = withStyles({
    root:{
       '&:hover':{
           backgroundColor:"#F1FCFF"
       }
    }
})(FormControlLabel)

const AviasalesCheckbox = withStyles({
    root: {
        color: '#2196F3',
        '&$checked': {
            color: '#2196F3',
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles({
    main: {
        display: "flex",
        flexDirection: "column",
        marginRight: 20,
        paddingBottom:10,
        paddingTop:8,
        width:232
    },
    checkboxContainer: {
        display: "flex",
        flexDirection: "row",
        paddingLeft: 20,
        paddingRight: 20,
        height:40,
        margin:0
    },
    textBox: {
        textWeight:600,
        paddingLeft: 20,
        paddingBottom: 8,
        paddingRight: 20,
    },
    text:{
        fontSize:12,
    },
    checkbox: {
        width: 0,
        height:0,
        marginRight: 10,
        paddingLeft: 9,

    }
})

export default function FilterPanel() {

    const classes = useStyles()

    return (
        <Box>
            <Paper elevation={3} className={classes.main}>
                <Typography className={clsx(classes.textBox,classes.text) }>КОЛИЧЕСТВО ПЕРЕСАДОК</Typography>
                <FormControl>
                    <FormGroup>
                        <AviasalesFormControlLabel className={classes.checkboxContainer} control={<AviasalesCheckbox className={classes.checkbox}/>} label={<Typography className={classes.text}>Все</Typography>}/>
                        <AviasalesFormControlLabel className={classes.checkboxContainer} control={<AviasalesCheckbox className={classes.checkbox}/>} label={<Typography className={classes.text}>Без пересадок</Typography>}/>
                        <AviasalesFormControlLabel className={classes.checkboxContainer} control={<AviasalesCheckbox className={classes.checkbox}/>} label={<Typography className={classes.text}>1 пересадка</Typography>}/>
                        <AviasalesFormControlLabel className={classes.checkboxContainer} control={<AviasalesCheckbox className={classes.checkbox}/>} label={<Typography className={classes.text}>2 пересадки</Typography>}/>
                        <AviasalesFormControlLabel className={classes.checkboxContainer} control={<AviasalesCheckbox className={classes.checkbox}/>} label={<Typography className={classes.text}>3 пересадки</Typography>}/>
                    </FormGroup>
                </FormControl>
            </Paper>
        </Box>
    )
}