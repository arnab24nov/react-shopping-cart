import React from "react";
import SignIn from "./SignIn";
import MainLayout from "./MainLayout";
import { useAppSelector } from "../utils/appStore";

const Body: React.FC = () => {
  const status = useAppSelector((item) => item.signInStat.stat);

  return <>{status ? <MainLayout /> : <SignIn />}</>;
};

export default Body;
