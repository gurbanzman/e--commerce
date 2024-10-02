// import React modes
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import App
import App from "./App.jsx";

// import prime react
import { PrimeReactProvider } from "primereact/api";

// import translation library: i18n
import "./i18n/i18n.js";

// import css
import "./styles/main.css";
import "./styles/icomoon/style.css";
import 'swiper/css';
import 'swiper/css/virtual';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// import fonts
import "./styles/poppins/Poppins-Regular.ttf";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <PrimeReactProvider>
        <App />
      </PrimeReactProvider>
    </BrowserRouter>
  </StrictMode>
);
