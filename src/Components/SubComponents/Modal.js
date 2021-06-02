import React from "react";
import { motion } from "framer-motion"
import { makeStyles } from "@material-ui/core";



const useStyles = makeStyles({
    backdrop: {
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
    }
})

const Modal = ({ selectedDiv, setSelectedDiv}) => {
    const classes = useStyles
    const handleClick = (e) => {
        if (e.target.classList.contains("backdrop")) setSelectedDiv(null);
    };

    return (
        <motion.div 
        onClick={handleClick}
        initial={{opacity: 0}}
        animate={{ opacity: 1 }}
        >
        <motion.div
        className={classes.backdrop}
        alt="enlarged pic"
        initial={{y: "-100vh" }}
        animate={{ y: 0 }}
        >Sample Text</motion.div>        
        </motion.div>
    )
}

export default Modal;