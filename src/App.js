import { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Menu, User, Package, Shield, Settings, Bell, Globe, LogOut, Home } from "lucide-react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


export default function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);
  const menuItems = [
    { name: "Phê duyệt yêu cầu", icon: <Home />, path: "/home" },
    { name: "Người dùng", icon: <Package />, path: "/users" },
    { name: "Sản phẩm", icon: <Shield />, path: "/products" },
    { name: "Khách hàng", icon: <User />, path: "/customers" },
    { name: "Cấu hình", icon: <Settings />, path: "/settings" },];

  return (
    <Router>
      <div className="dashboard-container d-flex">
        <aside className={`sidebar ${collapsed ? "collapsed" : "expanded"}`}>
          <div className="sidebar-header d-flex justify-content-between align-items-center">
            <img src="" className="App-logo" alt="logo"></img>
            <Button variant="light" onClick={() => setCollapsed(!collapsed)}><Menu /></Button>
          </div>
          <nav className="sidebar-menu mt-3">
            {menuItems.map((item, index) => (
              <Link key={index} to={item.path} className="sidebar-link d-block text-decoration-none">
                <button variant="light" className="sidebar-button d-flex align-items-center gap-2 w-100">
                  {item.icon}
                  {!collapsed && item.name}
                </button>
              </Link>
            ))}
          </nav>
          <div className="sidebar-footer mt-auto border-top pt-3 d-flex flex-column gap-2">
            <Button variant="light" className="sidebar-button d-flex align-items-center gap-2">
              <Bell /> {!collapsed && "Thông báo"}
            </Button>
            <Button variant="light" className="sidebar-button d-flex align-items-center gap-2">
              <Globe /> {!collapsed && "Ngôn ngữ"}
            </Button>
            <Button variant="light" className="sidebar-button d-flex align-items-center gap-2">
              <LogOut /> {!collapsed && "Tài khoản"}
            </Button>
          </div>
        </aside>
      </div>
    </Router>
  );
}
