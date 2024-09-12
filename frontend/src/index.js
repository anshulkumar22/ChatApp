import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import ChatProvider from "./Context/ChatProvider.js";
const root = document.getElementById("root");

const app = (
  <BrowserRouter>
    <ChatProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ChatProvider>
  </BrowserRouter>
);

ReactDOM.createRoot(root).render(app);
