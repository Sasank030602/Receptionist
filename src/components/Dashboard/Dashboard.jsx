import {
  FiCalendar,
  FiClock,
  FiUserPlus,
  FiCheckCircle,
  FiVideo,
} from "react-icons/fi";
import { LuClipboardList } from "react-icons/lu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { APPOINTMENTS } from "../../Data/PatientRegistration";

const Dashboard = () => {
  const navigate = useNavigate();
  let newRegCount = localStorage.getItem("new_registrations_count");
  if (!newRegCount) {
    newRegCount = 12;
  }

  const [appointments, setAppointments] = useState(APPOINTMENTS);

  const handleCheckIn = (id) => {
    setAppointments(appointments.map(app =>
      app.id === id ? { ...app, status: "Waiting" } : app
    ));
    alert("Patient Checked In");
  };

  return (
    <div className="dashboard-content w-100">
      <div className="mb-4">
        <h4 className="fw-bold">Front Desk Dashboard</h4>
        <p className="text-muted small">
          Patient registration, appointments & queue management
        </p>
      </div>

      <div className="row g-3 mb-4">
        <div className="col-md-3">
          <div className="bg-white p-4 rounded-16 shadow-sm dashboard-card">
            <div className="d-flex align-items-center gap-2 mb-2">
              <FiCalendar size={18} style={{ color: "#0084D1" }} />
              <span className="card-title-text">Today's Appointments</span>
            </div>
            <h6 className="card-value-text">5 Scheduled</h6>
          </div>
        </div>

        <div className="col-md-3">
          <div className="bg-white p-4 rounded-16 shadow-sm dashboard-card">
            <div className="d-flex align-items-center gap-2 mb-2">
              <FiClock size={18} style={{ color: "#F54900" }} />
              <span className="card-title-text">In Queue</span>
            </div>
            <h6 className="card-value-text">1 Waiting</h6>
          </div>
        </div>

        <div className="col-md-3">
          <div className="bg-white p-4 rounded-16 shadow-sm dashboard-card">
            <div className="d-flex align-items-center gap-2 mb-2">
              <FiUserPlus size={18} style={{ color: "#30B762" }} />
              <span className="card-title-text">New Registrations</span>
            </div>
            <h6 className="card-value-text">{newRegCount} Today</h6>
          </div>
        </div>

        <div className="col-md-3">
          <div className="bg-white p-4 rounded-16 shadow-sm dashboard-card">
            <div className="d-flex align-items-center gap-2 mb-2">
              <FiCheckCircle size={18} style={{ color: "#009689" }} />
              <span className="card-title-text">Completed</span>
            </div>
            <h6 className="card-value-text">38 Patients</h6>
          </div>
        </div>
      </div>

      <div className="border my-4 py-4 px-4 bg-white rounded-16 shadow-sm">
        <h6 className="fw-bold mb-3">Quick Actions</h6>

        <div className="row">
          <div className="col-md-3">
            <div
              className="border p-3 text-center rounded"
              style={{ backgroundColor: "#00A6F4", color: "#ffffff", cursor: "pointer" }}
              onClick={() => navigate('/registration')}
            >
              <FiUserPlus size={24} />
              <p>New Patient</p>
            </div>
          </div>

          <div className="col-md-3">
            <div
              className="border p-3 text-center rounded"
              style={{ cursor: "pointer" }}
              onClick={() => navigate('/appointments')}
            >
              <FiCalendar size={24} />
              <p>Book Appointment</p>
            </div>
          </div>

          <div className="col-md-3">
            <div
              className="border p-3 text-center rounded"
              style={{ cursor: "pointer" }}
              onClick={() => navigate('/queue')}
            >
              <LuClipboardList size={24} />
              <p>View Queue</p>
            </div>
          </div>

          <div className="col-md-3">
            <div
              className="border p-3 text-center rounded"
              style={{ cursor: "pointer" }}
              onClick={() => alert("Teleconsult setup initiated")}
            >
              <FiVideo size={24} />
              <p>Teleconsult Setup</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border my-4 py-4 px-4 bg-white rounded-16 shadow-sm">
        <h6 className="fw-bold mb-3">Today's Appointments</h6>

        <table className="table table-custom">
          <thead>
            <tr>
              <th>Token</th>
              <th>Patient</th>
              <th>Doctor</th>
              <th>Time</th>
              <th>Type</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {appointments.map((app) => (
              <tr key={app.id}>
                <td className="token-badge">{app.token}</td>
                <td>
                  {app.name} <br /> <small>{app.pid}</small>
                </td>
                <td>{app.doctor}</td>
                <td>{app.time}</td>
                <td><span className="status-badge blue">{app.type}</span></td>
                <td><span className={`status-badge ${app.status.toLowerCase()}`}>{app.status}</span></td>
                <td>
                  <button
                    className="btn-checkin"
                    onClick={() => handleCheckIn(app.id)}
                    disabled={app.status === "Waiting"}
                    style={app.status === "Waiting" ? { opacity: 0.5, cursor: "not-allowed" } : {}}
                  >
                    {app.status === "Waiting" ? "Checked In" : "Check In"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
