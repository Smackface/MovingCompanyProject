import { useState, useEffect } from "react";
import { projectFirestore } from "../Components/firebase";

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);
  // JSON.stringify(docs)


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


//   useEffect(() => {
//     const unsub = projectFirestore
//       .collection(collection)
//       // .orderBy("address components", "geometry")
//       .onSnapshot((snap) => {
//         let documents = [];
//         snap.forEach((doc) => {
//           documents.push({ ...doc.data(), id: doc.id });
//         });
//         setDocs(documents);
//       });
//     return () => unsub();
//   }, [collection]);
//   return { docs };
// };