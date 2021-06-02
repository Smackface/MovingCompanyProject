import React from "react";
import { motion } from "framer-motion"
import { makeStyles } from "@material-ui/core";

const Modal = ({ selectedDiv, setSelectedDiv}) => {
    const useStyles = makeStyles({
        width: "600px",
        backgroundColor: "black",
    })
    const classes = useStyles
    const handleClick = (e) => {
        if (e.target.classList.contains("backdrop")) setSelectedDiv(null);
    };

    return (
        <motion.div 
        className={classes.backdrop}
        onClick={handleClick}
        initial={{opacity: 0}}
        animate={{ opacity: 1 }}
        >
        <motion.div
        alt="enlarged pic"
        initial={{y: "-100vh" }}
        animate={{ y: 0 }}
        >Sample Text</motion.div>        
        </motion.div>
    )
}

export default Modal;