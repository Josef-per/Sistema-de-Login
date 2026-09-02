import React from "react";

import "./DashboardCards.css"

export default function DashboardCards({
    title = "text",
    info = "text",
    icon: Icon
}){
    return(
        <div className="home-Dashboard-Card">
            <Icon size={20} />
            <p>{title}</p>
            <p>{info}</p>
        </div>
    )  
}