import { NavLink } from "react-router-dom";
import { useState } from "react";
import './Sidebar.css';

const Sidebar = () => {
  const [openOffice, setOpenOffice] = useState(false);

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2 className="logo">Spot on<br />Schedulers</h2>
        <div className="avatar-container">
          <div className="avatar">👤</div>
          <p className="role">SUPER ADMIN</p>
        </div>
      </div>

      <nav className="nav-links">
        {/* <NavLink to="/" className="nav-item">🏠 Dashboard</NavLink> */}
        {/* <NavLink to="/manage-users" className="nav-item">👥 Manage Users</NavLink> */}
        <NavLink to="/master-form" className="nav-item">📄 Master Form</NavLink>

        <div className="office-section">
          <button onClick={() => setOpenOffice(!openOffice)} className="nav-item dropdown-toggle">
            🖊️ Office {openOffice ? '▲' : '▼'}
          </button>
          {openOffice && (
            <div className="dropdown-links">
              <NavLink to="/add-dental-office" className="dropdown-item">• Add Dental Office</NavLink>
              <NavLink to="/edit-insurance-form" className="dropdown-item">• Edit Insurance Form</NavLink>
              <NavLink to="/view-insurance-form" className="dropdown-item">• View Insurance Form</NavLink>
            </div>
          )}
        </div>

        <NavLink to="/task-history" className="nav-item">🕒 Task History</NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;

// import { NavLink } from "react-router-dom";
// import { useState } from "react";
// import "./Sidebar.css";

// const Sidebar = () => {
//   const [openOffice, setOpenOffice] = useState(false);

//   return (
//     <div className="sidebar">
//       <div className="sidebar-header">
//         <h2 className="logo">Spot on<br />Schedulers</h2>
//         <div className="avatar-container">
//           <div className="avatar">👤</div>
//           <p className="role">SUPER ADMIN</p>
//         </div>
//       </div>

//       <nav className="nav-links">
//         <NavLink to="/master-form" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
//           📄 Master Form
//         </NavLink>

//         <div className="office-section">
//           <button
//             onClick={() => setOpenOffice(!openOffice)}
//             className="nav-item dropdown-toggle"
//             aria-expanded={openOffice}
//             aria-controls="office-dropdown"
//           >
//             🖊️ Office {openOffice ? '▲' : '▼'}
//           </button>
//           {openOffice && (
//             <div id="office-dropdown" className="dropdown-links">
//               <NavLink
//                 to="/add-dental-office"
//                 className={({ isActive }) => `dropdown-item ${isActive ? 'active' : ''}`}
//               >
//                 • Add Dental Office
//               </NavLink>
//               <NavLink
//                 to="/edit-insurance-form"
//                 className={({ isActive }) => `dropdown-item ${isActive ? 'active' : ''}`}
//               >
//                 • Edit Insurance Form
//               </NavLink>
//               <NavLink
//                 to="/view-insurance-form"
//                 className={({ isActive }) => `dropdown-item ${isActive ? 'active' : ''}`}
//               >
//                 • View Insurance Form
//               </NavLink>
//             </div>
//           )}
//         </div>

//         <NavLink to="/task-history" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
//           🕒 Task History
//         </NavLink>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;

