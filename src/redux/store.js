import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import foodsReducer from "./Foods/Reducers/FoodsReducer";
import roomsReducer from "./Rooms/Reducers/RoomsReducer";
import reservationsReducer from "./Reservations/Reducers/ReservationsReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  foodsReducer,
  roomsReducer,
  reservationsReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
