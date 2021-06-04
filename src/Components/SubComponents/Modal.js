import React from "react";
import { motion } from "framer-motion";
import "firebase/firestore";
import useFirestore from "../../Hooks/useFirestore";
import {makeStyles} from '@material-ui/core';
import { createMuiTheme } from "@material-ui/core/styles";

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
});


const useStyles = makeStyles({
  customerDiv: {
    width: "50vw",
    backgroundColor: "whitesmoke",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
    textAlign: "center",
    margin: "2%",
    padding: "2%",
    borderRadius: '20px',
    [theme.breakpoints.down("sm")]: {
      width: "85vw",
      marginLeft: "auto",
      marginRight: "auto",
    }
  },
  dataDisplay: {
    marginTop: "2%",
    marginBottom: "2%",
    width: "100%",
    alignItems: "center",
    justifyContent: 'center',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '20px',
    paddingBottom: '2%',
    paddingTop: '2%',
    paddingLeft: '2%',
    paddingRight: '2%',
  },
  dataDiv: {
    marginTop: "2%",
  },
})

const Modal = ({ selectedDiv, setSelectedDiv }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) setSelectedDiv(null);
  };
  const { docs } = useFirestore("Customer Address");
  const classes = useStyles()

  return (
    <div className="backdrop" onClick={handleClick}>
      <motion.selectedDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      >
        <div className={classes.customerDiv}>
          <div className={classes.dataDisplay}>
            <div className={classes.dataDiv}>
              Appointment ID: {JSON.stringify(selectedDiv.id)}
            </div>
            <div className={classes.dataDiv}>
              Contact Information:{" "}
              {JSON.stringify(selectedDiv.payload.origin.fullName)}{" "}
              {JSON.stringify(selectedDiv.payload.origin.Number)}
            </div>
            <div className={classes.dataDiv}>
              Origin Location:{" "}
              {JSON.stringify(selectedDiv.payload.origin.Origin)}{" "}
              {JSON.stringify(selectedDiv.payload.origin.OriginGeometry)}{" "}
            </div>
            <div className={classes.dataDiv}>
              Destination Location:{" "}
              {JSON.stringify(selectedDiv.payload.destination.Destination)}{" "}
              {JSON.stringify(
                selectedDiv.payload.destination.DestinationGeometry
              )}{" "}
            </div>
            <div className={classes.dataDiv}>
              Items: {JSON.stringify(selectedDiv.payload.Furniture)}{" "}
            </div>
          </div>
        </div>
      </motion.selectedDiv>
    </div>
  );
};

export default Modal;

/*
        {docs &&
          docs.map((doc) => (
            <div className="modalDiv">
              <Divider />
              <div className="customerDiv">
                <div className="dataDiv" key={doc.id}>
                  Appointment ID: {JSON.stringify(doc.id)}
                </div>
                <div className="dataDiv" key={doc.id}>
                  Contact Information:{" "}
                  {JSON.stringify(doc.payload.origin.fullName)},{" "}
                  {JSON.stringify(doc.payload.origin.Number)}
                </div>
                <div className="dataDiv" key={doc.id}>
                  Start Address: {JSON.stringify(doc.payload.origin.Origin)},{" "}
                  {JSON.stringify(doc.payload.origin.OriginGeometry)}
                </div>
                <div className="dataDiv" key={doc.id}>
                  Furniture: {JSON.stringify(doc.payload.Furniture.items[0])},{" "}
                  {JSON.stringify(doc.payload.Furniture.items[1])},{" "}
                  {JSON.stringify(doc.payload.Furniture.items[2])},{" "}
                  {JSON.stringify(doc.payload.Furniture.items[3])},{" "}
                  {JSON.stringify(doc.payload.Furniture.items[4])},{" "}
                  {JSON.stringify(doc.payload.Furniture.items[5])}
                </div>
                <div className="dataDiv" key={doc.id}>
                  End Address:{" "}
                  {JSON.stringify(doc.payload.destination.Destination)},{" "}
                  {JSON.stringify(doc.payload.destination.DestinationGeometry)}
                </div>
              </div>
              <Divider />
            </div>
          ))}
          */
