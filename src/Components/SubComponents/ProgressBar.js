import React, { useEffect } from "react";
import useStorage from "../../Hooks/useStorage";
import { motion } from "framer-motion";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";

const useStyles = makeStyles({
  ProgressBar: {
    height: "5px",
    backgroundColor: "#ee5959",
    marginTop: "5%",
  },
});

const ProgressBar = ({ file, setFile }) => {
  const classes = useStyles();
  const { url, progress } = useStorage(file);
  console.log(progress, url);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <motion.div
      className={classes.ProgressBar}
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    ></motion.div>
  );
};

export default ProgressBar;
