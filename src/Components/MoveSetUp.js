import TextField from "@material-ui/core/TextField";
import {
  FormLabel,
  TableHead,
  TableBody,
  TableCell,
  Button,
} from "@material-ui/core";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import React, { useState } from "react";
import { ReactComponent as Delivery } from "../Assets/delivery2.svg";
import { ThemeProvider } from "@material-ui/styles";
import "../App.css";
import ReactGoogleAutocomplete, {
  usePlacesWidget,
} from "react-google-autocomplete";
import { useFormik } from "formik";
import AddSharpIcon from "@material-ui/icons/AddSharp";
import RemoveSharpIcon from "@material-ui/icons/RemoveSharp";
import firebase, { projectFirestore } from "./firebase";
import projectStorage from './firebase'

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
  Background: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  ItemList: {
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    color: "#474C4E",
    minWidth: "35vw",
  },
  ItemContainer: {
    display: "flex",
  },
  Completed: {},
  Quantity: {
    display: "flex",
  },
  InfoDiv: {
    width: "12%",
  },
  Button: {
    marginLeft: "5px",
    marginRight: "5px",
    padding: "0px",
    borderRadius: "40px",
  },
  Icons: {},
  qtydiv: {
    marginLeft: "5px",
    marginRight: "5px",
  },
});

export default function MoveSetUp() {
  const [place, setPlace] = useState([
    {lat:0},
    {lng:0}
  ]);

  const [items, setItems] = useState([
    { itemName: "Desks", quantity: 0 },
    { itemName: "Computers", quantity: 0 },
    { itemName: "TVs", quantity: 0 },
    { itemName: "Chairs", quantity: 0 },
    { itemName: "Tables", quantity: 0 },
    { itemName: "Appliances", quantity: 0 },
  ]);
  const handleQuantityIncrease = (index) => {
    const newItems = [...items];

    newItems[index].quantity++;

    setItems(newItems);
    console.log(newItems[index].quantity);
    console.log(newItems[index].itemName);
  };
  const handleQuantityDecrease = (index) => {
    const newItems = [...items];

    newItems[index].quantity--;

    setItems(newItems);
    console.log(newItems[index].quantity);
    console.log(newItems[index].itemName);
  };
  const [geometry, setGeometry] = useState()
  const classes = useStyles();  
  const formik = useFormik({
    initialValues: {
      payload:{
        origin:{
          Origin: "",
          OriginGeometry: "",
          },
        destination:{
          fullName: "",
          Number: "",
          Destination: "",
          DestinationGeometry: "",
        },
      Furniture: { items },
    }},
    onSubmit: (payload) => {
      alert(JSON.stringify(payload, null, 2));
      projectFirestore.collection('Customer Address').add({
        payload,
      })
    },
  });

  
  // const payload = {
  //   origin:{
  //     name: formik.values.fullName,
  //     number: formik.values.Number,
  //     address: formik.values.Origin,
  //     location: formik.values.OriginGeometry
  //   },
  //   destination:{
  //     name: formik.values.fullName,
  //     number: formik.values.Number,
  //     address: formik.values.Destination,
  //     location: formik.values.DestinationGeometry
  //   },
  //   items: {
  //     furniture: formik.values.Furniture
  //   }
  // }


  const { ref } = usePlacesWidget({
    apiKey: process.env.REACT_APP_GOOGLE,
    onPlaceSelected: (place) => {
      setPlace(place);
      formik.setFieldValue("Origin", place.formatted_address);
      JSON.stringify(place.geometry.location)
      setGeometry(place.geometry.location)
      formik.setFieldValue("OriginGeometry", JSON.stringify(place.geometry.location))
    },
    options: {
      componentRestrictions: { country: "us" },
      types: ["address"],
      fields: ["formatted_address", "geometry"],
    },
  });
  const { ref: newRef } = usePlacesWidget({
    apiKey: process.env.REACT_APP_GOOGLE,
    onPlaceSelected: (place) => {
      formik.setFieldValue("Destination", place.formatted_address);
      formik.setFieldValue("DestinationGeometry", JSON.stringify(place.geometry.location))
      JSON.stringify(place.geometry.location)
      setGeometry(place.geometry.location)
      setPlace(place);
    },
    options: {
      componentRestrictions: { country: "us" },
      types: ["address"],
      fields: ["formatted_address", "geometry.location"],
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.movegrid}>
        <Delivery className={classes.Delivery} />
        <h1>Place an order</h1>
        <form className={classes.FormDiv} onSubmit={formik.handleSubmit}>
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
              <TextField
                value={formik.values.origin}
                className={classes.InputText}
                variant="outlined"
                size="small"
                inputRef={ref}
                id="Origin"
                label="Origin"
                onChange={formik.handleChange}
                name="Origin"
              />
              <TextField
                value={formik.values.destination}
                className={classes.InputText}
                variant="outlined"
                label="Destination"
                size="small"
                inputRef={newRef}
                name="Destination"
                id="Destination"
                onChange={formik.handleChange}
              />
            </div>
            <button type="button" onClick={formik.handleSubmit}>
              Submit
            </button>
          </div>
          <div className={classes.MainContainer}>
            <TableHead>
              Items to move
              <TableBody className={classes.TableBody}>
                {items.map((items, index) => (
                  <TableCell
                    className={classes.ItemList}
                    key={index}
                    value={index}
                    onChange={formik.handleChange}
                  >
                    <div className={classes.InfoDiv}>{items.itemName}</div>
                    <Button
                      className={classes.Button}
                      onClick={() => handleQuantityDecrease(index)}
                      variant="outlined"
                    >
                      <RemoveSharpIcon className={classes.Icons} />
                    </Button>
                    <div className={classes.qtydiv}>{items.quantity}</div>
                    <Button
                      className={classes.Button}
                      onClick={() => handleQuantityIncrease(index)}
                      variant="outlined"
                    >
                      <AddSharpIcon className={classes.Icons} />
                    </Button>
                  </TableCell>
                ))}
              </TableBody>
            </TableHead>
          </div>
        </form>
      </div>
    </ThemeProvider>
  );
}

// <ReactGoogleAutocomplete
// id="Origin"
// label="Origin"
// value={formik.values.Origin}
// apiKey={process.env.REACT_APP_GOOGLE}
// onPlaceSelected={
//   ((place) =>
//     formik.setFieldValue(
//       "Origin",
//       place.formatted_address
//     ))
// }
// onChange={formik.handleChange}
// options={{
//   componentRestrictions: { country: "us" },
//   types: ["address"],
//   fields: ["formatted_address", "geometry"],
// }}
// className={classes.InputText}
// name="Origin"
// />

// <ReactGoogleAutocomplete
//   id="Destination"
//   label="Destination"
//   value={formik.values.Destination}
//   apiKey={process.env.REACT_APP_GOOGLE}
//   onPlaceSelected={
//     ((place) =>
//       formik.setFieldValue(
//         "Destination",
//         place.formatted_address
//       ))
//   }
//   onChange={formik.handleChange}
//   options={{
//     componentRestrictions: { country: "us" },
//     types: ["address"],
//     fields: ["formatted_address", "geometry"],
//   }}
//   className={classes.InputText}
//   name="Destination"
// />
