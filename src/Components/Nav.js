import { makeStyles } from "@material-ui/styles";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "./image/doglogo.png";
const useStyles = makeStyles({
  navbar: {
    width: "100%",
    height: "70px",
    position: "fixed",
    zIndex: 2,
    backgroundColor: "#581845",
  },
  navbarContainer: {
    width: "100%",
    height: "70px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    "& p": {
      color: "white",
      fontWeight: "bold",
      fontSize: "2rem",
      textAlign: "center",
    },
  },
});
export default function Nav() {
  const cart = useSelector((state) => state.breed.cart);
  const classes = useStyles();
  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarContainer}>
        <div style={{ paddingLeft: 50 }}>
          <Link to="/">
            <i
              class="fa fa-home"
              style={{ fontSize: "30px", color: "white" }}
            />
          </Link>
        </div>
        <div className={classes.text}>
          <p>This is the official Site of all over world Dog breeds.</p>
        </div>
        <div style={{ paddingRight: 50 }}>
          <Link to="/Cart">
            <i
              class="fa fa-cart-plus"
              style={{ fontSize: "30px", color: "white" }}
            />
            <span
              style={{ fontSize: "2rem", color: "white", fontWeight: "bold" }}
            >
              {cart.length}
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
