import React, { useState, useEffect } from "react";
import { TextField, Button, Grid, Tabs, Tab, Box } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { UseAuth } from "../Contexts/AuthContext";
import { useHistory } from "react-router-dom";
import Navigation from "./SubComponents/Navigation";
import Template from "./SubComponents/Template";
import { projectFirestore } from "./firebase";
import useFirestore from "../Hooks/useFirestore";
import { useFormik } from "formik";
import PropTypes from "prop-types";

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
    textAlign: "center",
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
  ProfileAlert: {
    display: "flex",
  },
  ProfileGrid: {
    margin: "5%",
    boxShadow: "0px 0px 1px grey",
    borderRadius: "20px",
  },
  ProfileTabs: {
    marginTop: "5%"
  },
  UpdateTabs: {
    marginTop: "5%",
  },
  ProfilePanel: {
    marginTop: "5%",
    marginLeft: "2.5%",
    marginRight: "2.5%",
  }
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
function a11yProps(index) {
  return {
    id: `tab-${index}`,
  };
}

export default function ProfileUpdate() {
  const classes = useStyles();
  const { currentUser, updatePassword, updateEmail, logout } = UseAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [displayName, setDisplayName] = useState("");
  const { docs } = useFirestore("Users");
  const [myName, setMyName] = useState({});
  let history = useHistory();
  const [value, setValue] = useState(0);
  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };
  const formik = useFormik({
    initialValues: {
      myUserName: "",
    },
    onSubmit: (payload) => {
      console.log("yeet");
      projectFirestore
        .collection("Users")
        .doc(currentUser.uid)
        .update({ payload });
    },
  });

  useEffect(() => {
    projectFirestore
      .collection("Users")
      .doc(currentUser.uid)
      .get()
      .then((doc) => {
        console.log(doc.data().payload.myUserName);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentUser.uid]);

  projectFirestore
    .collection("Users")
    .doc(currentUser.uid)
    .get()
    .then((doc) => {
      if (doc.exists) {
        setMyName(doc.data().payload.myUserName);
      } else {
        console.log("No such document!");
      }
    });

  async function handleLogout() {
    setError("");

    try {
      await logout();
    } catch {
      await setError("Failed to log out");
    } finally {
      history.push("/SignIn");
    }
  }
  async function handlePasswordSubmit(e) {
    e.preventDefault();

    const promises = [];
    setLoading(true);
    setError("");
    if (password) {
      promises.push(updatePassword(password));
    }
    Promise.all(promises)
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to update password");
        setLoading(false);
      });
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
      promises.push(
        projectFirestore.collection("Users").doc(currentUser.uid).update()
      );
    }
    Promise.all(promises)
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to update account");
        setLoading(false);
        console.log(error);
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

  return (
    <div>
      <div className={classes.UpdateRoot}>
        <Template />
        <div className={classes.UpdateBody}>
          <Navigation />
          <h2 className={classes.UpdateHeader}>Update Profile</h2>
          <Alert severity="info" className={classes.ProfileAlert}>
            <AlertTitle>Profile Data</AlertTitle>
            <div>
              Your Email:{}
              {JSON.stringify(currentUser.email)}
            </div>
            <div>
              Your Name:{}
              {JSON.stringify(myName)}
            </div>
          </Alert>
          {error && <Alert severity="error">{JSON.stringify(error)}</Alert>}
          <Grid className={classes.ProfileGrid}>
            <Tabs value={value} 
            onChange={handleTabChange}
            className={classes.ProfileTabs}>
              <Tab
              className={classes.UpdateTabs} label="Your Email" {...a11yProps(0)}></Tab>
              <Tab
              className={classes.UpdateTabs} label="Your Name" {...a11yProps(1)}></Tab>
              <Tab
              className={classes.UpdateTabs} label="Your Password" {...a11yProps(2)}></Tab>
            </Tabs>
            <div>
            <TabPanel value={value} index={0} className={classes.ProfilePanel}>
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
            </TabPanel>
            <TabPanel value={value} index={1} className={classes.ProfilePanel}>
              <form onSubmit={formik.handleSubmit}>
                <Grid item>
                  <TextField
                    className={classes.TextField}
                    id="myUserName"
                    variant="outlined"
                    placeholder="Your Name"
                    type="text"
                    onChange={formik.handleChange}
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
            </TabPanel>
            <TabPanel value={value} index={2} className={classes.ProfilePanel}>
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
            </TabPanel>
            </div>
           </Grid>
        </div>
      </div>
    </div>
  );
}

/* 
                    tab [0]
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
                </form>


                Tab [1]

                
                <form onSubmit={formik.handleSubmit}>
                  <Grid item>
                    <TextField
                      className={classes.TextField}
                      id="myUserName"
                      variant="outlined"
                      placeholder="Your Name"
                      type="text"
                      onChange={formik.handleChange}
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


                Tab [2]

                
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
                </form> */
