import { useState, useEffect } from "react";
import { projectStorage, projectFirestore } from "../Components/firebase";

const useStorage = (file) => {
  const [error, setError] = useState(null);

  useEffect(() => {
    const storageRef = projectStorage.ref(file);
    const collectionRef = projectFirestore.collection("Customer Addresses");

    storageRef.put(file).on(
      "state_changed",
      (err) => {
        setError(err);
      },
      async () => {
        collectionRef.add({ file });
      }
    );
  }, [file]);
  // return {file}
};

export default useStorage;
