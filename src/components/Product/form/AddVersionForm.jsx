import { Button, Modal } from "antd";
import React, { useState } from "react";
import "./AddVersionForm.css";

import CheckStatusIcon from "../../../assets/icons/Check.png";
import FileZipRarIcon from "../../../assets/icons/File-zip-rar.png";
import LoadingIcon from "../../../assets/icons/Loading.png";
import UploadIcon from "../../../assets/icons/Upload.png";

const AddVersionForm = ({ visible, onClose }) => {
  const [productId, setProductId] = useState("");
  const [versionName, setVersionName] = useState("");
  const [updateName, setUpdateName] = useState("");
  const [creatorEmail, setCreatorEmail] = useState("");
  const [changeNote, setChangeNote] = useState("");

  const [uploadedFiles, setUploadedFiles] = useState([
    {
      name: "acc-ver1.0.2.rar",
      status: "Đang tải lên",
      progress: 50,
      currentSize: "4.08 Mb",
      totalSize: "10.09 Mb"
    },
    {
      name: "acc-ver1.0.2.rar",
      status: "Đã hoàn tất",
      progress: 100,
      currentSize: "10.09 Mb",
      totalSize: "10.09 Mb"
    },
  ]);

  const handleUploadFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedFiles((prev) => [
        ...prev,
        {
          name: file.name,
          status: "Đang tải lên",
          progress: 0,
          currentSize: "0 Mb",
          totalSize: "N/A"
        },
      ]);
    }
  };

  const handleAddVersion = () => {
    alert("Thêm phiên bản thành công!");
    onClose();
  };

  const handleRemoveFile = (index) => {
    setUploadedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <Modal
      className="add-version-content"
      title="Thêm phiên bản"
      visible={visible}
      onCancel={onClose}
      footer={null}
      centered
      destroyOnClose
    >
      <h2>Thông tin chi tiết</h2>
      <div className="form-row-av">
        <div className="form-group-av">
          <label>ID Sản Phẩm</label>
          <input
            type="text"
            placeholder="ACC"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
          />
        </div>
        <div className="form-group-av">
          <label>Phiên Bản Sản Phẩm</label>
          <input
            type="text"
            placeholder="1.0.2"
            value={versionName}
            onChange={(e) => setVersionName(e.target.value)}
          />
        </div>
      </div>

      <div className="form-row-av">
        <div className="form-group-av">
          <label>Tên Phiên Bản Cập Nhật</label>
          <input
            type="text"
            placeholder="Nhập tên phiên bản cập nhật"
            value={updateName}
            onChange={(e) => setUpdateName(e.target.value)}
          />
        </div>
        <div className="form-group-av">
          <label>Người tạo</label>
          <input
            type="text"
            placeholder="Nhập thông tin email"
            value={creatorEmail}
            onChange={(e) => setCreatorEmail(e.target.value)}
          />
        </div>
      </div>

      <div className="form-row-av">
        <div className="form-group-av full-width">
          <label>Ghi Chú Thay Đổi</label>
          <textarea
            rows="2"
            placeholder="Nhập ghi chú thay đổi"
            value={changeNote}
            onChange={(e) => setChangeNote(e.target.value)}
          ></textarea>
        </div>
      </div>

      <h2>Tải tệp lên</h2>
      <div className="upload-area">
        <img
          src={UploadIcon}
          alt="Upload"
          className="upload-area-icon"
        />
        <h2>Chọn một tệp hoặc kéo & thả vào đây</h2>
        <p>Các loại định dạng tệp RAR, ZIP,...</p>
        <button className="upload-button">
          <img
            src={UploadIcon}
            alt="Upload"
            className="upload-area-icon"
          />
          Tải File Lên
          <input
            type="file"
            className="file-input"
            onChange={handleUploadFile}
          />
        </button>
      </div>

      <div className="file-list">
        {uploadedFiles.map((file, idx) => (
          <div className="file-item" key={idx}>
            <img
              src={FileZipRarIcon}
              alt="File"
              className="file-zip-icon"
            />

            <div className="file-info">
              <span className="file-name">{file.name}</span>
              <div className="file-meta">
                <span className="file-size-info">
                  {file.currentSize} của {file.totalSize}
                </span>
                <span className="file-status">
                  <span className="load-status-iconss">
                    {file.status === "Đang tải lên" ? (
                      <img
                        src={LoadingIcon}
                        alt="Loading"
                        className="load-status-icons"
                      />
                    ) : (
                      <img
                        src={CheckStatusIcon}
                        alt="Check"
                        className="load-status-icons"
                      />
                    )}
                    {file.status}
                  </span>
                </span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{
                    width: `${file.progress}%`,
                    background: file.status === "Đang tải lên" ? "#0070FF" : "#00A523"
                  }}
                ></div>
              </div>
            </div>

            <button
              className="file-remove-btn"
              onClick={(e) => {
                e.stopPropagation();
                handleRemoveFile(idx);
              }}
            >
              ×
            </button>
          </div>
        ))}
      </div>

      <div className="add-version-footer">
        <Button
          className="btn-add-version-form"
          type="primary"
          onClick={handleAddVersion}
        >
          Thêm phiên bản
        </Button>
      </div>
    </Modal>
  );
};

export default AddVersionForm;
