import React, { useState } from "react";
import CheckBoxIcon from "../..//assets/icons/CheckBox.png";
import CheckIcon from "../..//assets/icons/GreenCheck.png";
import NoteIcon from "../..//assets/icons/Note.png";
import PauseIcon from "../..//assets/icons/Pause.png";
import CancelIcon from "../../assets/icons/Cancel.png";
import SmallCheck from "../../assets/icons/WhiteCheck.png";

import "./HomeStyles.css";

const HomePage = () => {
  const [tableData, setTableData] = useState([
    {
      id: 1,
      name: "Bold text column",
      email: "Regular text column",
      phone: "Regular text column",
      hotel: "Regular text column",
      type: "Regular text column",
      rooms: "Regular text column",
      nationality: "Regular text column",
      columnHeading: "Regular text column",
      accepted: true,
    },
    {
      id: 2,
      name: "Bold text column",
      email: "Regular text column",
      phone: "Regular text column",
      hotel: "Regular text column",
      type: "Regular text column",
      rooms: "Regular text column",
      nationality: "Regular text column",
      columnHeading: "Regular text column",
      accepted: false,
    },
    {
      id: 3,
      name: "Bold text column",
      email: "Regular text column",
      phone: "Regular text column",
      hotel: "Regular text column",
      type: "Regular text column",
      rooms: "Regular text column",
      nationality: "Regular text column",
      columnHeading: "Regular text column",
      accepted: false,
    },
    {
      id: 4,
      name: "Bold text column",
      email: "Regular text column",
      phone: "Regular text column",
      hotel: "Regular text column",
      type: "Regular text column",
      rooms: "Regular text column",
      nationality: "Regular text column",
      columnHeading: "Regular text column",
      accepted: true,
    },
    {
      id: 5,
      name: "Bold text column",
      email: "Regular text column",
      phone: "Regular text column",
      hotel: "Regular text column",
      type: "Regular text column",
      rooms: "Regular text column",
      nationality: "Regular text column",
      columnHeading: "Regular text column",
      accepted: false,
    },
    {
      id: 6,
      name: "Bold text column",
      email: "Regular text column",
      phone: "Regular text column",
      hotel: "Regular text column",
      type: "Regular text column",
      rooms: "Regular text column",
      nationality: "Regular text column",
      columnHeading: "Regular text column",
      accepted: false,
    },
    {
      id: 7,
      name: "Bold text column",
      email: "Regular text column",
      phone: "Regular text column",
      hotel: "Regular text column",
      type: "Regular text column",
      rooms: "Regular text column",
      nationality: "Regular text column",
      columnHeading: "Regular text column",
      accepted: true,
    },
    {
      id: 8,
      name: "Bold text column",
      email: "Regular text column",
      phone: "Regular text column",
      hotel: "Regular text column",
      type: "Regular text column",
      rooms: "Regular text column",
      nationality: "Regular text column",
      columnHeading: "Regular text column",
      accepted: false,
    },
    {
      id: 9,
      name: "Bold text column",
      email: "Regular text column",
      phone: "Regular text column",
      hotel: "Regular text column",
      type: "Regular text column",
      rooms: "Regular text column",
      nationality: "Regular text column",
      columnHeading: "Regular text column",
      accepted: false,
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 8;
  const [filterDate, setFilterDate] = useState("");
  const [showAll, setShowAll] = useState(false);

  const handleDateChange = (e) => {
    setFilterDate(e.target.value);
  };

  const handleShowAllChange = () => {
    setShowAll(!showAll);
  };

  const toggleAllRows = () => {
    const anyCheckedInCurrentPage = tableData
      .slice(indexOfFirstRow, indexOfLastRow)
      .some(row => row.accepted);
    
    setTableData(
      tableData.map((row, index) => {
        if (index >= indexOfFirstRow && index < indexOfLastRow) {
          return { ...row, accepted: !anyCheckedInCurrentPage };
        }
        return row;
      })
    );
  };

  const handleAccept = (id) => {
    setTableData(
      tableData.map((row) => (row.id === id ? { ...row, accepted: true } : row))
    );
  };

  const handleReject = (id) => {
    setTableData(
      tableData.map((row) =>
        row.id === id ? { ...row, accepted: false } : row
      )
    );
  };


  // Pagination logic
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = tableData.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(tableData.length / rowsPerPage);

  return (
    <div className="page-container">
      {/* ========== PHẦN TRẠNG THÁI PHÊ DUYỆT ========== */}
      <div className="approval-status-container">
        <h2>Trạng thái phê duyệt</h2>
        <div className="status-cards">
          {/* Card 1: Yêu cầu */}
          <div className="status-card a">
            <div className=".status-text">
              <div className="status-title">Yêu cầu</div>
              <div className="status-value">265</div>
            </div>
              <div className="status-icon">
                <img src={NoteIcon} alt="Note Icon" />
              </div>
          </div>

          {/* Card 2: Chấp nhận */}
          <div className="status-card b">
            <div className=".status-text">
              <div className="status-title">Chấp nhận</div>
              <div className="status-value">30</div>
            </div>
              <div className="status-icon">
                <img src={CheckIcon} alt="Check Icon" />
              </div>
          </div>

          {/* Card 3: Từ chối */}
          <div className="status-card c">
            <div className=".status-text">
              <div className="status-title">Từ chối</div>
              <div className="status-value">3</div>
            </div>
            <div className="status-icon">
              <img src={CancelIcon} alt="Cancel Icon" />
            </div>
          </div>

          {/* Card 4: Tạm ngưng */}
          <div className="status-card d">
            <div className=".status-text">
              <div className="status-title">Tạm ngưng</div>
              <div className="status-value">3</div>
            </div>
            <div className="status-icon">
              <img src={PauseIcon} alt="Pause Icon" />
            </div>
          </div>
        </div>
      </div>

      {/* ========== PHẦN DANH SÁCH YÊU CẦU ========== */}
      <div className="request-list-container">
        <div className="list-title">
          <h2>Danh sách yêu cầu</h2>
          <div className="date-filter">
            <input
              type="date"
              className="date-input"
              value={filterDate}
              onChange={handleDateChange}
            />
            <label className="show-all">
              <input
                type="checkbox"
                className="checkbox-input"
                checked={showAll}
                onChange={handleShowAllChange}
              />
              Xem tất cả
            </label>
          </div>
        </div>

        {/* Table */}
        <div className="table-container">
          <table className="styled-table">
            <thead>
              <tr>
                <th className="checkbox-column">
                <button className="toggle-all-btn" onClick={toggleAllRows}>
                  <img src={CheckBoxIcon} alt="Toggle All" />
                </button>
                </th>
                <th>Tên Khách Hàng</th>
                <th>Email</th>
                <th>Số Điện Thoại</th>
                <th>Tên Khách Sạn</th>
                <th>Loại Khách Sạn</th>
                <th>Số Lượng Phòng</th>
                <th>Quốc Tịch</th>
                <th>Column Heading</th>
                <th>Hành Động</th>
              </tr>
            </thead>
            <tbody>
              {currentRows.map((row) => (
                <tr key={row.id}>
                  <td className="checkbox-column">
                    <input
                      type="checkbox"
                      checked={row.accepted}
                      onChange={() => {}}
                    />
                  </td>
                  <td>
                    <strong>{row.name}</strong>
                  </td>
                  <td>{row.email}</td>
                  <td>{row.phone}</td>
                  <td>{row.hotel}</td>
                  <td>{row.type}</td>
                  <td>{row.rooms}</td>
                  <td>{row.nationality}</td>
                  <td>{row.columnHeading}</td>
                  <td className="actions">
                    <button className="btn-accept" onClick={() => handleAccept(row.id)}>
                      <img src={SmallCheck} alt="check" className="accept-icon" />
                      Chấp nhận
                    </button>
                    <button className="btn-reject" onClick={() => handleReject(row.id)}>
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
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
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              ❯
            </button>
          </div>
          <div className="page-info-container">
            <div></div>
            <div className="page-info">
              <span>{`${indexOfFirstRow + 1} - ${Math.min(
                indexOfLastRow,
                tableData.length
              )} trong tổng số ${tableData.length} mục`}</span>
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
    </div>
  );
};

export default HomePage;
