import React, {useContext, useState, useEffect} from 'react';
import { auth } from '../firebase'

const PlaceContext = React.createContext()

export function UsePlaceContext() {
    return useContext(PlaceContext)
}

export function PlaceProvider({ children }) {
    const [place, setPlace] = useState()
    return (
        <PlaceContext.Provider value={value}>
            {!loading && children}
        </PlaceContext.Provider>
    )
}