import React, { useState } from 'react'
import { projectFirestore } from "../firebase";
import { UseAuth } from "../../Contexts/AuthContext";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import Template from "./Template";
import Alert from "@material-ui/lab/Alert";
import { useHistory, Link } from "react-router-dom";
import Navigation from './Navigation'
import { TextField, Button } from "@material-ui/core"
import { useFormik } from 'formik'

const useStyles = makeStyles ({
    CreateBody: {
        display: "flex",
    }
})

export default function CreateAccount() {
    const classes = useStyles()
    const {currentUser} = UseAuth()
    const formik = useFormik({
        initialValues: {
            AccountID: currentUser,
            Person: {
                First_Name:"",
                Middle_Name:"",
                Last_Name:"",
                Date_Of_Birth:"",
            }
        },
        onSubmit: (payload) => projectFirestore
            .collection("Users")
            .add({payload})
    });
    return (
        <div className={classes.CreateBody}>
            <Template />
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    placeholder="First Name"
                    id="Person.First_Name"
                    onChange={formik.handleChange}
                />
                <TextField 
                    placeholder="Middle Name (optional)"
                    id="Person.Middle_Name"
                    onChange={formik.handleChange}
                />
                <TextField
                    placeholder="Last Name"
                    id="Person.Last_Name"
                    onChange={formik.handleChange}
                />
                <TextField
                    placeholder="Date of Birth"
                    id="Person.Date_Of_Birth"
                    onChange={formik.handleChange}
                />
                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
}
