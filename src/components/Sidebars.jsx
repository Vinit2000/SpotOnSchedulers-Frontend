import React from "react";
import { Link } from "react-bootstrap-icons";

function Sidebar(){

    return(
        <div>
<nav>
    <ul>
        <li><Link to="#">Master Form</Link></li>
        <li>
            <span>Office</span>
            <ul>
                <li>Add Dental Office</li>
                <li>Edit Insurance Form</li>
                <li>View Insurance Form</li>
            </ul>
        </li>
    </ul>
</nav>
        </div>
    );
};

export default Sidebar;