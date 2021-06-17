import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { AlertTitle, Alert } from "@material-ui/lab";
import { UseAuth } from "../../Contexts/AuthContext";

const useStyles = makeStyles({
})

const UploadForm = ({currentUser}) => {
    const classes = useStyles()
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
  
    const types = ["image/png", "image/jpeg"];
  
    const handleChange = (e) => {
      let selected = e.target.files[0];
  
      if (selected && types.includes(selected.type)) {
        setFile(selected);
        console.log(file)
        setError(null);
      } else {
        setFile(null);
        setError("Please select an image file (png or jpeg)");
      }
    };
  
    return (
      <form>
        <input type="file" onChange={handleChange} />
        <div>
          {error && <Alert severity="error"><AlertTitle>{error}</AlertTitle></Alert>}
          {error && <div>{file.name}</div>}
          {file && <ProgressBar file={file} setFile={setFile} />}
        </div>
      </form>
    );
  };
  
  export default UploadForm;