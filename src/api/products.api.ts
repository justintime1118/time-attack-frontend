import { webClient } from ".";

async function getProducts() {
  const response = await webClient.get("/products");
  const result = response.data.result;
  return result;
}

async function getProduct(id: number) {
  const response = await webClient.get(`/products/${id}`);
  const result = response.data.result;
  return result;
}

const products = {
  getProducts,
  getProduct,
};

export default products;
