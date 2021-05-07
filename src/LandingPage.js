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
import Button from '@material-ui/core/Button';

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
  root: {
    marginLeft: "auto",
    marginRight: "auto",
    fontFamily: "Roboto",
    alignItems: "center",
    minHeight: "100vh",
    paddingBottom: "20px",
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
    paddingBottom: "25%",
    paddingTop: "10%",
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
      alignText: "center",
    },
    [theme.breakpoints.down("sm")]:{
      paddingLeft: "15px",
      paddingRight: "15px",
      textAlign: "center",
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
      '&:hover': {textShadow: "-1px -1px 4px #CD5C5C, 1px 1px 4px #F08080"},
    },

    [theme.breakpoints.only("md")]: {
      backgroundColor: "maroon",
      width: "400px",
      marginLeft: "auto",
      marginRight: "auto",
      fontSize: "36px",
      fontWeight: "300",
      fontHeight: "1.5",
      '&:hover': {textShadow: "-1px -1px 4px #8B0000, 1px 1px 4px #B22222"},
    },

    [theme.breakpoints.up("lg")]: {
      backgroundColor: "#303030",
      width: "350px",
      marginLeft: "15%",
      '&:hover': {textShadow: "-1px -1px 4px #000, 1px 1px 4px #696969"},
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
    [theme.breakpoints.down("sm")]: {
      fontSize: "56px",
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
  BodyParagraph: {
    [theme.breakpoints.only("md")]: {
      marginRight: "10%",
    }
  },
});

export default function LandingPage() {
  const classes = useStyles();
  return (
    <Grid container direction="row" className={classes.root}>
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
          <p className={classes.BodyParagraph}>
            <img
              src={HeroShieldCheck}
              alt="Shield"
              className={classes.HeroImages}
            />
            We will handle your belongings with the utmost in care.
          </p>
          <p className={classes.BodyParagraph}>
            <img
              src={HeroCreditCard}
              alt="CreditCard"
              className={classes.HeroImages}
            />
            Book our services now, and pay later.
          </p>
          <p className={classes.BodyParagraph}>
            <img src={HeroBolt} alt="Bolt" className={classes.HeroImages} />
            From start to finish, our process saves you time.
          </p>
          <Button variant="contained" className={classes.CTAButton}>
            Get Started
            <img
              src={RightArrow}
              alt="ArrowRight"
              className={classes.RightArrow}
            />
          </Button>
        </div>
      </Grid>
    </Grid>
  );
}
