import React from "react";
import { Link, Outlet } from "react-router-dom";
export default function Service() {
  return (
    <div>
      <h2>Srevice component</h2>
      <div>
        <Link to={"Web Application"}>Web application</Link>
        <Link to={"App Application"}>App application</Link>
        <Outlet />
      </div>
    </div>
  );
}
