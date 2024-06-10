import React from "react";
import "./App.css";
import Header from "./components/Header";
import ShoppingPage from "./components/ShoppingPage";
import { appStore } from "./utils/appStore";
import { Provider } from "react-redux";

const App: React.FC = () => {
  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <ShoppingPage />
      </div>
    </Provider>
  );
};

export default App;
