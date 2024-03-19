import {
  GET_ALL_FOODS,
  DELETE_FOOD,
  PUT_FOOD,
  POST_FOOD,
} from "../Actions/actionsTypes";

const initialState = {
  allFoods: [],
};

const foodsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_FOODS:
      return {
        ...state,
        allFoods: [...payload],
      };

    case DELETE_FOOD:
      return {
        ...state,
        allFoods: [...state.allFoods.filter((food) => food.id !== payload)],
      };

    case PUT_FOOD:
      return {
        ...state,
        allFoods: payload,
      };

    case POST_FOOD:
      return {
        ...state,
        allFoods: payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default foodsReducer;
