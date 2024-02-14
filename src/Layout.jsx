import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import NewHeader from "./components/Header/NewHeader.jsx";

function Layout() {
  return (
    <>
      <NewHeader />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
