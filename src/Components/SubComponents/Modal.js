import React from "react";
import { motion } from "framer-motion";
import "firebase/firestore";
import useFirestore from "../../Hooks/useFirestore";
import index from "../../index.css";

const Modal = ({ selectedDiv, setSelectedDiv }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) setSelectedDiv(null);
  };
  const { docs } = useFirestore("Customer Address");

  return (
    <div className="backdrop" onClick={handleClick}>
      <motion.selectedDiv
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      >
        <div className="customerDiv">
          <div className="dataDisplay">
            <div className="dataDiv">
              Appointment ID: {JSON.stringify(selectedDiv.id)}
            </div>
            <div className="dataDiv">
              Contact Information:{" "}
              {JSON.stringify(selectedDiv.payload.origin.fullName)}{" "}
              {JSON.stringify(selectedDiv.payload.origin.Number)}
            </div>
            <div className="dataDiv">
              Origin Location:{" "}
              {JSON.stringify(selectedDiv.payload.origin.Origin)}{" "}
              {JSON.stringify(selectedDiv.payload.origin.OriginGeometry)}{" "}
            </div>
            <div className="dataDiv">
              Destination Location:{" "}
              {JSON.stringify(selectedDiv.payload.destination.Destination)}{" "}
              {JSON.stringify(
                selectedDiv.payload.destination.DestinationGeometry
              )}{" "}
            </div>
            <div className="dataDiv">
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
