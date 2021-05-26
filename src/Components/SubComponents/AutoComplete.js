
// Another useless file, again kept for personal documentation.


// import ReactGoogleAutocomplete, {
//   usePlacesWidget,
// } from "react-google-autocomplete";
// import { FormGroup, FormLabel, TextField } from "@material-ui/core";
// import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
// import { useState } from "react";

// export default function MyAutoComplete() {
//   const theme = createMuiTheme({
//     breakpoints: {
//       values: {
//         xs: 0,
//         sm: 600,
//         md: 760,
//         lg: 1280,
//         xl: 1920,
//       },
//     },
//     overrides: {
//       MuiOutlinedInput: {
//         root: {
//           borderRadius: "15px",
//         },
//       },
//     },
//   });

//   const useStyles = makeStyles({
//     InputText: {
//       marginLeft: "auto",
//       marginRight: "auto",
//       marginTop: "5px",
//       marginBottom: "5px",
//       maxWidth: "75%",
//     },
//     InputGrid: {
//       marginLeft: "auto",
//       marginRight: "auto",
//       textAlign: "center",
//       alignItems: "center",
//       justifyContent: "center",
//       display: "flex",
//       flexDirection: "column",
//       minWidth: "100%",
//     FormLabel: {
//         position: "relative",
//         alignSelf: "flex-start",
//         marginLeft: "13%",
//         color: "#3C5C68",
//       },
//     },
//   });
//   const [payload, setPayload] = useState();
//   const [place, setPlace] = useState();

//   const { ref } = usePlacesWidget({
//     id: "Destination",
//     apiKey: process.env.REACT_APP_GOOGLE,
//     onPlaceSelected: (place) => {
//       const payload = {
//         destination: {
//           lng: place.lng,
//           lat: place.lat,
//           locationName: place.address_components,
//         },
//       };
//       setPlace(place);
//       setPayload(place);
//       console.log(payload)
//     },
//     options: {
//       componentRestrictions: { country: "us" },
//       types: ["address"],
//       fields: ["address_components", "geometry"],
//     },
//   });
//   const classes = useStyles();

//   return (
//     <div className={classes.InputGrid}>
//       <label className={classes.FormLabel}>Person to talk to</label>
//       <TextField
//         className={classes.InputText}
//         variant="outlined"
//         label="Destination"
//         size="small"
//         inputRef={ref}
//         name="Destination"
//         id="Destination"
//       />
//     </div>
//   );
// }

// Another useless file, again kept for personal documentation.
