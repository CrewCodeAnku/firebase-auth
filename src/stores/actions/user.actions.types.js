import { createAction } from "redux-actions";

export const LOGIN = "LOGIN";
export const login = createAction(LOGIN);

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const loginSuccess = createAction(LOGIN_SUCCESS);

export const LOGOUT = "LOGOUT";
export const logout = createAction(LOGOUT);
