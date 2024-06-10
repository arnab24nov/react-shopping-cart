import React, { useEffect, useState } from "react";
import ShoppingCard from "./ShoppingCard";

interface Items {
  id: number;
  title: string;
  price: number;
  description: string;
  catagory: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ShoppingPage: React.FC = () => {
  const [items, setItems] = useState<Items[]>([]);
  useEffect(() => {
    getShoppingItems();
  }, []);

  const getShoppingItems = async () => {
    const response = await fetch("https://fakestoreapi.com/products/");
    const data = await response.json();
    setItems(data);
  };
  return (
    <div className="h-full pt-28 pb-6 px-6 flex justify-center items-center flex-wrap">
      {items.map((item) => (
        <ShoppingCard key={item.id} data={item} />
      ))}
    </div>
  );
};

export default ShoppingPage;
