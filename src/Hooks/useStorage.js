import { useState, useEffect } from "react";
import { projectStorage, projectFirestore } from "../Components/firebase";
import { UseAuth } from "../Contexts/AuthContext";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  const {currentUser} = UseAuth()

  useEffect(() => {
    //references
    const fileName = JSON.stringify(currentUser.uid)
    const storageRef = projectStorage.ref(fileName);

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        projectFirestore.collection("images")
          .doc(currentUser.uid)
          .set({
            payload: {
              url: {url}
            }
          })
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;