import { useState, useEffect } from "react"
import { projectFirestore } from "../Components/firebase"

const useFirestore = (collection) => {
    let [docs, setDocs] = useState();

    useEffect(() => {
        const unsub = projectFirestore
        .collection(collection)
        .orderBy("address_components", "geometry")
        .onSnapshot((snap) => {
            let documents = [];
            snap.forEach((doc) => {
                documents.push({...doc.data(), id: doc.id})
            })
            setDocs(documents);
        })
        return () => unsub()
    }, [collection])
    return {docs}
}

export default useFirestore