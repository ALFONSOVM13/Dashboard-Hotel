import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import foodsReducer from "./Foods/Reducers/FoodsReducer";
import roomsReducer from "./Rooms/Reducers/RoomsReducer";
import reservationsReducer from "./Reservations/Reducers/ReservationsReducer";
import roomTypesReducer from "./RoomTypes/Reducers/RoomsTypesReducer";
import usersReducer from "./Users/Reducers/UsersReducer";
import sessionReducer from "./Session/Reducers/SessionReducer";
import offersReducer from "./Offers/Reducers/OffersReducer";
import servicesReducer from "./Services/Reducers/serviceReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  foodsReducer,
  roomsReducer,
  reservationsReducer,
  roomTypesReducer,
  usersReducer,
  sessionReducer,
  offersReducer,
  servicesReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
