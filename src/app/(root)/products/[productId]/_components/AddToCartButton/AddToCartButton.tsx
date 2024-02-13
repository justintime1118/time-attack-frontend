"use client";

import { addItem } from "@/redux/slices/cart.slice";
import { useAppDispatch } from "@/redux/store";
import { Product } from "@/types/Product.type";

interface AddToCartButtonProps {
  product: Product;
}

function AddToCartButton({ product: product }: AddToCartButtonProps) {
  const dispatch = useAppDispatch();
  const handleClickButton = () => {
    const action = addItem(product);
    dispatch(action);
  };

  return (
    <div className="text-sm bg-gray-800 hover:bg-gray-700 text-white font-bold py-1.5 px-2 rounded-md focus:outline-none inline-block min-w-max">
      <button onClick={handleClickButton}>장바구니에 담기</button>
    </div>
  );
}

export default AddToCartButton;
