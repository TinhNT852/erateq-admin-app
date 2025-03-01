import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import AddVersionForm from "./form/AddVersionForm";

import CloseIcon from "../../assets/icons/ArrowLeft.png";
import CustomIcon from "../../assets/icons/Custom.png";
import DeleteIcon from "../../assets/icons/Delete.png";
import DownloadIcon from "../../assets/icons/Download.png";
import EditIcon from "../../assets/icons/Edit.png";
import FolderIcon from "../../assets/icons/Folder.png";
import GreenAddIcon from "../../assets/icons/GreenAdd.png";
import InfoIcon from "../../assets/icons/Info.png";
import MoreIcon from "../../assets/icons/More.png";
import RedDeleteIcon from "../../assets/icons/RedDelete.png";
import SaveIcon from "../../assets/icons/Save.png";
import SearchIcon from "../../assets/icons/Search.png";
import UploadIcon from "../../assets/icons/Upload.png";
import AddIcon from "../../assets/icons/WhiteAdd.png";

import "./ProductStyles.css";

const ProductPage = () => {
  const [productId, setProductId] = useState("");
  const [currentVersion, setCurrentVersion] = useState("");
  const [productName, setProductName] = useState("");
  const [shortName, setShortName] = useState("");
  const [productNote, setProductNote] = useState("");
  const [showAddVersionForm, setShowAddVersionForm] = useState(false);

  const apps = [
    { name: "ERA ACC", version: "1.0.2" },
    { name: "ERA FIX ASSETS", version: "1.0.2" },
    { name: "ERA PMS", version: "1.0.2" },
    { name: "ERA F&B", version: "1.5.1" },
    { name: "ERA IPTV", version: "1.0.0" },
    { name: "ERA CRM", version: "1.0.0" },
    { name: "ERA SYSTEM", version: "1.0.0" },
    { name: "ERA INVENTORY", version: "1.0.0" },
    { name: "ERA PURCHASING", version: "1.1.0" },
  ];

  const [tableData, setTableData] = useState([
    {
      id: 1,
      name: "acc-ver1.0.2.rar",
      version: "1.0.2",
      date: "02/10/2024",
      user: "Đào Xuân Hòa",
      changeNote: "Bổ sung tính năng X",
      checked: true,
      size: "10.09 Mb",
    },
    {
      id: 2,
      name: "fnb-ver2.0.rar",
      version: "2.0",
      date: "05/09/2024",
      user: "Nguyễn Mạnh Hùng",
      changeNote: "Regular text column",
      checked: false,
      size: "8.5 Mb",
    },
  ]);

//================= Menu ===================
  const [openMenuRowId, setOpenMenuRowId] = useState(null);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

//================= Detail panel ===============
  const [selectedVersion, setSelectedVersion] = useState(null);

  // ========== Phân trang ==========
  const rowsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = tableData.length;

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = tableData.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(totalItems / rowsPerPage);

  // ========== Các hàm xử lý nút ==========
  const handleDeleteSoftware = () => {
    setProductId("");
    setCurrentVersion("");
    setProductName("");
    setShortName("");
    setProductNote("");
  };

  const handleSaveChanges = () => {
    alert("Lưu thay đổi!");
  };

  const handleCustomAction = () => {
    alert("Custom action!");
  };
  const handleDeleteVersion = () => {
    alert("Xóa phiên bản!");
  };
  const handleAddVersion = () => {
    setShowAddVersionForm(true);
  };
  const handleEditVersion = () => {
    alert("Logic chỉnh sửa phiên bản");
  };
  const handleUploadVersion = () => {
    alert("Logic tải lên phiên bản");
  };
  const handleDownloadVersion = () => {
    alert("Logic tải xuống phiên bản!");
  };

  const handleToggleMenu = (e, rowId) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    
    setMenuPosition({ x: rect.left, y: rect.bottom });
    setOpenMenuRowId((prev) => (prev === rowId ? null : rowId));
  };
  const handleDetailMenu = (rowId) => {
    const record = tableData.find((row) => row.id === rowId);
    if (record) {
      setSelectedVersion(record);
    }
    setOpenMenuRowId(null);
  };
  const handleDownloadMenu = (rowId) => {
    alert(`Tải xuống phiên bản: ${rowId}`);
    setOpenMenuRowId(null);
  };
  const handleDeleteMenu = (rowId) => {
    alert(`Xoá phiên bản: ${rowId}`);
    setOpenMenuRowId(null);
  };

  useEffect(() => {
    const handleDocClick = () => setOpenMenuRowId(null);
    document.addEventListener("click", handleDocClick);
    return () => {
      document.removeEventListener("click", handleDocClick);
    };
  }, []);

  const handleCloseDetail = () => {
    setSelectedVersion(null);
  };
  const handleCheckboxChange = (id) => {
    setTableData((prevData) =>
      prevData.map((row) =>
        row.id === id ? { ...row, checked: !row.checked } : row
      )
    );
  };
  const handleToggleAll = () => {
    const anyChecked = tableData.some((row) => row.checked);
    setTableData((prevData) =>
      prevData.map((row) => ({ ...row, checked: !anyChecked }))
    );
  };

  return (
    <div className="product-container">
      {/* ======== SIDEBAR ỨNG DỤNG ======== */}
      <aside className="app-sidebar">
        <h2>Ứng dụng</h2>
        <div className="search-box">
          <img src={SearchIcon} alt="Search" className="search-icon" />
          <input type="text" placeholder="Tìm kiếm" />
        </div>
        <button className="btn-add-app">
          <img src={AddIcon} alt="Add" className="btn-icon" />
          Thêm ứng dụng
        </button>

        {/* Danh sách ứng dụng */}
        <ul className="app-list">
          {apps.map((app) => (
            <li key={app.name}>
              <div className="app-info">
                <img src={FolderIcon} alt="Folder" className="folder-icon" />
                <span className="app-name">{app.name}</span>
              </div>
              <span className="app-version">Phiên bản {app.version}</span>
            </li>
          ))}
        </ul>
      </aside>

      {/* ======== MAIN CONTENT (THÔNG TIN + DANH SÁCH) ======== */}
      <main className="main-content-product">
        {/* ======== Thông tin sản phẩm ======== */}
        <div className="product-info-container">
          <div className="info-header">
            <h2>Thông tin sản phẩm</h2>
            <div className="info-actions">
              <button className="btn-delete" onClick={handleDeleteSoftware}>
                <img src={DeleteIcon} alt="Delete" className="btn-icon" />
                Xóa phần mềm
              </button>
              <button className="btn-save" onClick={handleSaveChanges}>
                <img src={SaveIcon} alt="Save" className="btn-icon" />
                Lưu thay đổi
              </button>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>
                ID Sản Phẩm <span className="required">*</span>
              </label>
              <input
                type="text"
                placeholder="Nhập ID sản phẩm"
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>
                Phiên Bản Hiện Tại <span className="required">*</span>
              </label>
              <input
                type="text"
                placeholder="Nhập phiên bản (vd: 1.0.5, 2.0.0, ...)"
                value={currentVersion}
                onChange={(e) => setCurrentVersion(e.target.value)}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>
                Tên Sản Phẩm <span className="required">*</span>
              </label>
              <input
                type="text"
                placeholder="Nhập tên sản phẩm"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>
                Tên Sản Phẩm Rút Gọn <span className="required">*</span>
              </label>
              <input
                type="text"
                placeholder="Nhập tên SP rút gọn"
                value={shortName}
                onChange={(e) => setShortName(e.target.value)}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>
                Ghi Chú Sản Phẩm <span className="required">*</span>
              </label>
              <textarea
                placeholder="Nhập ghi chú"
                value={productNote}
                onChange={(e) => setProductNote(e.target.value)}
                rows="2"
              ></textarea>
            </div>
          </div>
        </div>

        {/* ======== Danh sách phiên bản ======== */}
        <div className="version-list-container">
          <div className="version-list-header">
            <h2>Danh sách phiên bản</h2>
            <div className="version-list-actions">
              <button className="btn-custom-version" onClick={handleCustomAction}>
                <img src={CustomIcon} alt="Custom" className="btn-icon" />
              </button>
              <button className="btn-delete-version" onClick={handleDeleteVersion}>
                <img src={RedDeleteIcon} alt="Delete" className="btn-icon" />
                Xóa phiên bản
              </button>
              <button className="btn-add-version" onClick={handleAddVersion}>
                <img src={GreenAddIcon} alt="Add" className="btn-icon" />
                Thêm phiên bản
              </button>
              <AddVersionForm
                visible={showAddVersionForm}
                onClose={() => setShowAddVersionForm(false)}
              />
            </div>
          </div>
          <div className="table-container">
            <table className="styled-table">
              <thead>
                <tr>
                  <th className="checkbox-column">
                    <input type="checkbox" onChange={handleToggleAll} />
                  </th>
                  <th>Tên</th>
                  <th>Phiên Bản</th>
                  <th>Ngày</th>
                  <th>Người Dùng</th>
                  <th>Ghi Chú Thay Đổi</th>
                  <th>Hành Động</th>
                </tr>
              </thead>
              <tbody>
                {currentRows.map((row) => (
                  <tr key={row.id} >
                    <td
                      className="checkbox-column"
                      onClick={(e) => e.stopPropagation()} // Tránh click row
                    >
                      <input
                        type="checkbox"
                        checked={row.checked}
                        onChange={() => handleCheckboxChange(row.id)}
                      />
                    </td>
                    <td>
                      <strong>{row.name}</strong>
                    </td>
                    <td>{row.version}</td>
                    <td>{row.date}</td>
                    <td>{row.user}</td>
                    <td>{row.changeNote}</td>
                    <td id="more" onClick={(e) => e.stopPropagation()}>
                      <button
                        className="btn-more"
                        onClick={(e) => handleToggleMenu(e, row.id)}
                      >
                        <img src={MoreIcon} alt="More" className="btn-more-icon" />
                      </button>
                      {openMenuRowId === row.id &&
                        createPortal(
                          <div
                            className="menu-popover"
                            style={{
                              top: menuPosition.y,
                              left: menuPosition.x,
                            }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <div className="menu-item" onClick={() => handleDetailMenu(row.id)}>
                              <img src={InfoIcon} alt="Detail" className="menu-icon" />
                              Chi tiết
                            </div>
                            <div className="menu-item" onClick={() => handleDownloadMenu(row.id)}>
                              <img src={DownloadIcon} alt="Download" className="menu-icon" />
                              Tải xuống
                            </div>
                            <hr />
                            <div
                              className="menu-item menu-delete"
                              onClick={() => handleDeleteMenu(row.id)}
                            >
                              <img src={RedDeleteIcon} alt="Delete" className="menu-icon" />
                              Xoá
                            </div>
                          </div>,
                          document.body
                        )}
                    </td>
                  </tr>
                ))}
                {currentRows.length === 0 && (
                  <tr>
                    <td colSpan="7" style={{ textAlign: "center" }}>
                      Không có dữ liệu
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Phân trang */}
          <div className="pagination">
            <div className="pagination-buttons">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                ❮
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => setCurrentPage(index + 1)}
                  className={currentPage === index + 1 ? "active" : ""}
                >
                  {index + 1}
                </button>
              ))}
              <button
                disabled={currentPage === totalPages || totalPages === 0}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                ❯
              </button>
            </div>
            <div className="page-info-container">
              <div className="page-info">
                <span>
                  {`${indexOfFirstRow + 1} - ${Math.min(
                    indexOfLastRow,
                    tableData.length
                  )} trong tổng số ${tableData.length} mục`}
                </span>
              </div>
              <div className="page-size">
                <select onChange={(e) => setCurrentPage(1)}>
                  <option value="8">8</option>
                  <option value="16">16</option>
                  <option value="32">32</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ======== PANEL CHI TIẾT PHIÊN BẢN BÊN PHẢI ======== */}
      {selectedVersion && (
        <aside className="version-detail-panel">
          <div className="detail-panel-header">
            <div className="header-top">
              <button className="btn-action btn-closes" onClick={handleCloseDetail}>
                <img src={CloseIcon} alt="Close" />
              </button>
              <h2>Chi tiết phiên bản</h2>
            </div>
            <div className="header-bottom">
              <button className="btn-action btn-edit btn-size" onClick={handleEditVersion}>
                <img src={EditIcon} alt="Edit" />
              </button>
              <button className="btn-action btn-upload btn-size" onClick={handleUploadVersion}>
                <img src={UploadIcon} alt="Upload" />
              </button>
              <button className="btn-action btn-download btn-size" onClick={handleDownloadVersion}>
                <img src={DownloadIcon} alt="Download" />
              </button>
              <button className="btn-action btn-delete btn-size" onClick={handleDeleteVersion}>
                <img src={DeleteIcon} alt="Delete" />
              </button>
            </div>
          </div>
          <div className="version-detail-content">
            <div className="detail-icon">
              <img src={FolderIcon} alt="Folder" />
            </div>
            <h4>{selectedVersion.name}</h4>
            <p className="detail-productVersion">Phiên bản {selectedVersion.version}</p>

            <div className="detail-info">
              <div>
                <strong>Tên tệp:</strong> {selectedVersion.name}
              </div>
              <div>
                <strong>Phiên bản sản phẩm:</strong> {selectedVersion.version}
              </div>
              <div>
                <strong>Kích thước:</strong> {selectedVersion.size}
              </div>
              <div>
                <strong>Ngày tạo:</strong> {selectedVersion.date}
              </div>
              <div>
                <strong>Người tạo:</strong> {selectedVersion.user}
              </div>
              <div>
                <strong>Ghi chú thay đổi:</strong> {selectedVersion.changeNote}
              </div>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
};

export default ProductPage;