import { Link, Outlet } from "react-router-dom";
import Header from "./Header/header";
const SharedLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
export default SharedLayout;
