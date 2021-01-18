import { makeStyles } from "@material-ui/styles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as breedActions from "../Redux/actions/breedActions";
import AddToCart from "./AddToCart";
const useStyles = makeStyles({
  formStyle: {
    display: "flex",
    padding: "20px 0",
    justifyContent: "center",
    flexDirection: "column",
    "& form": {
      display: "flex",
      width: "90%",
    },
    "& label": {
      display: "flex",
      flex: 4,
      color: "#ff2b2b",
      fontSize: "3rem",
      textAlign: "center",
      fontWeight: "bold",
      lineHeight: 0,
      alignItems: "center",
      justifyContent: "center",
    },
    "& select": {
      color: "white",
      padding: "2px 10px",
      fontSize: "1.8rem",
      fontWeight: "bold",
      borderRadius: "5%",
      backgroundColor: "#581845",
      fontFamily: "Cursive",
      outline: "none",
    },
    "& select:hover": {
      backgroundColor: "white",
      color: "#581845",
      cursor: "pointer",
      transition: ".8s ease-in-out",
    },
    "& option": {
      color: "white",
      fontSize: "1.3rem",
      fontWeight: "bold",
      backgroundColor: "#581845",
    },
    "& input": {
      flex: 1,
      display: "flex",
      padding: "2px 10px",
      color: "#581845",
      fontSize: "1rem",
      fontWeight: "bold",
      borderRadius: "5%",
      backgroundColor: "white",
      justifyContent: "center",
      fontFamily: "Cursive",
      outline: "none",
    },
    "& input:hover": {
      backgroundColor: "#581845",
      color: "white",
      cursor: "pointer",
      transition: ".8s ease-in-out",
    },
  },
});
const breeds = ["African", "Boxer", "Shiba", "Akita", "Chow"];

export default function Submit() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selectedBreed = useSelector((state) => state.breed.selectedBreed);

  return (
    <div className={classes.formStyle}>
      <label>
        Select the Breed of dog&nbsp;&nbsp;:&nbsp;&nbsp;
        <select
          value={selectedBreed}
          onChange={(e) => {
            const breed = e.target.value.toLowerCase();
            dispatch(breedActions.setSelectedBreed(e.target.value));
            dispatch(breedActions.loadImage(breed));
          }}
        >
          {breeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
      </label>
      <AddToCart />
    </div>
  );
}
