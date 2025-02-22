import React, { useState } from "react";
import CustomIcon from "../../assets/icons/Custom.png";
import DeleteIcon from "../../assets/icons/Delete.png";
import GreenAddIcon from "../../assets/icons/GreenAdd.png";
import MoreIcon from "../../assets/icons/More.png";
import RedDeleteIcon from "../../assets/icons/RedDelete.png";
import SaveIcon from "../../assets/icons/Save.png";

import "./ProductStyles.css";

const ProductPage = () => {
  // ========== State cho phần "Thông tin sản phẩm" ==========
  const [productId, setProductId] = useState("");
  const [currentVersion, setCurrentVersion] = useState("");
  const [productName, setProductName] = useState("");
  const [shortName, setShortName] = useState("");
  const [productNote, setProductNote] = useState("");

  // ========== State cho danh sách phiên bản (bảng) ==========
  const [tableData, setTableData] = useState([
    {
      id: 1,
      name: "Bold text column",
      version: "Regular text column",
      date: "12/01/2025",
      user: "Nguyễn Mạnh Hùng",
      changeNote: "Regular text column",
      checked: true,
    },
    {
      id: 2,
      name: "Bold text column",
      version: "Regular text column",
      date: "15/01/2025",
      user: "Nguyễn Mạnh Hùng",
      changeNote: "Regular text column",
      checked: false,
    },
  ]);
  
  // ========== Hàm xử lý khi người dùng click checkbox từng dòng ==========
  const handleCheckboxChange = (id) => {
    setTableData((prevData) =>
      prevData.map((row) =>
        row.id === id ? { ...row, checked: !row.checked } : row
      )
    );
  };

  // ========== Hàm toggle tất cả checkbox ==========
  const handleToggleAll = () => {
    const anyChecked = tableData.some((row) => row.checked);
    setTableData((prevData) =>
      prevData.map((row) => ({ ...row, checked: !anyChecked }))
    );
  };

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
    alert("Custom action (logic tùy bạn)!");
  };

  const handleDeleteVersion = () => {
    alert("Xóa phiên bản!");
  };
  const handleAddVersion = () => {
    alert("Thêm phiên bản!");
  };

  return (
    <div className="product-container">
      <aside className="sidebar-product">
        <h2>Ứng dụng</h2>
        <nav>
          <ul>
            <li>ERA ACC</li>
            <li>ERA HR</li>
            <li>ERA FIX ASSETS</li>
            <li>ERA FAB</li>
            <li>ERA FBIV</li>
            <li>ERA FIV</li>
            <li>ERA SYSTEM</li>
            <li>ERA INVENTORY</li>
            <li>ERA PURCHASING</li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
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
                  <tr key={row.id}>
                    <td className="checkbox-column">
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
                    <td id="more">
                      <button className="btn-more">
                        <img src={MoreIcon} alt="More" className="btn-more-icon" />
                      </button>
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
                  {`${indexOfFirstRow + 1} - ${Math.min(indexOfLastRow, tableData.length)} trong tổng số ${tableData.length} mục`}
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
    </div>
  );
};

export default ProductPage;
