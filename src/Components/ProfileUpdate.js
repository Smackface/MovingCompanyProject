import React, { useState } from "react";
import { TextField, Button, Grid } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { UseAuth } from "../Contexts/AuthContext";
import { useHistory } from "react-router-dom";
import Navigation from "./SubComponents/Navigation";
import Template from "./SubComponents/Template";
import { projectFirestore } from "./firebase";

const useStyles = makeStyles({
  UpdateRoot: {
    display: "flex",
  },
  UpdateBody: {
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "center",
  },
  TextField: {
    marginTop: "5%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  SubmitButton: {
    marginTop: "20px",
    marginBottom: "20px",
    paddingLeft: "10%",
    paddingRight: "10%",
    width: "350px",
    height: "40px",
    borderRadius: "15px",
    backgroundColor: "#72b2df",
    color: "white",
    textTransform: "initial",
    fontSize: "1.4em",
  },
});

export default function ProfileUpdate() {
  const classes = useStyles();
  const { currentUser, updatePassword, updateEmail, logout, setUsername } = UseAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [displayName, setDisplayName] = useState("")
  let history = useHistory();

  // function ProfileCreate() {
  //   projectFirestore.collection("Users")
  //   .doc(currentUser.uid)
  //   .set({name: currentUser.email})
  // }

  async function handleLogout() {
    setError('')

    try {
        await logout()
    } catch {
      await  setError("Failed to log out")
    } finally {
      history.push('/SignIn')
    }
}
  async function handlePasswordSubmit(e) {
    e.preventDefault();

    const promises=[];
    setLoading(true);
    setError("")
    if (password) {
      promises.push(updatePassword(password))
    }
    Promise.all(promises)
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to update password")
        setLoading(false)
      })
  }

  async function handleProfileSubmit(e) {
    e.preventDefault();

    const promises = [];
    setLoading(true);
    setError("");
    if (email !== currentUser.email) {
      promises.push(updateEmail(email));
    }
    if (displayName) {
      promises.push(setUsername(displayName))
    }

    Promise.all(promises)
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to update account");
        setLoading(false);
      })
  }
  function handleChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  function handleConfirmChange(e) {
    setPasswordConfirm(e.target.value);
  }
  function handleDisplayNameChange(e) {
    setDisplayName(e.target.value)
  }
  console.log(currentUser.uid)

  return (
    <div>
      {currentUser ? (
        <div className={classes.UpdateRoot}>
          <Template />
          <div className={classes.UpdateBody}>
            <Navigation />
            <h2 className={classes.UpdateHeader}>Update Profile</h2>
            <Alert serverity="info">
              <AlertTitle>Profile Data</AlertTitle>
              Your Email: {JSON.stringify(currentUser.email)}
              Your Name: {currentUser.displayName}
            </Alert>
            {error && <Alert severity="error">{JSON.stringify(error)}</Alert>}
            <Grid>
              <form onSubmit={handleProfileSubmit}>
                <Grid item>
                  <TextField
                    className={classes.TextField}
                    id="email"
                    variant="outlined"
                    placeholder="john@doe.com"
                    type="email"
                    value={email}
                    onChange={handleChange}
                    defaultValue={currentUser.email}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    className={classes.TextField}
                    id='email'
                    variant='outlined'
                    placeholder='Your Name'
                    type='text'
                    value={displayName}
                    onChange={handleDisplayNameChange}
                  />
                </Grid>
                <Button
                  className={classes.SubmitButton}
                  disabled={loading}
                  variant="contained"
                  color="primary"
                  size="large"
                  type="submit"
                >
                  Update
                </Button>
              </form>
              <form onSubmit={handlePasswordSubmit}>
                <Grid item>
                  <TextField
                    className={classes.TextField}
                    id="password"
                    variant="outlined"
                    label="Password"
                    placeholder="Leave Blank to Keep Old"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    className={classes.TextField}
                    id="password-confirm"
                    variant="outlined"
                    label="Confirm Password"
                    type="password"
                    placeholder="Leave Blank to Keep Old"
                    value={passwordConfirm}
                    onChange={handleConfirmChange}
                  />
                </Grid>
                <Grid item>
                  <Button
                    className={classes.SubmitButton}
                    disabled={loading}
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                  >
                    Update
                  </Button>
                </Grid>
              </form>
            </Grid>
          </div>
        </div>
      ) : (
        history.push("/SignIn")
      )}
    </div>
  );
}
