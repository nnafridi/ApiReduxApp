import axios from "axios";
import * as ActionType from "./actionTypes";

export function loadImageSuccess(image) {
  return {
    type: ActionType.GET_BREED_SUCESS,
    image,
  };
}

export function loadImageFailure(error) {
  return {
    type: ActionType.GET_BREED_FAILURE,
    error,
  };
}
export function setSelectedBreed(breed) {
  return {
    type: ActionType.SET_SELECTED_BREED,
    breed,
  };
}
export function addToCart(cart) {
  return {
    type: ActionType.ADD_TO_CART,
    cart,
  };
}
export function loadImage(breedName) {
  return function (dispatch) {
    axios
      .get(`https://dog.ceo/api/breed/${breedName}/images/random`)
      .then((res) => {
        dispatch(loadImageSuccess(res.data.message));
      })
      .catch((error) => {
        dispatch(loadImageFailure(error));
      });
  };
}

const apiActions = (breedName) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `https://dog.ceo/api/breed/${breedName}/images/random`
      );

      const { message } = res.data;
      dispatch({ type: "API", payload: { breedName, message } });
      // const res =await fetch(`https://dog.ceo/api/breed/${breedName}/images`)
      // console.log(`Fetch ${res}`)
    } catch (error) {
      console.log("error", error);
    }
  };
};
export default apiActions;
