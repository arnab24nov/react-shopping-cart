import React from "react";
import { useAppDispatch } from "../utils/appStore";
import { addItem, removeItem } from "../utils/cartSlice";

interface ShoppingItemsProps {
  itemDetails: {
    title: string;
    price: number;
    image: string;
    count: number;
  };
}

const ShoppingItems: React.FC<ShoppingItemsProps> = ({ itemDetails }) => {
  const { title, price, image, count } = itemDetails;
  const dispatch = useAppDispatch();
  return (
    <div className="flex justify-between items-center p-3 border-b border-zink-500 min-h-[130px]">
      <div className="grow px-3">
        <div className=" font-bold text-[14px] mb-2">{title}</div>
        <div className="flex justify-between items-center mb-2">
          <div className="text-[12px]">price: ${price}</div>
          <div className="text-[12px]">total: ${count * price}</div>
        </div>
        <div className="flex justify-between items-center">
          <button
            className="py-2 px-3 rounded-lg bg-slate-300"
            onClick={() => dispatch(addItem({ title, image, price }))}
          >
            +
          </button>
          <div>{count}</div>
          <button
            className="px-3 py-2 rounded-lg bg-slate-300"
            onClick={() => dispatch(removeItem({ title, image, price }))}
          >
            -
          </button>
        </div>
      </div>
      <img src={image} alt="product_image" className="w-20" />
    </div>
  );
};

export default ShoppingItems;
