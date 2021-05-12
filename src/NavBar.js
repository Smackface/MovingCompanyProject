import "./App.css";
import React, {Component} from "react";
import {  makeStyles, withStyles } from "@material-ui/core/styles";
import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {  Link as RouterLink, BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";

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
  },
  NavBarDiv: {
    width: "50vw",
  },
});

export default function NavBar() {
  // const location = useLocation()
  const [value, setValue] = React.useState(1);
  const handleChange = (e, value) => {
    setValue(value);
  };

  const classes = useStyles();
  return (
    <div className={classes.NavBarDiv}>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        className={classes.FormTabs}
        aria-label="test"
        indicatorColor="secondary"
      >
        <Tab
          component={RouterLink}
          to={"/SignUp"}
          className={classes.SignUpTab}
          label="Sign Up"
        />
        <Tab
          component={RouterLink}
          to={"/SignIn"}
          className={classes.SignInTab}
          label="Sign In"
        />
      </Tabs>
    </div>
  );
}



