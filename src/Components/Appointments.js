import React, { useState, useEffect } from "react";
import useFirestore from "../Hooks/useFirestore";
import "firebase/firestore";
import { projectFirestore } from "./firebase";
import { Divider, Grid, makeStyles, GridItem } from "@material-ui/core";
import { motion } from "framer-motion";
import { ReactComponent as Delivery } from "../Assets/delivery2.svg";

const useStyles = makeStyles({
  header: {
    marginLeft: "5vw",
    marginBottom: "20px",
  },
  dataDiv: {
    boxShadow: "0px 0px 10px grey",
    marginLeft: "2vw",
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  customerDiv: {
    marginTop: "20px",
    marginBottom: "20px",
  },
  Delivery: {
    width: "200px",
    height: "200px",
  },
  AppointmentsGrid: {
    marginLeft: "10vw",
    marginRight: "10vw",
    marginTop: "10px",
    maxWidth: "80vw",
  }
});

export const Appointments = ({ setSelectedDiv }) => {
  const classes = useStyles();
  const { docs } = useFirestore("Customer Address");
  console.log(docs);


  return (
    <div>
      <div>
        <div>
          <div className={classes.header}>
          <Delivery className={classes.Delivery}/>
            This is a header, it has an image to the left            
          </div>
          <Grid container spacing={3} className={classes.AppointmentsGrid}>
          {docs &&
            docs.map((doc) => (
              <motion.GridItem xs={4}
                className={classes.dataDiv}
                key={doc.id}
                layout
                whileHover={{ opacity: 1 }}
                onClick={() => setSelectedDiv(doc)}
              > <p>{doc.id}</p>
                <p>This is items amount placeholder text</p>
                <Delivery className={classes.Delivery} />
              </motion.GridItem>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}


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
