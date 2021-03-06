import axios from "axios";

export const BASE_URL = "https://localhost:44373/api/";
export const IMAGE_URL = "https://localhost:44373/images/";

export const END_POINTS = {
  AUTH_LOGIN: "auth/login",
  AUTH_REGISTER: "auth/register/",
  AUTH_CONFIRM_EMAIL: "auth/confirmemail",
  AUTH_FORGET_PASSWORD: "auth/forgetpassword",
  AUTH_RESET_PASSWORD: "auth/restpassword",
  USER_MEALS: "meals/mymeals",
  ADD_MEAL: "meals/addmeal",
  DELETE_MEAL: "meals/deletemeal/",
  UPDATE_MEAL: "meals/editmeal/",
  ADD_REVIEW: "review/add",
  GET_USERS: "admin/u/users",
  GET_USERS_MANAGER: "manager/users/all",
  GET_MANAGERS: "admin/u/managers",
  ADD_MANAGER: "admin/addmanager",
  GET_REVIEWS: "review/all",
  DELETE_USER_MANAGER: "manager/users/delete/",
  DELETE_MANAGER_USER: "admin/u/delete/",
  GET_USER_PROFILE: "profile/authuser",
  CHANGE_PASSWORD: "profile/authuser/changepassword",
  GET_USER_INFO: "profile/authuser",
  EDIT_PROFILE: "profile/authuser/editprofile",
};

export const authAxois = axios.create({
  BASE_URL: BASE_URL,
  headers: {
    Authorization: "Bearer " + localStorage.getItem("L_T"),
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  },
});

export const createApiEndPoints = (endPoint) => {
  let url = BASE_URL + endPoint;
  return {
    fetch: () => authAxois.get(url),
    create: (newRecord) => authAxois.post(url, newRecord),
    delete: () => authAxois.delete(url),
    update: (editedRecord) => authAxois.put(url, editedRecord),
  };
};
