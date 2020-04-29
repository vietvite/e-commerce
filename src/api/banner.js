import http from "./http";

export const BannerService = {
  all: () => http().get('/banner')
}