import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import NavBar from "./SubComponents/NavBar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Divider } from "@material-ui/core";
import { ReactComponent as Google } from "../Assets/GOOGLogo.svg";
import { ReactComponent as Apple } from "../Assets/AAPLLogo.svg";
import { ReactComponent as Facebook } from "../Assets/FBLogo.svg";
import Template from "./SubComponents/Template";
import React, { useState } from "react";
import { UseAuth } from "../Contexts/AuthContext";
import Alert from "@material-ui/lab/Alert";
import { useHistory, Link } from "react-router-dom";
import Navigation from './SubComponents/Navigation'
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { motion } from 'framer-motion'

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 760,
      lg: 1280,
      xl: 1920,
    },
  },
});

const useStyles = makeStyles({
  BodyDiv: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minHeight: "100vh",
    },
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  SignUpsDiv: {
    [theme.breakpoints.down("md")]: {
      width: "100vw",
      height: "50vh",
    },
    alignItems: "center",
    width: "66.5vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignText: "center",
    marginRight: "auto",
  },
  DividerDiv: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  Divider: {
    minWidth: "40%",
    maxWidth: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  DividerParagraph: {
    fontSize: "1.1em",
    color: "grey",
  },
  BottomDiv: {
    width: "90%",
    alignItems: "center",
    marginTop: "auto",
    marginBottom: "10%",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      paddingBottom: "20px",
    },
  },
  SubmitButton: {
    marginTop: "20px",
    marginBottom: "20px",
    width: "350px",
    height: "40px",
    borderRadius: "15px",
    backgroundColor: "#72b2df",
    color: "white",
    textTransform: "initial",
    fontSize: "1em",
    textAlign: "center",
  },
  SocialMedia: {
    minWidth: "40px",
    minHeight: "40px",
  },
  SocialMediaButton: {
    borderRadius: "40px",
    marginLeft: "5%",
    marginRight: "5%",
  },
  TextField: {
    width: "40%",
    marginTop: "20px",
    marginBottom: "20px",
    [theme.breakpoints.down("sm")]: {
      width: "75%",
    },
  },
  Delivery: {
    maxWidth: "400px",
  },
  SocialMediaDiv: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  HeaderDiv: {
    display: "flex",
    flexDirection: "row",
  },
  Form: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
  SocialLinks: {
    marginLeft: "5%",
    marginRight: "5%",
  },
  PasswordButton: {
    textTransform: "initial",
    backgroundColor: "#72b2df",
    color: "white",
    borderRadius: "15px",
  },
});

export default function ForgotPassword() {
  const classes = useStyles();
  const { resetPassword } = UseAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState('')
  let history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage('')
      setError("");
      setLoading(true);
      await resetPassword(email);
      setMessage('Check your inbox for further instructions.')
    } catch (e) {
      console.log(e);
      setError("Failed To Reset!");
    }
    setLoading(false);
  }

  function handleChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <motion.div className={classes.BodyDiv}
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{duration: .5}}>
      <Template />
      <div className={classes.SignUpsDiv}>
      <Navigation />
        <div className={classes.HeaderDiv}></div>
        <h1>Reset Password</h1>
        {error && (
          <Alert variant="outlined" severity="error">
            {error}
          </Alert>
        )}
        {message && <Alert variant="outlined" severity="info">{message}</Alert>}
        <form className={classes.Form} onSubmit={handleSubmit}>
        <TextField
          className={classes.TextField}
          id="email"
          variant="outlined"
          placeholder="john@doe.com"
          type="email"
          value={email}
          onChange={handleChange}
          required
        />
          <Button
            className={classes.SubmitButton}
            disabled={loading}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
          >
            Reset Password
          </Button>
        </form>
        <div className={classes.BottomDiv}>
        <Link to="/SignIn">
          <Button className={classes.PasswordButton}>Sign In</Button>
        </Link>
          <div className={classes.DividerDiv}>
            <Divider className={classes.Divider} />
            <p className={classes.DividerParagraph}>or</p>
            <Divider className={classes.Divider} />
          </div>
          <div className={classes.SocialMediaDiv}>
          <a href="https://www.facebook.com/Moving-Mammoths-111032381211638" className={classes.SocialLinks}>
            <Button variant="outlined" className={classes.SocialMediaButton}>
              <Facebook className={classes.SocialMedia} />
            </Button>
          </a>
          <a href="https://www.instagram.com/movingmammoths/" className={classes.SocialLinks}>
            <Button variant="outlined" className={classes.SocialMediaButton}>
              <InstagramIcon className={classes.SocialMedia} />
            </Button>
          </a>
          <a href="https://twitter.com/movingmammoths" className={classes.SocialLinks}>
            <Button variant="outlined" className={classes.SocialMediaButton}>
              <TwitterIcon className={classes.SocialMedia} />
            </Button>
          </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
