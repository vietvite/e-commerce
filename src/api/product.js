import http from './http'

const ProductService = {
  findById: id => http().get(`/product/${id}`),
  findByTitle: title => http().get(`/product?search=${title}`)
}

export default ProductService