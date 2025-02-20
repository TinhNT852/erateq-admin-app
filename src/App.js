import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AccountTable from "./components/account/AccountTable";
import Authorization from "./components/account/control/Authorization";
import ListAcc from "./components/account/control/ListAcc";
import HomePage from "./components/home/HomePage";
import DashBoard from "./components/navigate/DashBoard";
import ProductsPage from "./components/product/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashBoard />}>
          <Route index element ={<HomePage />} />

<<<<<<< HEAD
{/*hahahahaha */}
=======
{/*Test push*/}
>>>>>>> 95bd5164c06c23d4f127e6352463c0c7eaf19642
          <Route path="/home" element={<HomePage />} />

          <Route path="users" element={<AccountTable />}>
            <Route index element={<Navigate to ="/users/list" replace/>}/>
            <Route path="/users/list" element={<ListAcc />} />
            <Route path="/users/author" element={<Authorization />}/>
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
