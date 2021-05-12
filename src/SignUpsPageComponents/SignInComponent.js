import { makeStyles } from "@material-ui/core/styles";
import "@fontsource/roboto";
import "@fontsource/roboto/300.css";
import NavBar from '../NavBar';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Divider } from "@material-ui/core";
import { ReactComponent as Google } from "../Assets/GOOGLogo.svg";
import { ReactComponent as Apple } from "../Assets/AAPLLogo.svg";
import { ReactComponent as Facebook } from "../Assets/FBLogo.svg";
import Template from "../Template";

const useStyles = makeStyles({
  BodyDiv: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  SignUpsDiv: {
    alignItems: "center",
    // backgroundColor: "AliceBlue",
    width: "66.5vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignText: "center",
    marginRight: "auto",
  },
  DividerDiv: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  Divider: {
    minWidth: "40%",
    maxWidth: "80%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  DividerParagraph:{
    fontSize: "1.1em",
    color: "grey"
  },
  BottomDiv: {
    width: "90%",
    alignItems: "center",
    marginTop: "auto",
    marginBottom: "10%",
  },
  SubmitButton: {
    marginTop: "20px",
    marginBottom: "20px",
    width: "40%",
    height: "6%",
    borderRadius: "15px",
    backgroundColor: "#1074d8",
    color: "white",
    textTransform: "initial"
  },
  SocialMedia: {
    minWidth: "40px",
    minHeight: "40px",
  },
  SocialMediaButton: {
    borderRadius: "40px",
    marginLeft: "5%",
    marginRight: "5%",
  },
  EmailTextField: {
    width: "40%",
    marginTop: "20px",
    marginBottom: "20px",
  },
  Delivery: {
    maxWidth: "400px",
  },
  SocialMediaDiv: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  HeaderDiv: {
    display: "flex",
    flexDirection: "row",
  },
});

export default function SignInComponent() {
  const classes = useStyles();
  return (
    <div className={classes.BodyDiv}>
    <Template/>
    <div className={classes.SignUpsDiv}>
    <NavBar/>
      <div className={classes.HeaderDiv}></div>
      <h1>Sign In</h1>
      <TextField
        className={classes.EmailTextField}
        variant="outlined"
        label="Email"
        placeholder="john@doe.com"
      />
      <TextField
        className={classes.EmailTextField}
        variant="outlined"
        label="Password"
        placeholder="*******"
      />
      <Button
        variant="contained"
        className={classes.SubmitButton}
      >
        Sign In
      </Button>
      <div className={classes.BottomDiv}>
        <div className={classes.DividerDiv}>
          <Divider className={classes.Divider} />
          <p className={classes.DividerParagraph}>or</p>
          <Divider className={classes.Divider} />
        </div>
        <div className={classes.SocialMediaDiv}>
          <Button variant="outlined" className={classes.SocialMediaButton}>
            <Facebook className={classes.SocialMedia} />
          </Button>
          <Button variant="outlined" className={classes.SocialMediaButton}>
            <Google className={classes.SocialMedia} />
          </Button>
          <Button variant="outlined" className={classes.SocialMediaButton}>
            <Apple className={classes.SocialMedia} />
          </Button>
        </div>
      </div>
    </div>
    </div>
  );
}
