import React, { useState } from 'react'
import { Button, AppBar, makeStyles } from '@material-ui/core'
import { motion } from "framer-motion";
import { Link, useHistory } from 'react-router-dom'
import { UseAuth } from '../../Contexts/AuthContext'

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
        color: "RGB(238, 89, 89)"
    },
    NavLink: {
        marginLeft: "auto",
        marginRight: "auto",
    }
})


export default function Navigation() {
    const [error, setError] = useState('')
    const history = useHistory()
    const {currentUser, logout} = UseAuth()


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
        <motion.div className={classes.NavigationBar}
        initial={{opacity: 0}}
        animate={{opacity: 1}}>
            <AppBar className={classes.AppBar}>
            <Link className={classes.NavLink} to="/">
                <Button className={classes.NavButton} type="button">Home</Button>
            </Link>
            {currentUser && (<Link className={classes.NavLink} to="/SignIn">             
                <Button onClick={handleLogout} className={classes.NavButton}>Log Out</Button>
            </Link>)}
            {currentUser && (<Link className={classes.NavLink} to="/MoveSetUp">
                <Button className={classes.NavButton}>Make An Appointment</Button>
            </Link>)}
            {currentUser && (<Link className={classes.NavLink} to="/Appointments">
                <Button className={classes.NavButton}>Review Appointments</Button>
            </Link>)}
            {currentUser && (<Link className={classes.NavLink} to="/ProfileUpdate">
                <Button className={classes.NavButton}>Update Profile</Button>
            </Link>)}
            </AppBar>           
        </motion.div>
    )
}



