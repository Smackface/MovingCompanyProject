import React from 'react'
import "firebase/firestore";

export const EditAppointments = ({ doc }) => {
    const [ value, setValue ] = useState("")

    const db = firebase.firestore();
    const getValue = (event) => {
        setValue(event.target.value)
    }

    const updateValue = () => {
        db.collection("Customer Address")
        .doc(doc)
        .update({
            value: value
        })
        .then(function () {
            console.log("Document Updated Fool");
        })
        .catch(function (error) {
            console.error("Error bruh: ", error)
        })
    }

    return (
        <>
            <input onBlue={getValue} type='text' />
            <button onClick={updateValue}>Update dat mess!</button>
        </>
    )
}


/* throwing this here to have something to work with when I actually figure out how to edit a doc, may need to delete later*/