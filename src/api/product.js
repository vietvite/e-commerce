import http from "./http";

const ProductService = {
  findById: (id) => http().get(`/product/${id}`),
  findByTitle: (title) => http().get(`/product?search=${title}`),
  getHomeProductSection: () => http().get("/product/home"),
  getProductByCategory: (categoryId) =>
    http().get(`/product?categoryId=${categoryId}`),
  loadMore: (categoryId, page) =>
    http().get(`/product?categoryId=${categoryId}&page=${page}`),
};

export default ProductService;
