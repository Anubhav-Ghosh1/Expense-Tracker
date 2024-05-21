import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { GlobalStyle } from "./styles/GlobalStyle";
import { GlobalProvide } from "./context/globalContext";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalProvide>
      <Auth0Provider
        domain="dev-em1esvfp8mnby7c3.us.auth0.com"
        clientId="P9abvu4Pd16QJbnEO99yUXNUwyWpMf44"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}>
        <App />
      </Auth0Provider>
    </GlobalProvide>
  </React.StrictMode>
);
