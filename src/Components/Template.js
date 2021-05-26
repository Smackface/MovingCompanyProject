import "../App.css";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import { ReactComponent as Delivery } from "../Assets/delivery2.svg";

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
  TruckDiv: {
    height: "100vh",
    width: "33.5vw",
    alignItems: "center",
    backgroundColor: "#2b2323",
    justifyItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      height: "50vh",
      width: "100vw",
    },
  },
  Delivery: {
    maxWidth: "400px",
    wordWrap: "none",
  },
  TruckText: {
    fontSize: "1.6",
    color: "white",
    textAlign: "center",
  },
  TruckTextE: {
    fontSize: "1.6",
    color: "#ee5959",
  },
});

export default function Template() {
  const classes = useStyles();
  return (
    <div className={classes.BodyDiv}>
      <div className={classes.TruckDiv}>
        <Delivery className={classes.Delivery} />
        <h2 className={classes.TruckText}>
          Moving out has never been{" "}
          <span className={classes.TruckTextE}>easier</span>
        </h2>
      </div>
    </div>
  );
}
