import "./Sidebar.css";
import { Link, useLocation } from "react-router-dom";
import { RiDashboardLine } from "react-icons/ri";
import { RxPeople } from "react-icons/rx";
import { LuClipboardList } from "react-icons/lu";
import { FiDollarSign } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { TbActivityHeartbeat } from "react-icons/tb";
import { CiCalendar } from "react-icons/ci";

const Sidebar = () => {
  const location = useLocation();

  const navLinks = [
    { name: "Dashboard", icon: <RiDashboardLine size={20} />, path: "/" },
    { name: "Patient Registration", icon: <RxPeople size={20} />, path: "/registration" },
    { name: "Appointments", icon: <CiCalendar size={20} />, path: "/appointments" },
    { name: "Queue Management", icon: <LuClipboardList size={20} />, path: "/queue" },
    { name: "Billing", icon: <FiDollarSign size={20} />, path: "/billing" },
  ];

  return (
    <div className="sidebar-container bg-white d-flex flex-column shadow-sm">
      <div className="sidebar-header d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-2">
          <div className="logo-icon">
            <TbActivityHeartbeat size={20} color="white" />
          </div>
          <span className="logo-text">MediCare HIS</span>
        </div>
        <IoCloseOutline size={20} className="text-muted cursor-pointer" />
      </div>

      <div className="sidebar-nav flex-grow-1">
        <div className="nav flex-column position-relative">
          {navLinks.map((link, idx) => (
            <Link
              to={link.path}
              key={idx}
              className={`nav-link d-flex align-items-center gap-3 ${location.pathname === link.path ? "active" : ""}`}
            >
              {link.icon}
              <span className="nav-text">{link.name}</span>
              {location.pathname === link.path && <div className="active-indicator"></div>}
            </Link>
          ))}
        </div>
      </div>

      <div className="sidebar-footer">
        <div className="user-info d-flex align-items-center gap-3">
          <div
            className="user-avatar flex-shrink-0"
            style={{ marginBottom: 0 }}
          >
            <FaRegUserCircle size={24} color="rgba(255, 255, 255, 0.8)" />
          </div>
          <div className="d-flex flex-column text-start">
            <span className="user-name">Maria Rodriguez</span>
            <span className="user-role">Receptionist</span>
          </div>
        </div>

        <button
          className="btn btn-light d-flex align-items-center justify-content-center gap-2 w-100 logout-btn mt-4 border rounded"
          onClick={() => alert("Logged out successfully!")}
        >
          <CiLogout
            size={16}
            strokeWidth={0.5}
            style={{ transform: "scaleX(-1)" }}
          />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
