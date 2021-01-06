import React from "react";
import Box from "@material-ui/core/Box";
import {Button, ButtonGroup} from "@material-ui/core";


export default function SortPanel(){
    return(
        <ButtonGroup>
            <Button >Самый дешёвый</Button>
            <Button>Самый быстрый</Button>
        </ButtonGroup>
    )
}