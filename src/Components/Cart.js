import { makeStyles } from "@material-ui/styles";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const useStyles = makeStyles({
  CartStyle: {
    position: "absolute",
    top: 50,
    width: "100%",
    height: "100vh",
  },
  CartDataStyle: {
    display: "flex",
    paddingTop: "3rem",
    display: "flex",
    width: "100%",
    justifyContent: "center",
    "& img": {
      width: "30%",
      height: "50vh",
    },
  },
  btnNameStyle: {
    display: "flex",
    flexDirection: "column",
    " & h2": {
      backgroundColor: "#581845",
      color: "white",
    },
    "& button": {
      padding: 10,
      border: "none",
      backgroundColor: "#581845",
      color: "white",
      fontSize: "1rem",
      fontWeight: "bold",
    },
    "& button:hover": {
      backgroundColor: "red",
      color: "white",
      cursor: "pointer",
      transition: ".8s ease-in-out",
    },
  },
});
export default function Cart() {
  const classes = useStyles();
  const cartUser = useSelector((state) => state.breed.cartUser);
  const dispatch = useDispatch();

  return (
    <div className={classes.CartStyle}>
      {cartUser
        ? cartUser.map((val, i) => (
            <div className={classes.CartDataStyle}>
              <img src={val.message} />
              <div className={classes.btnNameStyle}>
                <h2>Breed = {val.breedName}</h2>
                <button
                  onClick={() => {
                    dispatch({ type: "DEL", payload: val.message });
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        : ""}
    </div>
  );
}
