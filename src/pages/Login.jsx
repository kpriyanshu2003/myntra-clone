import React from "react";
import Main from "../components/Login/Main";
import Navbar from "../components/DefNavbar";

export default function Login() {
  return (
    <div>
      <Navbar profile={false} />
      <Main />
    </div>
  );
}
