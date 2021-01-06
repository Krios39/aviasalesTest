import axios from "axios";
import React, {useEffect, useState} from "react";
import Ticket from "./components/Ticket";
import Box from "@material-ui/core/Box";
import SortPanel from "./components/SortPanel";
import FilterPanel from "./components/FilterPanel";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    main: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    tickets: {
        display: "flex",
        flexDirection: "column"
    }
})

function App() {

    const classes = useStyles()

    const [searchId, setSearchId] = useState("")
    const [tickets, setTickets] = useState([])

    useEffect(() => {
        axios.get("https://front-test.beta.aviasales.ru/search")
            .then(resp => {
                setSearchId(resp.data.searchId)
            })
    }, [])

    useEffect(() => {
        console.log(searchId)

        getTickets()
    }, [searchId])

    const getTickets = () => {
        console.log("a")
        if (searchId) axios.get("https://front-test.beta.aviasales.ru/tickets", {
            params: {
                searchId: searchId
            }
        })
            .then(resp => {
                console.log(resp.data)
                setTickets(resp.data.tickets)
            })
    }

    return (
        <Box className={classes.main}>
            <FilterPanel/>
            <Box className={classes.tickets}>
                <SortPanel/>
                {
                    tickets.length > 0 &&
                    <Box>
                        <Ticket ticket={tickets[0]}/>
                        <Ticket ticket={tickets[1]}/>
                        <Ticket ticket={tickets[2]}/>
                        <Ticket ticket={tickets[3]}/>
                        <Ticket ticket={tickets[4]}/>
                    </Box>

                }
            </Box>

        </Box>

    );
}

export default App;

