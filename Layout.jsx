import { useEffect } from "react";
import { useNavigate } from "react-router";
import LogoutButton from "./LogoutButton";

const Layout = (props) => {
  console.log(props);
  return (
    <>
      {props.children}
      <LogoutButton />
    </>
  );
};

export default Layout;
