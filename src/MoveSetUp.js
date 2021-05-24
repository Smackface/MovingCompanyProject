import TextField from "@material-ui/core/TextField";
import {
  FormGroup,
  FormLabel,
} from "@material-ui/core";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import React, { useState } from "react";
import { ReactComponent as Delivery } from "./Assets/delivery2.svg";
import MenuComponent from "./MenuComponent";
import { ThemeProvider } from '@material-ui/styles';
import "./App.css";
import { usePlacesWidget } from "react-google-autocomplete"
import useStorage from "./useStorage";
import useFirestore from './useFirestore'

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
    }
  }
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
    color: "#3A5666"
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
    color: "#3A5666"
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
    color: "#3C5C68"
  },
});

export default function MoveSetUp() {
  const [myDocs, setDocs] = useState()
  const { ref } = usePlacesWidget({
    apiKey: process.env.REACT_APP_GOOGLE,
    onPlaceSelected:(place) => {
      // console.log(docs);
      setDocs(place);
    },
    options:{
      componentRestrictions: { country: "us" },
      types: ["address"],
      fields: ["address_components", "geometry"],
    },
    })
    const {docs} = useFirestore()
    console.log(docs)
  // const handleSubmit = useStorage({ref})
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
    <div className={classes.movegrid}>
      <Delivery className={classes.Delivery} />
      <h1>Place an order</h1>
      <form className={classes.FormDiv}>
        <div className={classes.InputGrid}>
          <FormLabel className={classes.FormLabel}>Person to talk to</FormLabel>
          <FormGroup className={classes.InputGroup}>
            <TextField
              className={classes.InputText}
              variant="outlined"
              label="Full Name"
              size="small"
            />
            <TextField
              className={classes.InputText}
              variant="outlined"
              label="Number"
              size="small"
            />
          </FormGroup>
          <FormLabel className={classes.FormLabel}>Address</FormLabel>
          <FormGroup className={classes.InputGroup}>
            <TextField
              className={classes.InputText}
              variant="outlined"
              label="Origin"
              size="small"
              inputRef={ref}
            />
            <TextField
              className={classes.InputText}
              variant="outlined"
              label="Destination"
              size="small"
              inputRef={ref}
              // onChange={console.log(place)}
            />
          </FormGroup>
        </div>
        <MenuComponent />
      </form>
    </div>
    </ThemeProvider>
  );
}
