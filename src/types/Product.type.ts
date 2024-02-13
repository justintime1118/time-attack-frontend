export type Product = {
  product: {
    id: number;
    name: string;
    imgSrc: string;
    onlineStock: number;
    price: number;
    originalPrice: number;
    deliveryType: string;
    brandId: number;
    brand: {
      id: number;
      nameKr: string;
      nameEn: string;
    };
  };
};
