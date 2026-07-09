import { useState } from "react";
import {
  FiUserPlus,
  FiSearch,
  FiPhone,
  FiMail,
  FiMapPin,
  FiCheckCircle,
} from "react-icons/fi";
import { PiIdentificationCard } from "react-icons/pi";
import "./PatientRegistration.css";
import { PATIENTS } from "../../Data/PatientRegistration";

const PatientRegistration = () => {
  const [activeTab, setActiveTab] = useState("new");

  const handleRegister = (e) => {
    e.preventDefault();

    const currentCount = JSON.parse(
      localStorage.getItem("new_registrations_count") || "12",
    );

    localStorage.setItem(
      "new_registrations_count",
      JSON.stringify(currentCount + 1),
    );

    alert(
      "Patient registered successfully! Check the Dashboard for updated New Registrations count.",
    );

    e.target.reset();
  };

  const renderNewPatientForm = () => (
    <div className="border rounded-16 my-4 px-4 py-4 bg-white">
      <h5 className="fw-bold text-dark mb-1">New Patient Registration</h5>
      <p className="text-muted small">
        Enter patient details to create a new record
      </p>

      <form onSubmit={handleRegister}>
        <h6 className="fw-bold">Personal Information</h6>
        <hr />

        <div className="row">
          <div className="col-md-5">
            <label className="form-label small">Full Name *</label>
            <input className="form-control" type="text" required />
          </div>

          <div className="col-md-3">
            <label className="form-label small">Age *</label>
            <input className="form-control" type="number" required />
          </div>

          <div className="col-md-4">
            <label className="form-label small">Gender *</label>
            <select className="form-select" required>
              <option value="">Select gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <h6 className="fw-bold">Contact Information</h6>
        <hr />

        <div className="row">
          <div className="col-md-6">
            <label className="form-label small d-flex align-items-center gap-2">
              <FiPhone /> Phone Number *
            </label>
            <input className="form-control" type="tel" required />
          </div>

          <div className="col-md-6">
            <label className="form-label small d-flex align-items-center gap-2">
              <FiMail /> Email Address
            </label>
            <input className="form-control" type="email" />
          </div>

          <div className="col-md-6">
            <label className="form-label small d-flex align-items-center gap-2">
              <PiIdentificationCard size={18} /> Aadhaar / ID Number
            </label>
            <input className="form-control" type="text" />
          </div>

          <div className="col-md-6">
            <label className="form-label small">Blood Group</label>
            <select className="form-select">
              <option value="">Select</option>
              <option>A+</option>
              <option>O+</option>
              <option>B+</option>
              <option>AB+</option>
              <option>O-</option>
            </select>
          </div>
        </div>

        <h6 className="fw-bold">Address & Emergency Contact</h6>
        <hr />

        <div className="row">
          <div className="col-md-6">
            <label className="form-label small d-flex align-items-center gap-2">
              <FiMapPin /> Address
            </label>
            <textarea className="form-control" rows="2" />
          </div>

          <div className="col-md-6">
            <label className="form-label small">
              Emergency Contact Number *
            </label>
            <input className="form-control" type="tel" required />
          </div>
        </div>

        <hr />

        <div className="d-flex gap-3 mt-4">
          <button
            className="btn d-flex align-items-center gap-2"
            type="submit"
            style={{ background: "#00A6F4", color: "#ffffff" }}
          >
            <FiCheckCircle /> Register Patient
          </button>

          <button className="btn btn-light" type="reset">
            Clear Form
          </button>

          <button
            className="btn btn-link text-muted text-decoration-none"
            type="button"
            onClick={() => alert("Scanning Aadhaar...")}
          >
            <PiIdentificationCard size={18} /> Scan Aadhaar
          </button>
        </div>
      </form>
    </div>
  );

  const renderReturningPatients = () => (
    <div className="border rounded-16 my-4 px-4 py-4 bg-white">
      <h5 className="fw-bold text-dark mb-1">Find Returning Patient</h5>
      <p className="text-muted small mb-4">
        Search by name, phone, email, or ID
      </p>

      <div className="position-relative mb-4">
        <FiSearch
          className="position-absolute text-muted"
          style={{ left: 16, top: "50%", transform: "translateY(-50%)" }}
        />
        <input
          className="form-control"
          placeholder="Search patients..."
          style={{ paddingLeft: 44 }}
        />
      </div>

      <div className="d-flex flex-column gap-3">
        {PATIENTS.map((pt) => (
          <div
            key={pt.id}
            className="rounded-3 p-3 d-flex border justify-content-between align-items-center"
          >
            <div className="wi">
              <div className="fw-bold">
                {pt.name} <span className="text-muted small">{pt.id}</span>{" "}
                <span className="text-dark fs-5">{pt.bg}</span>
              </div>
              <div className="four d-flex">
                <div className="small text-muted">
                  <FiPhone /> {pt.phone}
                </div>
                <div className="small text-muted">
                  <FiMail /> {pt.email}
                </div>
                <div className="small text-muted">Age: {pt.age}</div>
                <div className="small text-muted">Last Visit: {pt.visit}</div>
              </div>
            </div>

            <button
              className="btn btn-sm"
              style={{ background: "#00A6F4", color: "#ffffff" }}
              onClick={() => alert(`Patient ${pt.name} selected!`)}
            >
              Select Patient
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="dashboard-content">
      <div className="mb-4">
        <h3>Patient Registration</h3>
        <p className="text-muted small">
          Register or manage patient information
        </p>
      </div>

      <div
        className="d-flex mb-4 border bg-white py-2 px-2 shadow-sm rounded-16"
        style={{ maxWidth: "45vh", gap: "30px" }}
      >
        <button
          className={`btn ${activeTab === "new" ? "btn-primary" : "btn-white"}`}
          onClick={() => setActiveTab("new")}
          style={{ borderRadius: "10px" }}
        >
          <FiUserPlus /> New Patient
        </button>

        <button
          className={`btn ${activeTab === "returning" ? "btn-primary" : "btn-white"}`}
          onClick={() => setActiveTab("returning")}
          style={{ borderRadius: "10px" }}
        >
          <FiSearch /> Returning Patient
        </button>
      </div>

      {activeTab === "new" ? renderNewPatientForm() : renderReturningPatients()}
    </div>
  );
};

export default PatientRegistration;
