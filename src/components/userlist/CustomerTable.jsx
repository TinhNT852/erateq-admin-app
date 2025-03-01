import React, { useState } from "react";
import { Table, Tag, Button, Menu, Dropdown } from "antd";
import { PlusOutlined, ProfileOutlined, EllipsisOutlined, EditOutlined, CheckCircleOutlined, DeleteOutlined } from "@ant-design/icons";
import "antd/dist/reset.css";
import "./CustomerTable.css";
import ModalForm from "./form/ModalForm";
import { useNavigate } from "react-router-dom";




const data = [
  {
    key: "1",
    name: "Bold text column",
    dob: "12/01/2025",
    gender: "Nam",
    contract: [
      { name: "Hợp đồng phần mềm 2025", status: "Còn hạn" },
      { name: "Hợp đồng thiết bị 2025", status: "Còn hạn" },
      { name: "Hợp đồng phần mềm 2024", status: "Hết hạn" },
    ],
    country: "Vietnam",
    address: "Regular text column",
    email: "dung1@gmail.com",
  },
  {
    key: "2",
    name: "Bold text column",
    dob: "12/01/2025",
    gender: "Nam",
    contract: [],
    country: "Vietnam",
    address: "Regular text column",
    email: "dung1@gmail.com",
  }
];

const CustomerTable = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleActionClick = (record) => {
    console.log("Thông tin item được click:", record);
    navigate('./detail', { state: { item: record }});
  };
  

  const columns = [
    {
      title: "Tên Khách Hàng",
      dataIndex: "name",
      render: (text) => <strong>{text}</strong>,
    },
    {
      title: "Ngày Sinh",
      dataIndex: "dob",
    },
    {
      title: "Giới Tính",
      dataIndex: "gender",
    },
    {
      title: "Hợp đồng",
      dataIndex: "contract",
      render: (contracts) =>
        contracts.length > 0 ? (
          contracts.map((item, index) => (
            <div key={index}>
              <span style={{margin: "5px"}}>{item.name}</span>
              <Tag color={item.status === "Còn hạn" ? "green" : "red"}>{
                item.status
              }</Tag>
            </div>
          ))
        ) : (
          <span>-</span>
        ),
    },
    {
      title: "Quốc Tịch",
      dataIndex: "country",
    },
    {
      title: "Địa Chỉ",
      dataIndex: "address",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Hành Động",
        render: (_, record) => (
          <Dropdown overlay={<Menu>
            <Menu.Item key="edit" icon={<EditOutlined />} onClick={()=> handleActionClick(record)}>
              Chỉnh sửa
            </Menu.Item>
            <Menu.Item key="approved" icon={<CheckCircleOutlined />}>
              Giấy phép được chấp thuận
            </Menu.Item>
            <Menu.Item key="delete" icon={<DeleteOutlined />} danger>
              Xóa
            </Menu.Item>
          </Menu>} trigger={["click"]}>
            <Button>
              <EllipsisOutlined style={{ cursor: "pointer" }} />
            </Button>
          </Dropdown>
        ),
    },
  ];

  return (
    <div className="customer-table-container">
    <div className="header-add-user-h3">
        <h4>Danh sách khách hàng</h4>
        <div className="header-add-user">
            <Button className="setting-btn" icon={<ProfileOutlined />}></Button>
            <Button type="primary" icon={<PlusOutlined />} className="add-customer-btn" onClick={() => setIsOpen(true)}>
              Thêm khách hàng
            </Button>
            {isOpen && <ModalForm visible={isOpen} onClose={() => setIsOpen(false)} />}
            </div>
        </div>
        <div className="table-user-list">
            <Table
              className="customer-table"
              rowSelection={{
              selectedRowKeys,
              onChange: setSelectedRowKeys,
              }}
              columns={columns}
              dataSource={data}
              pagination={{ pageSize: 8 }}/>
        </div>
    </div>
  );
};

export default CustomerTable;
