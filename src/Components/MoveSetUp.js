import TextField from "@material-ui/core/TextField";
import { FormLabel } from "@material-ui/core";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import React, { useState } from "react";
import { ReactComponent as Delivery } from "../Assets/delivery2.svg";
import MenuComponent from "./SubComponents/MenuComponent";
import { ThemeProvider } from "@material-ui/styles";
import "../App.css";
import ReactGoogleAutocomplete from "react-google-autocomplete";
import useFirestore from "../Hooks/useFirestore";
import useStorage from "../Hooks/useStorage";
import { useFormik } from "formik";

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 760,
      lg: 1280,
      xl: 1920,
    },
  },
  overrides: {
    MuiOutlinedInput: {
      root: {
        borderRadius: "15px",
      },
    },
  },
});

const useStyles = makeStyles({
  movegrid: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    width: "50vw",
    marginLeft: "auto",
    marginRight: "auto",
    color: "#3A5666",
  },
  Delivery: {
    height: "200px",
  },
  FormContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  FormDiv: {
    alignItems: "center",
    justifyContent: "center",
    minWidth: "100%",
  },
  InputGrid: {
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    minWidth: "100%",
  },
  DropdownSelect: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "5px",
    marginBottom: "5px",
    maxWidth: "73%",
    color: "#3A5666",
  },
  InputText: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "5px",
    marginBottom: "5px",
    maxWidth: "75%",
  },
  InputGroup: {
    backgroundColor: "white",
    marginLeft: "12%",
    marginRight: "12%",
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  FormLabel: {
    position: "relative",
    alignSelf: "flex-start",
    marginLeft: "13%",
    color: "#3C5C68",
  },
});

export default function MoveSetUp() {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      fullName: "",
      Number: "",
      Origin: "",
      Destination: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.movegrid}>
        <Delivery className={classes.Delivery} />
        <h1>Place an order</h1>
        <form
          className={classes.FormDiv}
          onSubmit={
            formik.handleSubmit
          }
        >
          <div className={classes.InputGrid}>
            <label className={classes.FormLabel}>Person to talk to</label>
            <div className={classes.InputGroup}>
              <TextField
                className={classes.InputText}
                variant="outlined"
                label="Full Name"
                size="small"
                id="fullName"
                name="fullName"
                value={formik.values.fullName}
                onChange={formik.handleChange}
              />
              <TextField
                className={classes.InputText}
                variant="outlined"
                label="Number"
                size="small"
                id="Number"
                name="Number"
                value={formik.values.Number}
                onChange={formik.handleChange}
              />
            </div>
            <FormLabel className={classes.FormLabel}>Address</FormLabel>
            <div className={classes.InputGroup}>
              <ReactGoogleAutocomplete
              id="Origin"
              label="Origin"
              value={formik.values.Origin}
              apiKey={process.env.REACT_APP_GOOGLE}
              onPlaceSelected={
                ((place) =>
                  formik.setFieldValue(
                    "Origin",
                    place.formatted_address
                  ))
              }
              onChange={formik.handleChange}
              options={{
                componentRestrictions: { country: "us" },
                types: ["address"],
                fields: ["formatted_address", "geometry"],
              }}
              className={classes.InputText}
              name="Origin"
            />

              <ReactGoogleAutocomplete
                id="Destination"
                label="Destination"
                value={formik.values.Destination}
                apiKey={process.env.REACT_APP_GOOGLE}
                onPlaceSelected={
                  ((place) =>
                    formik.setFieldValue(
                      "Destination",
                      place.formatted_address
                    ))
                }
                onChange={formik.handleChange}
                options={{
                  componentRestrictions: { country: "us" },
                  types: ["address"],
                  fields: ["formatted_address", "geometry"],
                }}
                className={classes.InputText}
                name="Destination"
              />
            </div>
            <button type="button" onClick={formik.handleSubmit}>Submit</button>
          </div>
          <MenuComponent />
        </form>
      </div>
    </ThemeProvider>
  );
}
