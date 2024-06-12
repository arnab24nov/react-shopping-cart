import React, { useState } from "react";
import { useAppDispatch } from "../utils/appStore";
import { toggleStat } from "../utils/signinSlice";

const SignIn: React.FC = () => {
  const dispatch = useAppDispatch();
  const [errMsg, setErrMsg] = useState<boolean>(false);
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const id = formData.get("email");
    const pwd = formData.get("password");

    if (id && pwd) {
      dispatch(toggleStat());
      setErrMsg(false);
    } else {
      setErrMsg(true);
    }
  };
  return (
    <div className=" bg-slate-200 h-screen flex justify-center items-center">
      <form
        className=" shadow-custom-black bg-white w-[500px] h-[320px] px-6 py-8 rounded-lg flex flex-col justify-start"
        onSubmit={handleFormSubmit}
      >
        <div className="w-full mb-4">
          <label htmlFor="name" className="block">
            Email Id:
          </label>
          <input
            type="email"
            name="email"
            className="w-full border border-gray-300 p-2 rounded-lg"
          />
        </div>
        <div className="w-full mb-4">
          <label htmlFor="name" className="block">
            Password:
          </label>
          <input
            type="password"
            name="password"
            className="w-full border border-gray-300 p-2 rounded-lg"
          />
        </div>
        <button className=" bg-green-400 p-2 rounded-lg mt-4 w-full">
          Sign In
        </button>
        {errMsg && (
          <div className="text-[12px] text-red-500 my-2">
            Please enter email id and password
          </div>
        )}
      </form>
    </div>
  );
};

export default SignIn;
