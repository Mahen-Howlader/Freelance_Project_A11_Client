import { Outlet } from "react-router-dom";
import Nav from "../component/Nav";
import Footer from "../component/Footer";

function Layout() {
  return (
    <div className="bg-[#F5F5F5]  prompt-all">
      <div className="">
        <Nav></Nav>
        <div className="px-3 md:px-0 container mx-auto min-h-[calc(100vh-284px)] ">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Layout;
