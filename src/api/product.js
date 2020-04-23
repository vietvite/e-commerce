import http from "./http";
import { infinityNumber } from "../commons";

const ProductService = {
  findById: (id) => http().get(`/product/${id}`),
  // findByTitle: (title) => http().get(`/product?search=${title}`),
  getHomeProductSection: () => http().get("/product/home"),
  // getProductByCategory: (categoryId) =>
  //   http().get(`/product?categoryId=${categoryId}`),
  // loadMore: (categoryId, page, { sortBy, sortDirection }) =>
  //   http().get(
  //     `/product?categoryId=${categoryId}&page=${page}&sortBy=${sortBy}&sortDirection=${sortDirection}`
  //   ),
  // sortProduct: (categoryId, { sortBy, sortDirection }) =>
  //   http().get(
  //     `/product?categoryId=${categoryId}&sortBy=${sortBy}&sortDirection=${sortDirection}`
  //   ),
  getProduct: (
    {
      title = "",
      categoryId,
      priceFrom = 0,
      priceTo = infinityNumber(),
      reviewStar = 0,
    },
    { sortBy = "title", sortDirection = "ascending" },
    page = 1
  ) =>
    http().get(
      `/product?title=${title}&categoryId=${categoryId}&priceFrom=${priceFrom}&priceTo=${priceTo}&reviewStar=${reviewStar}&sortBy=${sortBy}&sortDirection=${sortDirection}&page=${page}`
    ),
};

export default ProductService;
