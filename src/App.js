import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AccountTable from "./components/account/AccountTable";
import Authorization from "./components/account/control/Authorization";
import ListAcc from "./components/account/control/ListAcc";
import DashBoard from "./components/dashboard/DashBoard";
import HomePage from "./components/Home/HomePage";
import ProductsPage from "./components/Product/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoard />}>

          <Route path="/home" element={<HomePage />} />

          <Route path="users" element={<AccountTable />}>
            <Route index element={<Navigate to ="/users/list" replace/>}/>
            <Route path="/users/list" element={<ListAcc />} />
            <Route path="/users/author" element={<Authorization S/>}/>
          </Route>

          <Route path="/products" element={<ProductsPage />} />
          
          {/* <Route path="customers" element={<CustomersPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="notification" element={<NotificationPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;