import TextField from "@material-ui/core/TextField";
import C from '../../Constants/Collections'
import {
  FormLabel,
  TableHead,
  TableBody,
  TableCell,
  Button,
} from "@material-ui/core";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";
import { ReactComponent as Delivery } from "../../Assets/delivery2.svg";
import { ThemeProvider } from "@material-ui/styles";
import {
  usePlacesWidget,
} from "react-google-autocomplete";
import { useFormik } from "formik";
import AddSharpIcon from "@material-ui/icons/AddSharp";
import RemoveSharpIcon from "@material-ui/icons/RemoveSharp";
import { projectFirestore } from "../firebase";
import { sizing } from '@material-ui/system';

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
    MuiButton: {
      root: {

      },
      label: {
        boxShadow: "#EDF3F5"
      }
    }
  },
});
const useStyles = makeStyles({
  movegrid: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    maxWidth: "800px",
    maxHeight: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    color: "#3A5666",
    [theme.breakpoints.only("md")] : {
      width: "100vw",
    },
    [theme.breakpoints.down("sm")] : {
      textAlign: "center",
      maxWidth: "300px",
    }
  },
  MainContainer: {
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    [theme.breakpoints.only("md")] : {
      display: "flex",
      width: "100vw",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
    },
    [theme.breakpoints.down("sm")] : {
      display: "flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      width: "80%",
    }
  },
  TableHead: {
    fontSize: "14px",
    width: "100%",
    [theme.breakpoints.only("md")] : {
      width: "100%",
      display: "flex",
      flexDirection: "column",
    },
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      textAlign: "center",
    }
  },
  TableBody: {
    width: "100%",
    [theme.breakpoints.only("md")] : {
      marginLeft: "auto",
      marginRight: "auto",
      width: "80%",
    },
    [theme.breakpoints.down("sm")] : {
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  Delivery: {
    height: "50px",
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
    [theme.breakpoints.only("md")] : {
      textAlign: "center",
    },
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
    border: "0",
    color: "#EDF3F5",
    fontSize: "12px",
    [theme.breakpoints.down("sm")]: {
        width: "50%",
    },
    [theme.breakpoints.up('lg')]: {        
    maxWidth: "35%",
    }
  },
  InputGroup: {
    backgroundColor: "white",
    marginLeft: "12%",
    marginRight: "12%",
    display: "flex",
    flexDirection: "row",
    width: "100%",
    [theme.breakpoints.down("sm")] : {
      display: "flex",
      flexDirection: "row",
    }
  },
  FormLabel: {
    position: "relative",
    alignSelf: "flex-start",
    marginLeft: "13%",
    color: "#3C5C68",
    fontSize: '12px',
    [theme.breakpoints.down("sm")] : {
      textAlign: "center",
      alignSelf: "center",
      marginLeft: "0"
    }
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
    width: "300px",
    [theme.breakpoints.only("md")] : {
      marginLeft: "auto",
      marginRight: "auto",
      textAlign: "left",
      alignItems: "center",
      justifyContent: "center",
      paddingRight: "80px",
    },
    [theme.breakpoints.down("sm")] : {
      marginLeft: "auto",
      marginRight: "auto",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      width: "150px",
      flexDirection: "column"
    }
  },
  ItemContainer: {
    display: "flex",
  },
  Completed: {},
  Quantity: {
    display: "flex",
  },
  InfoDiv: {
    width: "20%",
    marginRight: "20%",
    [theme.breakpoints.down("sm")] : {
      marginRight: "0",
      textAlign: "left",
    }
  },
  Button: {
    marginLeft: "5px",
    marginRight: "5px",
    padding: "0px",
    borderRadius: "40px",
    backgroundColor: "#A2B8CE",
    height: "20px",
    [theme.breakpoints.down("sm")]: {
        width: "20px",
        marginLeft: "0",
        marginRight: "0",
    }
  },
  Icons: {
    color: "#727E8A"
  },
  qtydiv: {
    marginLeft: "5px",
    marginRight: "5px",
    [theme.breakpoints.down("sm")]:{
        marginLeft: "0",
        marginRight: "0",
    }
  },
  FormSubmit: {
    textTransform: "initial",
    backgroundColor: "#A2B8CE",
    color: "#474C4E",
    borderRadius: "40px",
    height: "20px",
  }
});

