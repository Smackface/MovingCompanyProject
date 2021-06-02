import React, { useState, useEffect } from "react";
import useFirestore from "../Hooks/useFirestore";
import "firebase/firestore";
import { projectFirestore } from "./firebase";
import { Divider, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  dataDiv: {
    marginTop: "10px",
    marginBottom: "10px",
    width: "40vw",
    marginLeft: "10px",
    marginRight: "10px",
  },
  customerDiv: {
    marginTop: "20px",
    marginBottom: "20px",
  }
});

export default function Appointments() {
  const classes = useStyles();
  const { docs } = useFirestore("Customer Address");
  console.log(docs);

  return (
    <div>
      <div>
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
      </div>

      <div>{docs && docs.map((doc) => <div key={doc.id} />)}</div>
    </div>
  );
}

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
