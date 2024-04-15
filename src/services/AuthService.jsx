import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import store from "../redux/store";
import {
  SET_SESSION,
  UNSET_SESSION,
} from "../redux/Session/Actions/actionsTypes";

export async function isLogged() {
  return new Promise((resolve, reject) => {
    const token = Cookies.get("token");
    if (!token) return resolve(false);

    try {
      const { username, email, role, exp } = jwtDecode(token);

      if (exp && exp < Math.floor(Date.now() / 1000)) {
        Cookies.remove("token");
        store.dispatch({ type: UNSET_SESSION });
        return resolve(false);
      } else if (username && username !== "") {
        store.dispatch({
          type: SET_SESSION,
          payload: { username, email, role },
        });
        return resolve(true);
      }
    } catch (err) {
      console.log("Token is invalid", err);
      return reject();
    }
  });
}

export function Logout() {
  return new Promise((resolve, reject) => {
    const token = Cookies.get("token");

    if (token === undefined) resolve(store.dispatch({ type: UNSET_SESSION }));

    try {
      const { username } = jwtDecode(token);

      if (username && username !== "") {
        Cookies.remove("token");
        return resolve(store.dispatch({ type: UNSET_SESSION }));
      }
      Cookies.remove("token");
      return resolve(false);
    } catch (err) {
      console.log("Token is invalid", err);
      Cookies.remove("token");
      return reject(resolve(store.dispatch({ type: UNSET_SESSION })));
    }
  });
}
