import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import Dals from "./components/Dals/Dals";
import Masalas from "./components/Masalas/Masalas";
import Oils from "./components/Oils/Oils";
import Contact from "./components/Contact/Contact";
// import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
// import AddToCart from "./components/AddToCart/AddToCart.jsx";
import HomePage from "./views/home-page/HomePage.jsx";
import App from "./App.jsx";
import CartPage from "./views/cart-page/CartPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomePage />} />
      <Route path="/dals" element={<Dals />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  )
);

export default router;
