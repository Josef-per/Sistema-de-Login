import React from "react";

import "./LoginHeader.css";

export default function LoginHeader(){
    return (
        <div className="login-header">
            <div className="login-icon">
                <Shield size={20} color="#5138ff"/>
            </div>
        
            <h1>Entrar na conta</h1>
        
            <p>Acesse o sistema com suas credencias</p>
        </div>
    )
}