import http from "./http";

export const CategoryService = {
  all: () => http().get('/category')
}