import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="425249806588-5ctqedf0eulqscipr770fh3vfvhc96e1.apps.googleusercontent.com">
      <App />
  </GoogleOAuthProvider>
);
