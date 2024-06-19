import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function College() {
  return (
    <div>
      This is the College Component
      <br />
      <br />
      <ul>
        <li>
          <NavLink to="teacher">Teacher</NavLink>
        </li>
        <li>
          <NavLink to="student">Student</NavLink>
        </li>
      </ul>
      {/* To populate the data of nested routes, we use Outlet */}
      <Outlet />
    </div>
  );
}
