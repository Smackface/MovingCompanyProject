import { useState, useEffect } from "react"
import { projectStorage, projectFirestore } from './firebase'

const useStorage = (place) => {
    const [error, setError] = useState(null)

    useEffect(() => {
        const storageRef = projectStorage.ref(place)
        const collectionRef = projectFirestore.collection("Customer Addresses")

        storageRef.put(place).on(
            "state_changed",
            (err) => {
                setError(err)
            },
            async () => {
                collectionRef.add({place})
            }
        )
    }, [place])
    return {place}
}

export default useStorage