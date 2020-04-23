import http from "./http";

const ProductService = {
  findById: (id) => http().get(`/product/${id}`),
  findByTitle: (title) => http().get(`/product?search=${title}`),
  getHomeProductSection: () => http().get("/product/home"),
  getProductByCategory: (categoryId) =>
    http().get(`/product?categoryId=${categoryId}`),
  loadMore: (categoryId, page, { sortBy, sortDirection }) =>
    http().get(
      `/product?categoryId=${categoryId}&page=${page}&sortBy=${sortBy}&sortDirection=${sortDirection}`
    ),
  sortProduct: (categoryId, { sortBy, sortDirection }) =>
    http().get(
      `/product?categoryId=${categoryId}&sortBy=${sortBy}&sortDirection=${sortDirection}`
    ),
};

export default ProductService;
