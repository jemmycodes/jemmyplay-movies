import { Outlet } from "react-router-dom";
import { Navigation } from ".";
import { GlobalStyles } from "../styles/styles.styled";

function Root() {
  return (
    <main>
      <GlobalStyles />
      <Navigation />
      <Outlet />
    </main>
  );
}

export default Root;
