import React from "react";
import { addItem } from "../utils/cartSlice";
import { useAppDispatch } from "../utils/appStore";

interface ShoppingCardProps {
  data: {
    title: string;
    price: number;
    description: string;
    image: string;
  };
}

interface AddItemProps {
  title: string;
  price: number;
  image: string;
}

const ShoppingCard: React.FC<ShoppingCardProps> = ({ data }) => {
  const dispatch = useAppDispatch();
  const { title, price, description, image } = data;

  const showDescription = (txt: string) => {
    return txt.length > 200 ? txt.slice(0, 200).concat("...") : txt;
  };
  const showTitle = (txt: string) => {
    return txt.length > 70 ? txt.slice(0, 70).concat("...") : txt;
  };

  const handleAddItem = ({ title, price, image }: AddItemProps) => {
    dispatch(addItem({ title, image, price }));
  };

  return (
    <div className="m-2 w-[350px] h-[450px] rounded-lg shadow-custom-black flex flex-col">
      <div className="p-2 flex-grow">
        <img src={image} alt="item_image" className=" h-52 w-full rounded-lg" />
        <div className="font-semibold my-1">{showTitle(title)}</div>
        <div className="relative group my-2">
          <div className="text-[12px]">{showDescription(description)}</div>
          <div className="absolute hidden group-hover:block bg-black text-white text-xs rounded p-2 w-64 -translate-x-1/2 left-1/2 z-10 mt-1">
            {description}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-8 border-transparent border-b-black"></div>
          </div>
        </div>
        <div className="my-1 font-semibold">${price}</div>
      </div>
      <button
        className=" py-2 cursor-pointer bg-fuchsia-700 text-white rounded-b-lg hover:bg-fuchsia-500 hover:font-semibold active:scale-95"
        onClick={() => handleAddItem({ title, price, image })}
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default ShoppingCard;
