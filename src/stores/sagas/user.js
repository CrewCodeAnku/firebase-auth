import { all, put, takeLatest } from "redux-saga/effects";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css/animate.min.css";

import { LOGIN, loginSuccess } from "../actions/user.actions.types";

import * as Effects from "redux-saga/effects";
import { signIn } from "../../firebase/auth";
const call = Effects.call;

function* login({ payload: { data, callback } }) {
  try {
    const response = yield call(signIn, { ...data });
    let user = response.user;
    if (!user) throw new Error("Error while log in.");
    yield put(loginSuccess(user));
    if (callback) callback({ success: true, data: null });
  } catch (error) {
    if (callback) callback({ success: false, data: null });
    store.addNotification({
      title: "Error",
      message: error.message,
      type: "danger",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 2000,
        onScreen: true,
      },
    });
  }
}

function* User() {
  yield all([takeLatest(LOGIN, login)]);
}

export default User;
