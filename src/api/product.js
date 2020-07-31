import http from "./http";
import { infinityNumber } from "commons";

const ProductService = {
  // Only for seller's queries
  getProductOfShop: () => http().get("/product/shop"),
  deleteById: (productId) => http().post(`/product/delete/${productId}`),
  addProduct: (product) => http().post("/product", product),
  editProduct: (product) => http().post("/product/edit", product),

  // Common queries
  getHomeProductSection: () => http().get("/product/home"),
  findById: (id) => http().get(`/product/${id}`),
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
    http().get(`/product?title=${title}&categoryId=${categoryId}&priceFrom=${priceFrom}&priceTo=${priceTo}&reviewStar=${reviewStar}&sortBy=${sortBy}&sortDirection=${sortDirection}&page=${page}`),
};

export default ProductService;