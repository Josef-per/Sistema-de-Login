import React from "react";
import {Shield} from "lucide-react";

import "./LoginHeader.css";

export default function LoginHeader({
    title = "",
    subtitle = ""
}){
    

    return (
        <div className="login-header">
            <div className="login-icon">
                <Shield size={20} color="#5138ff"/>
            </div>
        
            <h1>{title}</h1>
        
            <p>{subtitle}</p>
        </div>
    )
}