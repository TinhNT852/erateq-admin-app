import React from 'react';

function ModalForm({ closeModal }) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-[600px]">
          <h2 className="text-xl font-semibold mb-4">Thêm khách hàng</h2>
  
          <input
            type="text"
            placeholder="Tên khách hàng"
            className="w-full p-2 border rounded mb-4"
          />
  
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded mb-4"
          />
  
          <div className="flex justify-end gap-2">
            <button
              onClick={closeModal}
              className="px-4 py-2 bg-gray-300 rounded-md"
            >
              Đóng
            </button>
            <button className="px-4 py-2 bg-green-500 text-white rounded-md">
              Thêm
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default ModalForm;
  