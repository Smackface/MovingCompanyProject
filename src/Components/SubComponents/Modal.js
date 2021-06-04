import React from "react";
import { motion } from "framer-motion";
import "firebase/firestore";
import useFirestore from "../../Hooks/useFirestore";
import { makeStyles } from "@material-ui/core";
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
    borderRadius: "20px",
    [theme.breakpoints.down("sm")]: {
      width: "85vw",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  dataDisplay: {
    marginTop: "2%",
    marginBottom: "2%",
    marginLeft: "2%",
    marginRight: "2%",
    width: "95%",
    height: "95%",
    paddingLeft: "2%",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "20px",
    backgroundColor: "snow",
  },
  dataDiv: {
    marginTop: "2%",
    marginBottom: "2%",
    textAlign: "center",
    boxShadow: "0px 0px 2px",
    width: "80%",
    borderRadius: "10px",
    padding: "1%",
  },
  HeroIcon: {
    width: "2em"
  },
});

const Modal = ({ selectedDiv, setSelectedDiv }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) setSelectedDiv(null);
  };
  const { docs } = useFirestore("Customer Address");
  const classes = useStyles();

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
              <svg
                className={classes.HeroIcon}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                />
              </svg>{" "}
              <p>Appointment ID: {JSON.stringify(selectedDiv.id)}</p>
            </div>
            <div className={classes.dataDiv}>
              <svg
                className={classes.HeroIcon}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>{" "}
              <p>
              Contact Information:{" "}
                {JSON.stringify(selectedDiv.payload.origin.fullName)}{" "}
                {JSON.stringify(selectedDiv.payload.origin.Number)}
              </p>
            </div>
            <div className={classes.dataDiv}>
              <svg
                className={classes.HeroIcon}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                ></path>
              </svg>
              <p>
                Origin Location:{" "}
                {JSON.stringify(selectedDiv.payload.origin.Origin)}{" "}
                {JSON.stringify(selectedDiv.payload.origin.OriginGeometry)}{" "}
              </p>
            </div>
            <div className={classes.dataDiv}>
              <svg
                className={classes.HeroIcon}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p>
                Destination Location:{" "}
                {JSON.stringify(selectedDiv.payload.destination.Destination)}{" "}
                {JSON.stringify(
                  selectedDiv.payload.destination.DestinationGeometry
                )}{" "}
              </p>
            </div>
            <div className={classes.dataDiv}>
              <svg
                className={classes.HeroIcon}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                ></path>
              </svg>
              <p>Items: {JSON.stringify(selectedDiv.payload.Furniture)} </p>
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
