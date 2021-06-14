import React, { useState } from "react";
import { TextField, Button, Grid } from "@material-ui/core";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { UseAuth } from "../Contexts/AuthContext";
import { useHistory } from "react-router-dom";
import Navigation from "./SubComponents/Navigation";
import Template from "./SubComponents/Template";

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
  const { currentUser, updatePassword, updateEmail } = UseAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  let history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return setError("Passwords Do Not Match!");
    }

    const promises = [];
    setLoading(true);
    setError("");
    if (email.value !== currentUser.email) {
      promises.push(updateEmail(email.value));
    }
    if (password.value) {
      promises.push.toString(updatePassword(password.value));
    }

    Promise.all(promises)
      .then(() => {
        history.push("/SignIn");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
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
  console.log(email)

  return (
    <div>
      {currentUser ? (
        <div className={classes.UpdateRoot}>
          <Template />
          <div className={classes.UpdateBody}>
            <Navigation />
            <h2 className={classes.UpdateHeader}>Update Profile</h2>
            {JSON.stringify(currentUser.email)}
            <Grid>
              <form onSubmit={handleSubmit}>
                <Grid item>
                  <TextField
                    className={classes.TextField}
                    id="email"
                    variant="outlined"
                    placeholder="john@doe.com"
                    type="email"
                    value={email}
                    onChange={handleChange}
                    required
                    defaultValue={currentUser.email}
                  />
                </Grid>
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