const MoveEdit = ({selectedDiv}) => {
    useEffect(() => {
        projectFirestore.collection(C.customerAddress)
        .doc(selectedDiv.id)
        .get()
        .then(doc => {
            console.log(doc.data())
        })
        .catch(error => {
            console.log(error)
        })
    },[projectFirestore]);

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
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
        "origin":{
          "fullName": "",
          "Number": "",
          "Origin": "",
          "OriginGeometry":{
            OriginLat: "",
            OriginLng: "",
          },
          },
        "destination":{
          "Destination": "",
          "DestinationGeometry":{
            DestinationLat: "",
            DestinationLng: "",
          }
        },
      "Furniture": { items },
    },
    onSubmit: (payload) => {
        console.log(selectedDiv.id)
      projectFirestore.collection('Customer Address').doc(selectedDiv.id).update({payload})
    },
  });

  const { ref } = usePlacesWidget({
    apiKey: process.env.REACT_APP_GOOGLE,
    onPlaceSelected: (place) => {
      formik.setFieldValue("origin.Origin", place.formatted_address);
      formik.setFieldValue("origin.OriginGeometry.OriginLat", JSON.stringify(place.geometry.location.lat()))
      formik.setFieldValue("origin.OriginGeometry.OriginLng", JSON.stringify(place.geometry.location.lng()))
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
      formik.setFieldValue("destination.Destination", place.formatted_address);
      formik.setFieldValue("destination.DestinationGeometry.DestinationLat", JSON.stringify(place.geometry.location.lat()))
      formik.setFieldValue("destination.DestinationGeometry.DestinationLng", JSON.stringify(place.geometry.location.lng()))
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
        <h3>Place an order</h3>
        <form className={classes.FormDiv} onSubmit={formik.handleSubmit}>
          <div className={classes.InputGrid}>
            <label className={classes.FormLabel}>Person to talk to</label>
            <div className={classes.InputGroup}>
              <TextField
                className={classes.InputText}
                variant="outlined"
                label="Full Name"
                size="small"
                id="origin.fullName"
                onChange={formik.handleChange}
              />
              <TextField
                className={classes.InputText}
                variant="outlined"
                label="Number"
                size="small"
                id="origin.Number"
                onChange={formik.handleChange}
              />
            </div>
            <FormLabel className={classes.FormLabel}>Address</FormLabel>
            <div className={classes.InputGroup}>
              <TextField
                className={classes.InputText}
                variant="outlined"
                size="small"
                inputRef={ref}
                id="origin.Origin"
                label="Origin"
                onChange={formik.handleChange}
              />
              <TextField
                className={classes.InputText}
                variant="outlined"
                label="Destination"
                size="small"
                inputRef={newRef}
                id="destination.Destination"
                onChange={formik.handleChange}
              />
            </div>
            <Button variant="outlined" type="button" onClick={formik.handleSubmit} className={classes.FormSubmit}>
              Submit
            </Button>
          </div>
          <div className={classes.MainContainer}>
            <TableHead className={classes.TableHead}>
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
                    <div>
                    <Button
                      className={classes.Button}
                      onClick={() => handleQuantityDecrease(index)}
                      size="small"
                      variant="outlined"
                      width="20"
                    >
                      <RemoveSharpIcon className={classes.Icons} />
                    </Button>
                    <div className={classes.qtydiv}>{items.quantity}</div>
                    <Button
                      className={classes.Button}
                      onClick={() => handleQuantityIncrease(index)}
                      variant="outlined"
                      size="small"
                      width="20"
                    >
                      <AddSharpIcon className={classes.Icons} />
                    </Button>
                    </div>
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

export default MoveEdit 



/*




const EditAppointments = ({selectedDiv}) => {    
  const { docs } = useFirestore("Customer Address");

  docs
    .doc(selectedDiv.id)
    .get
    .then(function(doc) {
        if (doc.exists) {
            console.log("Document Data:", doc.data())
        } else {
            console.log ("no such doc")
        }
    }).catch(function(error) {
        console.log("error", error)
    })
}

export default EditAppointments
*/