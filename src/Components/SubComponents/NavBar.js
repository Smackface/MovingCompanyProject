import "../../App.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link, useLocation, matchPath } from "react-router-dom";

const useStyles = makeStyles({
  SignUpTab: {
    color: "#72b2df",
    fontSize: "1.3em",
    textTransform: "initial",
    marginRight: "auto",
    marginLeft: "auto",
  },
  SignInTab: {
    color: "#72b2df",
    fontSize: "1.3em",
    textTransform: "initial",
    marginLeft: "auto",
  },
  FormTabs: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  NavBarDiv: {
    width: "50vw",
  },
});

const navItems = [
  {
    id: "SignUp",
    path: "/SignUp",
    text: "Sign Up",
  },
  {
    id: "SignIn",
    path: "/SignIn",
    text: "Sign In",
  },
];

export default function NavBar() {
  const { pathname } = useLocation();
  const activeItem = navItems.find(
    (item) => !!matchPath(pathname, { path: item.path })
  );

  const classes = useStyles();
  return (
    <Tabs
      centered
      className={classes.FormTabs}
      aria-label="test"
      indicatorColor="secondary"
      value={activeItem?.id}
    >
      {navItems.map((item) => (
        <Tab
          className={classes.SignUpTab}
          key={item.id}
          value={item.id}
          label={item.text}
          component={Link}
          to={item.path}
        />
      ))}
    </Tabs>
  );
}
