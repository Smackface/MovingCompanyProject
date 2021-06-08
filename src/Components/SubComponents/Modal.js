import React, { useState, Component } from "react";
import { motion } from "framer-motion";
import "firebase/firestore";
import { Box, Hidden, makeStyles, Tab, Tabs, Button } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import PhoneIcon from "@material-ui/icons/Phone";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import RoomIcon from "@material-ui/icons/Room";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import GoogleMapReact from 'google-map-react';
import { Marker } from "google-maps-react";





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
    [theme.breakpoints.only("md")]: {
      width: "85vw",
      marginLeft: "auto",
      marginRight: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      width: "85vw",
      overflow: "auto",
      maxHeight: "100vh",
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
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
  },
  HeroIcon: {
    width: "2em",
  },
  dataPanel: {
    alignItems: "center",
    alignContent: "center",
    textAlign: "center",
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    overflow: "auto",
  },
  dataContent: {
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    overflow: "auto",
  },
  modalInfo: {
    display: "flex",
    textAlign: "center",
    alignContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  HeroIcon2: {
    width: "1em",
  },
  modalH2: {
    fontSize: "1.3em",
    marginRight: "5px",
  },
  modalTabs: {
    maxWidth: "20px",
  },
  furnitureList: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `tab-${index}`,
  };
}

const Modal = ({ selectedDiv, setSelectedDiv }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) setSelectedDiv(null);
  };
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClose = (e) => {
    setSelectedDiv(null);
  };

  console.log(selectedDiv.payload.origin.OriginGeometry.OriginLat)


  const zoomProp = 8

  let centerProp = {
    lat: 35.5321,
    lng: -77.3766
  }

  return (
    <div className="backdrop" onClick={handleClick}>
      <motion.selectedDiv initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className={classes.customerDiv}>
          <Hidden mdUp>
            <Button onClick={handleClose} type="button">
              Close
            </Button>
          </Hidden>
          <div className={classes.dataDisplay}>
            <div className={classes.modalInfo}>
              <h2 className={classes.modalH2}>
                <ContactPhoneIcon className={classes.HeroIcon2} /> Appointment
                ID:
              </h2>
              <p>{selectedDiv.id}</p>
            </div>
            <div className={classes.modalInfo}>
              <h2 className={classes.modalH2}>
                <RoomIcon className={classes.HeroIcon2} /> Destination:
              </h2>
              <p>{selectedDiv.payload.destination.Destination}</p>
            </div>
            
      <div style={{ height: '200px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_KEY }}
        defaultZoom={zoomProp}
        center={centerProp}
      >
        <RoomIcon
        lat={selectedDiv.payload.origin.OriginGeometry.OriginLat}
        lng={selectedDiv.payload.origin.OriginGeometry.OriginLng}
        label="My Marker"
        />
      </GoogleMapReact>
    </div>

            <Tabs scrollButtons="auto" value={value} onChange={handleChange}>
              <Tab
                className={classes.modalTabs}
                icon={<PhoneIcon className={classes.HeroIcon2} />}
                label="Contact"
                {...a11yProps(0)}
              >
                {" "}
              </Tab>
              <Tab
                className={classes.modalTabs}
                icon={<LocalShippingIcon className={classes.HeroIcon2} />}
                label="Items"
                {...a11yProps(1)}
              ></Tab>
              <Tab
                className={classes.modalTabs}
                icon={<RoomIcon className={classes.HeroIcon2} />}
                label="Delivery"
                {...a11yProps(2)}
              ></Tab>
            </Tabs>
            <div className={classes.dataDiv}>
              <TabPanel value={value} index={0} className={classes.dataPanel}>
                <div className={classes.dataContent}>
                  <h3>Name:</h3> {selectedDiv.payload.origin.fullName}{" "}
                </div>
                <div className={classes.dataContent}>
                  <h3>Number:</h3> {selectedDiv.payload.origin.Number}{" "}
                </div>
                <div className={classes.dataContent}>
                  <h3>Home Address:</h3> {selectedDiv.payload.origin.Origin}{" "}
                </div>
              </TabPanel>
              <TabPanel value={value} index={1} className={classes.dataPanel}>
                <div className={classes.dataContent}>
                  <h3>Furniture:</h3>{" "}
                  {selectedDiv.payload.Furniture.items && 
                  selectedDiv.payload.Furniture.items.map(({itemName, quantity}) => (<div className={classes.furnitureList}>
                <div key={itemName}>{itemName}:{" "}{quantity}</div>
                </div> 
                ))}


                </div>
              </TabPanel>
              <TabPanel value={value} index={2} className={classes.dataPanel}>
                <div className={classes.dataContent}>
                  <h3>Destination:</h3>{" "}
                  {selectedDiv.payload.destination.Destination}{" "}
                </div>
              </TabPanel>
            </div>
          </div>
        </div>
      </motion.selectedDiv>
    </div>
  );
};
export default Modal;