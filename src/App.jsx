import { Outlet } from "react-router";
import "./App.css";
import Layout from "./Layout.jsx";
import NewHeader from "./components/Header/NewHeader.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div className="app">
      <NewHeader />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
