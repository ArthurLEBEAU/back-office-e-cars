import React from "react";
import ReactDOM from "react-dom/client";
import "./utils/css/libs.css";
import "antd/dist/reset.css";
import frFR from "antd/es/locale/fr_FR";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import { store } from "./redux/app/store";
import { BrowserRouter } from "react-router-dom";
import App from "./pages/App";
import { theme } from "@utils/constants/theme";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ConfigProvider locale={frFR} theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ConfigProvider>
  </React.StrictMode>
);
