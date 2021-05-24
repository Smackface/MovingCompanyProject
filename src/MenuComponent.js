import Button from "@material-ui/core/Button";
import { TableBody, TableCell, TableHead } from "@material-ui/core";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import React, { useState } from "react";
import AddSharpIcon from "@material-ui/icons/AddSharp";
import RemoveSharpIcon from "@material-ui/icons/RemoveSharp";
import { ThemeProvider } from "@material-ui/styles";

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
  Background: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  ItemList: {
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    color: "#474C4E",
    minWidth: "35vw",
  },
  ItemContainer: {
    display: "flex",
  },
  Completed: {},
  Quantity: {
    display: "flex",
  },
  InfoDiv: {
    width: "12%",
  },
  Button: {
    marginLeft: "5px",
    marginRight: "5px",
    padding: "0px",
    borderRadius: "40px",
  },
  Icons: {},
  qtydiv: {
    marginLeft: "5px",
    marginRight: "5px",
  },
});

export default function MenuComponent() {
  const classes = useStyles();
  const [items, setItems] = useState([
    { itemName: "Desks", quantity: 0, isSelected: false },
    { itemName: "Computers", quantity: 0, isSelected: true },
    { itemName: "TVs", quantity: 0, isSelected: false },
    { itemName: "Chairs", quantity: 0, isSelected: false },
    { itemName: "Tables", quantity: 0, isSelected: false },
    { itemName: "Appliances", quantity: 0, isSelected: false },
  ]);
  const handleQuantityIncrease = (index) => {
    const newItems = [...items];

    newItems[index].quantity++;

    setItems(newItems);
    console.log(newItems[index].quantity);
  };
  const handleQuantityDecrease = (index) => {
    const newItems = [...items];

    newItems[index].quantity--;

    setItems(newItems);
    console.log(newItems[index].quantity);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.Background}>
        <div className={classes.MainContainer}>
          <TableHead>
            Items to move
            <TableBody className={classes.TableBody}>
              {items.map((items, index) => (
                <TableCell
                  className={classes.ItemList}
                  key={index}
                  value={index}
                >
                  <div className={classes.InfoDiv}>{items.itemName}</div>
                  <Button
                    className={classes.Button}
                    onClick={() => handleQuantityDecrease(index)}
                    variant="outlined"
                  >
                    <RemoveSharpIcon className={classes.Icons} />
                  </Button>
                  <div className={classes.qtydiv}>{items.quantity}</div>
                  <Button
                    className={classes.Button}
                    onClick={() => handleQuantityIncrease(index)}
                    variant="outlined"
                  >
                    <AddSharpIcon className={classes.Icons} />
                  </Button>
                </TableCell>
              ))}
            </TableBody>
          </TableHead>
        </div>
      </div>
    </ThemeProvider>
  );
}
