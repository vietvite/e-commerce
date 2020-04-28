import http from "./http";

export const AuthService = {
  login: ({ email, password }) => http().post('/login', { email, password }),
  signup: ({ email, fullname, password, phoneNumber, role = "" }) => http().post('/signup', { email, fullname, password, phoneNumber, role }),
};
