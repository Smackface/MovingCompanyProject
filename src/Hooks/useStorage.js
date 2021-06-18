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
    const storageRef = projectStorage.ref(currentUser.uid);

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
  }, [file, currentUser.uid]);

  return { progress, url, error };
};

export default useStorage;