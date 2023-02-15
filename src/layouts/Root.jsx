import { Outlet } from "react-router-dom";
import { Navigation, Footer } from ".";

function Root() {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
}

export default Root;
