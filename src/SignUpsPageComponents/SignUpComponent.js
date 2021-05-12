import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import NavBar from "../NavBar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Divider } from "@material-ui/core";
import { ReactComponent as Google } from "../Assets/GOOGLogo.svg";
import { ReactComponent as Apple } from "../Assets/AAPLLogo.svg";
import { ReactComponent as Facebook } from "../Assets/FBLogo.svg";
import Template from "../Template";
import React from "react";

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
    [theme.breakpoints.down("md")]: {
      paddingBottom: "20px",
    },
  },
  SubmitButton: {
    marginTop: "20px",
    marginBottom: "20px",
    width: "40%",
    height: "6%",
    borderRadius: "15px",
    backgroundColor: "#1074d8",
    color: "white",
    textTransform: "initial",
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
  EmailTextField: {
    width: "40%",
    marginTop: "20px",
    marginBottom: "20px",
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
  Account: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.3em",
    },
    fontSize: "300%",
  },
});

export default function SignUpComponent() {
  const classes = useStyles();
  return (
    <div className={classes.BodyDiv}>
      <Template className={classes.Template} />
      <div className={classes.SignUpsDiv}>
        <NavBar />
        <div className={classes.HeaderDiv}></div>
        <h1 className={classes.Account}>Create an account</h1>
        <TextField
          className={classes.EmailTextField}
          variant="outlined"
          label="Email"
          placeholder="john@doe.com"
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.SubmitButton}
          size="large"
        >
          Sign Up
        </Button>
        <div className={classes.BottomDiv}>
          <div className={classes.DividerDiv}>
            <Divider className={classes.Divider} />
            <p className={classes.DividerParagraph}>or</p>
            <Divider className={classes.Divider} />
          </div>
          <div className={classes.SocialMediaDiv}>
            <Button variant="outlined" className={classes.SocialMediaButton}>
              <Facebook className={classes.SocialMedia} />
            </Button>
            <Button variant="outlined" className={classes.SocialMediaButton}>
              <Google className={classes.SocialMedia} />
            </Button>
            <Button variant="outlined" className={classes.SocialMediaButton}>
              <Apple className={classes.SocialMedia} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
