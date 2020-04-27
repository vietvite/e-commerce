import http from "./http";
import { infinityNumber } from "../commons";

const ProductService = {
  getProductOfShop: () => http().get("/product/shop"),
  findById: (id) => http().get(`/product/${id}`),
  getHomeProductSection: () => http().get("/product/home"),
  addProduct: (listProduct) => http().post("/product", listProduct),
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
