import React from "react";
import { Link } from "react-router-dom";

export default function SideNavItem({
    to = "text",
    icon : Icon,
    text = "text"

}) {
    return(
        <Link
            to={to}
            className="home-SideNav-Items"
        >
            <Icon size={20} />
            <span>{text}</span>
        </Link>
    )
}