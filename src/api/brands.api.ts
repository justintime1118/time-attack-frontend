import { webClient } from ".";

async function getBrands() {
  const response = await webClient.get("/brands");
  const result = response.data.result;
  return result;
}

async function getProductsByBrand(brandId: number) {
  const response = await webClient.get(`/brands/${brandId}`);
  const result = response.data.result;
  return result;
}

const brands = {
  getBrands,
  getProductsByBrand,
};

export default brands;
