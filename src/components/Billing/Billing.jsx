import { useState } from "react";
import "./Billing.css";

const createEmptyItem = () => ({
  id: Date.now(),
  description: "",
  qty: 1,
  unitPrice: 0,
});

const Billing = () => {
  const [items, setItems] = useState([createEmptyItem()]);

  const handleItemChange = (id, field, value) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, [field]: value } : item,
      ),
    );
  };

  const subtotal = items.reduce(
    (sum, item) => sum + Number(item.qty) * Number(item.unitPrice || 0),
    0,
  );

  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const handleGenerateBill = () => {
    alert("Bill Generated Successfully!");
    setItems([createEmptyItem()]);
  };

  const handleAddItem = () => {
    setItems([...items, createEmptyItem()]);
  };

  const handleAddQuickService = (desc, price) => {
    const newItem = {
      id: Date.now(),
      description: desc,
      qty: 1,
      unitPrice: price,
    };
    // if there's only one item and it's empty, replace it
    if (items.length === 1 && !items[0].description && !items[0].unitPrice) {
      setItems([newItem]);
    } else {
      setItems([...items, newItem]);
    }
  };

  return (
    <div className="w-100 dashboard-content">
      <div className="mb-4 pb-2">
        <h3 className="fw-bold text-dark mb-1">Billing Initiation</h3>
        <p className="text-muted small mb-0">
          Create bills and process payments
        </p>
      </div>

      <div className="d-flex gap-4">
        <div className="col-md-8 bg-white py-4 px-4 rounded-16">
          <div>
            <h5 className="fw-bold text-dark mb-4 pb-2">New Bill</h5>

            <div className="mb-3">
              <label className="form-label text-muted small mb-2 fw-medium">
                Patient
              </label>
              <input
                type="text"
                className="form-control shadow-none border-light-grey rounded-3 py-2"
                placeholder="Search patient..."
              />
            </div>

            <div className="d-flex justify-content-between align-items-center mb-4">
              <label className="form-label text-muted small mb-0 fw-medium">
                Bill Items
              </label>
              <button
                onClick={handleAddItem}
                className="btn btn-light btn-sm px-3 py-1 fw-medium shadow-none"
                style={{
                  backgroundColor: "#f1f5f9",
                  color: "#475569",
                  borderRadius: "6px",
                }}
              >
                Add Item
              </button>
            </div>

            <div
              className="row g-3 mb-2 px-3 py-2 rounded-3 align-items-center"
              style={{ backgroundColor: "#f8f9fa" }}
            >
              <div className="col-5">
                <span
                  className="fw-bold text-dark"
                  style={{ fontSize: "13px" }}
                >
                  Description
                </span>
              </div>

              <div className="col-2">
                <span
                  className="fw-bold text-dark"
                  style={{ fontSize: "13px" }}
                >
                  Qty
                </span>
              </div>

              <div className="col-3">
                <span
                  className="fw-bold text-dark"
                  style={{ fontSize: "13px" }}
                >
                  Unit Price
                </span>
              </div>

              <div className="col-2 text-end">
                <span
                  className="fw-bold text-dark"
                  style={{ fontSize: "13px" }}
                >
                  Total
                </span>
              </div>
            </div>

            {items.map((item) => (
              <div
                className="row g-3 mb-3 px-3 align-items-center"
                key={item.id}
              >
                <div className="col-5">
                  <input
                    type="text"
                    className="form-control shadow-none border-light-grey rounded-3 py-2"
                    placeholder="Service/Item"
                    value={item.description}
                    onChange={(e) =>
                      handleItemChange(item.id, "description", e.target.value)
                    }
                  />
                </div>

                <div className="col-2">
                  <input
                    type="number"
                    className="form-control shadow-none border-light-grey rounded-3 py-2"
                    min="1"
                    value={item.qty}
                    onChange={(e) =>
                      handleItemChange(item.id, "qty", e.target.value)
                    }
                  />
                </div>

                <div className="col-3">
                  <input
                    type="number"
                    className="form-control shadow-none border-light-grey rounded-3 py-2"
                    min="0"
                    placeholder="0"
                    value={item.unitPrice || ""}
                    onChange={(e) =>
                      handleItemChange(item.id, "unitPrice", e.target.value)
                    }
                  />
                </div>

                <div className="col-2 text-end">
                  <span className="text-dark" style={{ fontSize: "14.5px" }}>
                    ₹
                    {(Number(item.qty) * Number(item.unitPrice || 0)).toFixed(
                      0,
                    )}
                  </span>
                </div>
              </div>
            ))}

            <hr className="text-muted my-4" style={{ opacity: 0.15 }} />

            <div className="mb-4 pb-2">
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted" style={{ fontSize: "14.5px" }}>
                  Subtotal:
                </span>
                <span className="text-dark" style={{ fontSize: "14.5px" }}>
                  ₹{subtotal.toFixed(0)}
                </span>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted" style={{ fontSize: "14.5px" }}>
                  Tax (10%):
                </span>
                <span className="text-dark" style={{ fontSize: "14.5px" }}>
                  ₹{tax.toFixed(0)}
                </span>
              </div>

              <div className="d-flex justify-content-between mt-2">
                <span className="text-dark" style={{ fontSize: "14.5px" }}>
                  Total:
                </span>
                <span className="text-dark" style={{ fontSize: "14.5px" }}>
                  ₹{total.toFixed(0)}
                </span>
              </div>
            </div>

            <div className="d-flex gap-3 mt-4">
              <button
                onClick={handleGenerateBill}
                className="btn text-white px-4 py-2 shadow-sm"
                style={{
                  backgroundColor: "#00A6F4",
                  borderRadius: "8px",
                  fontWeight: "500",
                }}
              >
                Generate Bill
              </button>

              <button
                onClick={() => alert("Draft saved!")}
                className="btn btn-light px-4 py-2 shadow-sm"
                style={{
                  backgroundColor: "#f1f5f9",
                  color: "#475569",
                  borderRadius: "8px",
                  fontWeight: "500",
                  border: "none",
                }}
              >
                Save Draft
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4 bg-white" style={{ width: "50vh" }}>
          <div className="p-4 h-100">
            <h5 className="fw-bold text-dark mb-4 pb-2">Quick Services</h5>

            <div className="d-flex flex-column gap-3">
              <div
                className="p-3 rounded-3"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <button
                  onClick={() => handleAddQuickService("Consultation", 500)}
                  className="btn text-start w-100"
                  style={{
                    border: "0px solid #e5e7eb",
                    borderRadius: "8px",
                    color: "#64748b",
                    opacity: 1,
                  }}
                >
                  Consultation - ₹500
                </button>
              </div>

              <div
                className="p-3 rounded-3"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <button
                  onClick={() => handleAddQuickService("ECG", 400)}
                  className="btn text-start w-100"
                  style={{
                    border: "0px solid #e5e7eb",
                    borderRadius: "8px",
                    color: "#64748b",
                    opacity: 1,
                  }}
                >
                  ECG - ₹400
                </button>
              </div>

              <div
                className="p-3 rounded-3"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <button
                  onClick={() => handleAddQuickService("X-Ray", 800)}
                  className="btn text-start w-100"
                  style={{
                    border: "0px solid #e5e7eb",
                    borderRadius: "8px",
                    color: "#64748b",
                    opacity: 1,
                  }}
                >
                  X-Ray - ₹800
                </button>
              </div>

              <div
                className="p-3 rounded-3"
                style={{ backgroundColor: "#f8f9fa" }}
              >
                <button
                  onClick={() => handleAddQuickService("Blood Test", 300)}
                  className="btn text-start w-100"
                  style={{
                    border: "0px solid #e5e7eb",
                    borderRadius: "8px",
                    color: "#64748b",
                    opacity: 1,
                  }}
                >
                  Blood Test - ₹300
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
