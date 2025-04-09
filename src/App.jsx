import React, { useEffect, useState } from "react";
import Header from "./component/header";
import { Outlet } from "react-router-dom";


export default function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>


  );
}
