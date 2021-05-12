import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import { ReactComponent as Delivery } from "./Assets/delivery2.svg";


const useStyles = makeStyles ({
  TruckDiv: {
    height: "100vh",
    width: "33.5vw",
    alignItems: "center",
    backgroundColor: "#2b2323",
    justifyItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent:"center",
  },
  Delivery: {
    maxWidth: "400px",
    wordWrap: "none",
  },
  TruckText: {
    fontSize: "1.6",
    color: "white",
  },
  TruckTextE: {
    fontSize: "1.6",
    color: "#ee5959"
  }
})

export default function Template() {
  const classes = useStyles();
  return (
    <div className={classes.BodyDiv}>
    <div className={classes.TruckDiv}>
        <Delivery className={classes.Delivery} />
        <h2 className={classes.TruckText}>Moving out has never been <span className={classes.TruckTextE}>easier</span></h2>
      </div>
    </div>
  );
}