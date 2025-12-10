import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="Header">
      <Link to={"/"}>Home</Link>
      <Link to={"/About"}>About</Link>
      <Link to={"/Service"}>Service</Link>
      <Link to={"/Contact"}>Contact</Link>
    </div>
  );
}
