import React from "react";
import Dropdown from "./components/Dropdown";
import Admin from "./components/Admin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Customers from "./components/Customers";
import Suppliers from "./components/Suppliers";
import Deliveries from "./components/Deliveries";
import Productspage from "./components/Productspage";
import View from "./components/View";
import Productupdate from "./components/Productupdate";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dropdown />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/customers" element={<Customers />}></Route>
          <Route path="/suppliers" element={<Suppliers />}></Route>
          <Route path="/deliveries" element={<Deliveries />}></Route>
          <Route path="/products" element={<Productspage />}></Route>
          <Route path="/viewproduct" element={<View />}></Route>
          <Route path="/updateproduct" element={<Productupdate/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
