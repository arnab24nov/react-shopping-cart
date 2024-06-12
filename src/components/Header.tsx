import React, { useEffect, useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { useAppDispatch, useAppSelector } from "../utils/appStore";
import ShoppingItems from "./ShoppingItems";
import { toggleStat } from "../utils/signinSlice";

const Header: React.FC = () => {
  const [isCartVisible, setIsCartVisible] = useState<boolean>(false);
  const [shouldRender, setShouldRender] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isCartVisible) {
      setShouldRender(true);
    }
  }, [isCartVisible]);

  const cartItems = useAppSelector((cart) => cart?.cart?.items);
  const totalPrice = cartItems
    .map((item) => item.price * item.count)
    .reduce((acc, cur) => acc + cur, 0)
    .toFixed(2);

  const handleCartVisible = () => {
    if (!isCartVisible) {
      setIsCartVisible(true);
    } else {
      setIsCartVisible(false);
    }
  };

  const handleSignOut = () => {
    dispatch(toggleStat());
  };

  const onAnimationEnd = () => {
    if (!isCartVisible) {
      setShouldRender(false);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center px-6  fixed w-full z-50 shadow-custom-black bg-fuchsia-500 ">
        <img
          className="w-24 rounded-full"
          src="https://image.freepik.com/free-vector/online-shop-logo-template_59362-81.jpg"
          alt="logo"
        />
        <div className="flex justify-between items-center">
          <LiaSignOutAltSolid
            size={40}
            color="white"
            className="mr-8 cursor-pointer hover:fill-fuchsia-800 active:scale-90"
            onClick={handleSignOut}
          />
          <BsCart4
            size={40}
            color="white"
            className="cursor-pointer hover:fill-fuchsia-800 active:scale-90"
            onClick={handleCartVisible}
          />
        </div>
      </div>
      {shouldRender && (
        <div
          className={`w-[450px] min-h-96 max-h-[500px] fixed top-20 right-0 bg-white z-50 overflow-y-auto shadow-custom-black rounded-lg ${
            isCartVisible ? "animate-slideIn" : "animate-slideOut"
          }`}
          onAnimationEnd={onAnimationEnd}
        >
          <div className="font-semibold underline text-center text-[20px] mb-4">
            My Cart
          </div>
          {cartItems.length > 0 ? (
            <div>
              {cartItems.map((item, index) => (
                <ShoppingItems key={index} itemDetails={item} />
              ))}
              <div className=" mb-4 py-4 border-t-2 border-black p-3 font-semibold">
                Total Price: ${totalPrice}
              </div>
            </div>
          ) : (
            <p className="flex justify-center items-center mt-40 text-[18px]">
              The Cart is empty now.
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default Header;
