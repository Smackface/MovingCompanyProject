import "./App.css";
import React, { Component } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
  matchPath,
} from "react-router-dom";

// const styles = makeStyles({
//   SignUpTab: {
//     color: "#1074d8",
//     fontSize: "1.3em",
//     textTransform: "initial",
//     marginRight: "auto",
//   },
//   SignInTab: {
//     color: "#1074d8",
//     fontSize: "1.3em",
//     textTransform: "initial",
//     marginLeft: "auto",
//   },
//   FormTabs: {
//     display: "flex",
//     flexDirection: "column",
//     width: "100%",
//   },
//   NavBarDiv: {
//     width: "50vw",
//   },
// });

// class NavBar extends Component {
//   state = {
//     value: false
//   };

//   handleChange = (event, value) => {
//     this.setState({value})
//   };

//   render() {
//     const {classes, value} = this.props
//     return(
//       <Router>
//       <div className={classes.NavBarDiv}>
//       <Tabs
//         value={this.value}
//         onChange={this.handleChange}
//         centered
//         className={classes.FormTabs}
//         aria-label="test"
//         indicatorColor="secondary"
//         onClick={(event) => {this.props.history.push("/SignUp")}}
//       >
//         <Tab
//           component={RouterLink}
//           to={"/SignUp"}
//           className={classes.SignUpTab}
//           label="Sign Up"
//           value={"/SignUp"}
//         />
//         <Tab
//           component={RouterLink}
//           to={"/SignIn"}
//           className={classes.SignInTab}
//           label="Sign In"
//           value={"/SignIn"}
//         />
//       </Tabs>
//     </div>
//     </Router>
//     )
//   }
// }

// export default withStyles(styles)(NavBar)

const useStyles = makeStyles({
  SignUpTab: {
    color: "#1074d8",
    fontSize: "1.3em",
    textTransform: "initial",
    marginRight: "auto",
    marginLeft: "auto",
  },
  SignInTab: {
    color: "#1074d8",
    fontSize: "1.3em",
    textTransform: "initial",
    marginLeft: "auto",
  },
  FormTabs: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginTop: "auto",
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
