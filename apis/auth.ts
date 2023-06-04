import { loginPayload, signUpPayload } from "@/model/auth";
import axiosClient from "./axiosClient";

export const auth = {
  signUp: (payload: signUpPayload) => {
    return axiosClient.post("/api/signup", payload);
  },
  
  login: (payload: loginPayload) => {
    return axiosClient.post("/api/login", payload);
  },
};
