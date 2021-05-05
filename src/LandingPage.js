import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import HeroBolt from "./Assets/HeroBolt.png";
import HeroShieldCheck from "./Assets/HeroShieldCheck.png";
import HeroCreditCard from "./Assets/credit-card.png";
import RightArrow from "./Assets/HeroNarrowArrowRight.png";
import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import Grid from "@material-ui/core/Grid";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({});

const useStyles = makeStyles({
  root: {
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    maxWidth: "30vw",
    fontFamily: "Roboto",
    alignItems: "center",
    minHeight: "100vh",
  },
  HeroDiv: {
    backgroundPosition: "left",
    minHeight: "60vh",
    [theme.breakpoints.only("md")]: {
      backgroundPosition: "center",
      minHeight: "50vh",
    },

    backgroundImage: `url(${process.env.PUBLIC_URL + "/MovingCompany.png"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minWidth: "25vw",
    color: "white",
    textAlign: "center",
    paddingBottom: "20%",
    paddingTop: "20%",
  },
  BodyDiv: {
    minWidth: "25vw",
    minHeight: "50vh",
    display: "flex",
    flexDirection: "column",
    fontSize: "1.3em",
    fontWeight: "300",
    alignItems: "left",
    paddingBottom: "20%",
    paddingTop: "20%",
    [theme.breakpoints.down("md")]: {
      alignItems: "left",
      fontSize: "1.5em",
      paddingBottom: "0px",
      paddingTop: "5%",
    },
  },
  HeroImages: {
    [theme.breakpoints.only("md")]: {
      marginLeft: "20%",
      marginRight: "5%",
    },
    marginLeft: "5%",
    marginRight: "5%",
    float: "left",
  },
  CTAButton: {
    [theme.breakpoints.down("sm")]: {
      backgroundColor: "#d33939",
      marginLeft: "auto",
      marginRight: "auto",
      width: "auto",
    },

    [theme.breakpoints.only("md")]: {
      backgroundColor: "maroon",
      width: "400px",
      marginLeft: "auto",
      marginRight: "auto",
      fontSize: "36px",
      fontWeight: "300",
      fontHeight: "1.5",
    },

    [theme.breakpoints.up("lg")]: {
      backgroundColor: "#303030",
      width: "350px",
      marginLeft: "15%",
    },
    height: "65px",
    marginTop: "50px",
    paddingLeft: "40px",
    paddingRight: "40px",
    fontWeight: "400",
    fontHeight: "1.3",
    fontSize: "24px",
    letterSpacing: "1px",
    borderRadius: "40px",
    boxShadow: "0px 0px 8px",
    color: "white",
  },
  RightArrow: {
    marginLeft: "10px",
    marginRight: "10px",
    marginTop: "5px",
    marginBottom: "5px",
  },
  MainHeader: {
    [theme.breakpoints.only("md")]: {
      textAlign: "center",
      fontSize: "72px",
      fontWeight: "300",
    },
    fontSize: "64px",
    marginLeft: "10%",
    marginRight: "5%",
    textAlign: "left",
    lineHeight: "75px",
  },
  SecondaryHeader: {
    [theme.breakpoints.only("md")]: {
      textAlign: "center",
      fontSize: "48px",
    },
    fontSize: "24px",
    marginLeft: "10%",
    marginRight: "5%",
    fontWeight: "300",
    textAlign: "left",
  },
  HeroGrid: {
    [theme.breakpoints.down("sm")]: {
      clipPath: "polygon(0 0, 100% 0, 100% 80%, 0% 100%)",
    },
    [theme.breakpoints.up("lg")]: {
      clipPath: "polygon(0 0, 100% 0, 80% 100%, 0% 100%)",
    },
  },
});

export default function LandingPage() {
  const classes = useStyles();
  return (
    <Grid container direction="row">
      <Grid item xs={12} lg={6} className={classes.HeroGrid}>
        <div className={classes.HeroDiv}>
          <h1 className={classes.MainHeader}>
            Moving out
            <br /> was never
            <br /> easier.
          </h1>
          <h2 className={classes.SecondaryHeader}>
            We take care of the hard work.
          </h2>
        </div>
      </Grid>
      <Grid item xs={12} lg={6}>
        <div className={classes.BodyDiv}>
          <p>
            <img
              src={HeroShieldCheck}
              alt="Shield"
              className={classes.HeroImages}
            />
            We will handle your belongings with the utmost in care.
          </p>
          <p>
            <img
              src={HeroCreditCard}
              alt="CreditCard"
              className={classes.HeroImages}
            />
            Book our services now, and pay later.
          </p>
          <p>
            <img src={HeroBolt} alt="Bolt" className={classes.HeroImages} />
            From start to finish, our process saves you time.
          </p>
          <button className={classes.CTAButton}>
            Get Started
            <img
              src={RightArrow}
              alt="ArrowRight"
              className={classes.RightArrow}
            />
          </button>
        </div>
      </Grid>
    </Grid>
  );
}
