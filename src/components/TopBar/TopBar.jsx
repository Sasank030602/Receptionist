import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FiHome } from "react-icons/fi";
import { LuBell } from "react-icons/lu";
import "./Topbar.css";
import { PATIENTS } from "../../Data/PatientRegistration";

const TopBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPatients = PATIENTS.filter((pt) => {
    const term = searchTerm.toLowerCase();
    return (
      pt.name.toLowerCase().includes(term) ||
      pt.id.toLowerCase().includes(term) ||
      pt.phone.includes(term)
    );
  });

  const handleSelectPatient = (patient) => {
    alert(`Opened profile for ${patient.name} (${patient.id})`);
    setSearchTerm("");
  };
  return (
    <div className="topbar-container d-flex justify-content-between align-items-center bg-white px-4 py-3 border-bottom w-100">
      <div className="search-wrapper position-relative">
        <IoSearchOutline className="search-icon text-muted" size={20} />
        <input
          type="text"
          className="form-control search-input shadow-none"
          placeholder="Search patients, ID, phone..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        {searchTerm.length > 0 && (
          <div 
            className="position-absolute bg-white border rounded shadow-sm w-100" 
            style={{ top: "100%", left: 0, zIndex: 1000, marginTop: "4px", maxHeight: "300px", overflowY: "auto" }}
          >
            {filteredPatients.length > 0 ? (
              filteredPatients.map((pt) => (
                <div 
                  key={pt.id} 
                  className="px-3 py-2 border-bottom cursor-pointer text-dark"
                  style={{ fontSize: "14px" }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f8f9fa"}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                  onClick={() => handleSelectPatient(pt)}
                >
                  <div className="fw-semibold">{pt.name}</div>
                  <div className="text-muted small d-flex justify-content-between">
                    <span>{pt.id}</span>
                    <span>{pt.phone}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="px-3 py-3 text-muted small text-center">
                No patients found matching "{searchTerm}"
              </div>
            )}
          </div>
        )}
      </div>

      <div className="topbar-right d-flex align-items-center gap-4">
        <div className="campus-pill d-flex align-items-center gap-2 px-3 py-2">
          <FiHome size={16} className="campus-icon" />
          <span className="fw-medium campus-text" style={{ fontSize: '16px' }}>Main Campus</span>
        </div>

        <div
          className="notification-bell position-relative cursor-pointer"
          onClick={() => alert("No new notifications")}
        >
          <LuBell size={16} className="text-muted" />
          <span className="position-absolute bg-danger rounded-circle notification-dot"></span>
        </div>

        <div className="user-text-info d-flex flex-column text-start ml-2">
          <span className="fw-semibold text-dark" style={{ fontSize: '16px', lineHeight: '1.2' }}>Maria Rodriguez</span>
          <span className="text-muted" style={{ fontSize: '13px', textAlign: 'left' }}>Front Desk</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
