import React, {useState} from "react";
import {Button, ButtonGroup, makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    checked:{
        width:"100%",
        backgroundColor:"#2196F3",
        color:"#fff",
        border: "1px solid #2196F3",
        "&:hover":{
            backgroundColor:"#2196F3"
        }
    },
    unchecked:{
        width:"100%",
        border: "1px solid #DFE5EC",
        backgroundColor:"#fff"
    },
    buttonGroup:{
        height:"50px",

    }
})

export default function SortPanel(){
    const classes = useStyles()

    const [checkedTab,setCheckedTab] = useState(1)

    const getCheckedStyle =(button)=>{
        if(button===checkedTab) return classes.checked
        else return classes.unchecked
    }

    return(
        <ButtonGroup className={classes.buttonGroup}>
            <Button className={getCheckedStyle(1)} onClick={()=>setCheckedTab(1)}>Самый дешёвый</Button>
            <Button className={getCheckedStyle(2)}  onClick={()=>setCheckedTab(2)}>Самый быстрый</Button>
        </ButtonGroup>
    )
}