import * as ActionType from "../actions/actionTypes";
const initState = {
  allUser: [],
  cartUser: [],
  selectedBreed: "",
  cart: [],
};
const breedReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionType.GET_BREED_SUCESS:
      return { ...state, image: action.image };
    case ActionType.GET_BREED_FAILURE:
      return { ...state, error: action.error };
    case ActionType.SET_SELECTED_BREED:
      return { ...state, selectedBreed: action.breed };
    case ActionType.ADD_TO_CART:
      return { ...state, cart: [...action.cart] };
    case "API":
      return { ...state, allUser: action.payload };

    case "To_Cart":
      const check = state.cartUser.find(
        (us) => us.breedName === action.payload.breedName
      );

      if (!check) {
        return { ...state, cartUser: [...state.cartUser, action.payload] };
      } else {
        return state;
      }

    case "DEL":
      const newItem = state.cartUser.filter(
        (us) => us.message !== action.payload
      );

      return { ...state, cartUser: newItem };

    default:
      return state;
  }
};
export default breedReducer;
