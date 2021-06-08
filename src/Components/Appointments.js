import React from "react";
import useFirestore from "../Hooks/useFirestore";
import "firebase/firestore";
import { Grid, makeStyles } from "@material-ui/core";
import { motion } from "framer-motion";
import { ReactComponent as Delivery } from "../Assets/delivery2.svg";
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
  bodyDiv: {
    backgroundColor: "#6fbfd",
    minHeight: "100vh",
    minWidth: "100vw",
  },
  header: {
    marginLeft: "5%",
    marginBottom: ".5%",
    display: "flex",
    justifyItems: "center",
    alignItems: "center",
    fontSize: "26px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    }
  },
  DeliveryH: {
    width: "10%",
    marginRight: "2%",
    [theme.breakpoints.down("sm")]: {
      width: "25%"
    },
  },
  dataDiv: {
    boxShadow: "0px 0px 10px grey",
    marginLeft: "2%",
    marginTop: "2%",
    paddingLeft: ".5%",
    paddingRight: ".5%",
    display: "flex",
    flexDirection: "row-reverse",
    width: "30%",
    borderRadius: "20px",
    fontSize: "1.15em",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      padding: ".5%",
      width: "110%"
    },
    [theme.breakpoints.only("md")]: {
      width: "80vw",
    }
  },
  dataInsideDiv: {
    width: "80%",
  },
  Delivery: {
    width: "25%",
  },
  AppointmentsGrid: {
    marginLeft: "10vw",
    marginRight: "10vw",
    marginTop: "10px",
    maxWidth: "80vw",
  },
  cardP: {
    textAlign: "left",
    textJustify: "center",
    [theme.breakpoints.only("md")]:{
      width: "100%",
    }
  },
  HeroIcon: {
    maxHeight: "1em",
  },
  cardMap: {
    minWidth: "50px",
    maxWidth: "20%",
    marginRight: "auto",
  }
});


export const Appointments = ({ setSelectedDiv }) => {
  const classes = useStyles();
  const { docs } = useFirestore("Customer Address");
  
  return (
    <div className={classes.bodyDiv}>
      <div>
        <div>
          <div className={classes.header}>
            <Delivery className={classes.DeliveryH} />
            <h1 classname={classes.headerText}>Appointments</h1>
          </div>
          <Grid container className={classes.AppointmentsGrid}>
            {docs &&
              docs.map((doc) => (
                <motion.Grid
                  xs={12}
                  className={classes.dataDiv}
                  key={doc.id}
                  layout
                  onClick={() => setSelectedDiv(doc)}
                >
                  <div className={classes.dataInsideDiv}>
                    {" "}
                    <p className={classes.cardP}>
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
                      </svg>{" "}
                      {doc.payload.origin.Origin}
                    </p>
                    <p className={classes.cardP}>
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
                      {doc.id}
                    </p>
                    <p className={classes.cardP}>
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
                          d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                        />
                      </svg>{" "}
                      {doc.payload.Furniture.items.reduce(
                        (a, b) => a + b.quantity,
                        0
                      )}{" "}
                      items to move
                    </p>
                  </div>
                  <svg
                    className={classes.cardMap}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                </motion.Grid>
              ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

// ***Probably useless, holding onto it anyways***
//{docs && docs.map((doc) => (<div key={doc.id} layout="true"/>))}

// I think this code will work, holding onto it while I continue experimenting

// export default function Appointments() {
//   const [infos, setInfos] = useState([])

//   useEffect(() => {
//     const unsub = projectFirestore()
//     .collection("Customer Address")
//     .onSnapshot((snapshot) => {
//       const data = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }))
//       setInfos(data)
//     })
//   }, [])

//   return infos.map(info => <div key={info.id} info={info} />)
// }

//

// <div className={classes.dataDiv} key={doc.id}>
// Furniture: {JSON.stringify(doc.payload.Furniture.items[0])}, {JSON.stringify(doc.payload.Furniture.items[1])}, {JSON.stringify(doc.payload.Furniture.items[2])},
// {JSON.stringify(doc.payload.Furniture.items[3])}, {JSON.stringify(doc.payload.Furniture.items[4])},
// {JSON.stringify(doc.payload.Furniture.items[5])},
// </div>

/* *****THIS IS THE CODE NEEDED FOR THE ACTUAL FUNCTIONALITY DON'T LOSE THIS HUNTER*****

        {docs &&
          docs.map((doc) => (
            <div>
              <Divider/>
              <div className={classes.customerDiv}>
                <div className={classes.dataDiv} key={doc.id}>
                  Appointment ID: {JSON.stringify(doc.id)}
                </div>
                <div className={classes.dataDiv} key={doc.id}>
                  Contact Information: {JSON.stringify(doc.payload.origin.fullName)},{" "}
                  {JSON.stringify(doc.payload.origin.Number)}
                </div>
                <div className={classes.dataDiv} key={doc.id}>
                  Start Address: {JSON.stringify(doc.payload.origin.Origin)},{" "}
                  {JSON.stringify(doc.payload.origin.OriginGeometry)}
                </div>
                <div className={classes.dataDiv} key={doc.id}>Furniture:{" "}
                  {JSON.stringify(doc.payload.Furniture.items[0])},{" "}
                  {JSON.stringify(doc.payload.Furniture.items[1])},{" "}
                  {JSON.stringify(doc.payload.Furniture.items[2])},{" "}
                  {JSON.stringify(doc.payload.Furniture.items[3])},{" "}
                  {JSON.stringify(doc.payload.Furniture.items[4])},{" "}
                  {JSON.stringify(doc.payload.Furniture.items[5])}
                </div>
                <div className={classes.dataDiv} key={doc.id}>
                  End Address:{" "}
                  {JSON.stringify(doc.payload.destination.Destination)},{" "}
                  {JSON.stringify(doc.payload.destination.DestinationGeometry)}
                </div>
              </div>
              <Divider/>
            </div>
          ))}
          */

/*
doc.payload.Furniture.items[0].quantity +
                      doc.payload.Furniture.items[1].quantity +
                      doc.payload.Furniture.items[2].quantity +
                      doc.payload.Furniture.items[3].quantity +
                      doc.payload.Furniture.items[4].quantity +
                      doc.payload.Furniture.items[5].quantity
          */
