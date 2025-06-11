import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [openOffice, setOpenOffice] = useState(false);

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="logo">Spot on Schedulers</div>
        <div className="avatar-container">
          <div className="avatar">👤</div>
          <p className="role">SUPER ADMIN</p>
        </div>
      </div>

      <nav className="nav-links">
        <NavLink
          to="/master-form"
          className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
        >
          📄 Master Form
        </NavLink>

        <div className="office-section">
          <button
            onClick={() => setOpenOffice(!openOffice)}
            className="nav-item dropdown-toggle"
            aria-expanded={openOffice}
            aria-controls="office-dropdown"
          >
            🖊️ Office {openOffice ? "▲" : "▼"}
          </button>
          {openOffice && (
            <div id="office-dropdown" className="dropdown-links">
              <NavLink
                to="/add-dental-office"
                className={({ isActive }) =>
                  `dropdown-item ${isActive ? "active" : ""}`
                }
              >
                • Add Dental Office
              </NavLink>
              <NavLink
                to="/edit-insurance-form"
                className={({ isActive }) =>
                  `dropdown-item ${isActive ? "active" : ""}`
                }
              >
                • Edit Insurance Form
              </NavLink>
              <NavLink
                to="/view-insurance-form"
                className={({ isActive }) =>
                  `dropdown-item ${isActive ? "active" : ""}`
                }
              >
                • View Insurance Form
              </NavLink>
            </div>
          )}
        </div>
<<<<<<< HEAD


       
=======
>>>>>>> 9353a01a0a2f892116492828e1bb077fa69fee97
      </nav>
    </div>
  );
};

export default Sidebar;




