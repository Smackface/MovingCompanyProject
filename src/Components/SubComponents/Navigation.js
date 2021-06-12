import React, { useState } from 'react'
import { Button, AppBar, makeStyles } from '@material-ui/core'
import { motion } from "framer-motion";
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../../Contexts/AuthContext'

const useStyles = makeStyles({
    NavigationBar: {
        marginBottom: "5vh",
    },
    AppBar: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "white",
        paddingLeft: "5%",
        paddingRight: "5%",
    },
    NavButton: {
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "RGB(238, 89, 89, 0.1)"
    },
    NavLink: {
        marginLeft: "auto",
        marginRight: "auto",
    }
})


export default function Navigation() {
    const [error, setError] = useState('')
    const history = useHistory()
    const {currentUser} = useAuth()


    async function handleLogout() {
        setError('')
    
        try {
            await logout()
            history.pushState('/login')
        } catch {
            setError("Failed to log out")
        }
    }
    

    const classes = useStyles()
    return (
        <div className={classes.NavigationBar}>
            <AppBar className={classes.AppBar}>
            <Link className={classes.NavLink} to="/">
                <Button className={classes.NavButton} type="button">Home</Button>
            </Link>
            <Link className={classes.NavLink} to="/SignIn">             
                <Button onClick={handleLogout} className={classes.NavButton}>Log Out</Button>
            </Link>
            <Link className={classes.NavLink} to="/MoveSetUp">
                <Button className={classes.NavButton}>Make An Appointment</Button>
            </Link>
            <div className={classes.NavLink}>
                <Button className={classes.NavButton}>Fun!</Button>
            </div>
            </AppBar>           
        </div>
    )
}
