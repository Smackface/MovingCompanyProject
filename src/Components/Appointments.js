import React from "react";
import useFirestore from "../Hooks/useFirestore";

export default function Appointments() {
  const { docs } = useFirestore("Customer Address");
  console.log(docs);

  return (
    <div>{docs && docs.map((doc) => <div key={doc.id} layout="true"/>)}</div>
  );
}
