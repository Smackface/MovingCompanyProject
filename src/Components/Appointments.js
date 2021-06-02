import React, { useState, useEffect } from "react";
import useFirestore from "../Hooks/useFirestore";
import "firebase/firestore";
import { projectFirestore } from "./firebase";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  dataDiv: {
    marginTop: "10px",
    margingBottom: "10px",
  }
})

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
              <div>
                <div className={classes.dataDiv} key={doc.id}>{JSON.stringify(doc.id)}</div>
                <div className={classes.dataDiv} key={doc.id}>
                  {JSON.stringify(doc.payload.origin.fullName)}
                </div>
                <div className={classes.dataDiv} key={doc.id}>
                  {JSON.stringify(doc.payload.origin.Number)}
                </div>
                <div className={classes.dataDiv} key={doc.id}>
                  {JSON.stringify(doc.payload.origin.Origin)}
                </div>
                <div className={classes.dataDiv} key={doc.id}>
                  {JSON.stringify(doc.payload.origin.OriginGeometry)}
                </div>
                <div className={classes.dataDiv} key={doc.id}>
                  {JSON.stringify(doc.payload.Furniture.items)}
                </div>
                <div className={classes.dataDiv} key={doc.id}>
                  {JSON.stringify(doc.payload.destination.Destination)}
                </div>
                <div className={classes.dataDiv} key={doc.id}>
                  {JSON.stringify(doc.payload.destination.DestinationGeometry)}
                </div>
              </div>
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
