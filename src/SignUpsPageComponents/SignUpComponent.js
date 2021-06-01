import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import NavBar from "../Components/NavBar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Divider } from "@material-ui/core";
import { ReactComponent as Google } from "../Assets/GOOGLogo.svg";
import { ReactComponent as Apple } from "../Assets/AAPLLogo.svg";
import { ReactComponent as Facebook } from "../Assets/FBLogo.svg";
import Template from "../Components/Template";
import React, { useState } from "react";
import { UseAuth } from "../Contexts/AuthContext";
import Alert from "@material-ui/lab/Alert";
import { useHistory } from "react-router-dom";

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
    paddingLeft: "10%",
    paddingRight: "10%",
    width: "350px",
    height: "40px",
    borderRadius: "15px",
    backgroundColor: "#1074d8",
    color: "white",
    textTransform: "initial",
    fontSize: "1.4em",
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
    [theme.breakpoints.down("sm")] : {
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
  Account: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.3em",
    },
    fontSize: "300%",
  },
  FormGroup: {
    width: "100%",
    alignItems: "center",
  },
  Form: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },
});

export default function SignUpComponent() {
  const classes = useStyles();
  const { register, currentUser } = UseAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("")
  let history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault();
    history.push("/MoveSetUp")
    if (password !== passwordConfirm) {
      return setError("Passwords Do Not Match!");
    }

    try {
      setError("");
      setLoading(true);
      await register(email, password);
    } catch(e) {
      console.log(e)
      setError("Failed To Create An Account!");
    }
    setLoading(false);
  }

  function handleChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  function handleConfirmChange(e) {
    setPasswordConfirm(e.target.value)
  }

  return (
    <div className={classes.BodyDiv}>
      <Template className={classes.Template} />
      <div className={classes.SignUpsDiv}>
        <NavBar />
        <div className={classes.HeaderDiv}></div>
        {currentUser && currentUser.email}
        <h1 className={classes.Account}>Create an account</h1>
        <form className={classes.Form} onSubmit={handleSubmit}>
          {error && (
            <Alert variant="outlined" severity="error">
              {error}
            </Alert>
          )}
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
          <TextField
            className={classes.TextField}
            id="password"
            variant="outlined"
            label="Password"
            placeholder="******"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <TextField
            className={classes.TextField}
            id="password-confirm"
            variant="outlined"
            label="Confirm Password"
            type="password"
            placeholder="******"
            value={passwordConfirm}
            onChange={handleConfirmChange}
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
            Sign Up
          </Button>
        </form>
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
