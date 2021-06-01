import React from 'react'
import useFirestore from '../Hooks/useFirestore'

export default function Appointments() {
    const { docs } = useFirestore("Customer Addresses")
    return (
        <div>
        {docs && docs.map((doc) => (
            <div
            key={doc.id} />))}
        </div>
    )
}
