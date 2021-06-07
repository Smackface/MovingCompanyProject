import { useState, useEffect } from "react";
import { projectFirestore } from "../Components/firebase";

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);


useEffect(() => {
  const unsub = projectFirestore
  .collection(collection)
  .onSnapshot((snap) => {
    const data = snap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }))
    setDocs(data)
  })
}, [collection])

return {docs}
}

export default useFirestore;