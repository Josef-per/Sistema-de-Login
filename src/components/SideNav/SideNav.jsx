import React from "react"
import { Shield , LayoutDashboard, User, LogOut} from "lucide-react"

import "./SideNavItem/SideNavItem"
import "./SideNav.css"
import SideNavItem from "./SideNavItem/SideNavItem"

export default function SideNav(){
    return(
        <nav className="home-SideNav">
            <div className="home-SideNav-Title">
                <Shield size={20}/>
                <h1>BitLogin</h1>
            </div>

            
            <div className="home-SideNav-ItemsList">
                <SideNavItem 
                    text="Dashboard"
                    icon={LayoutDashboard}
                    to="/Home"
                />

                <SideNavItem 
                    text="Perfil"
                    icon={User}
                    to="/Perfil"
                />
            </div>

            <div className="home-SideNav-Bottom"> 
                <div className="home-SideNav-BottomProfile">
                    <p>Usuário de teste</p>
                    <p>teste@sistema.com</p>
                </div>
                <button className ="home-SideNav-BottomLogout">
                    <LogOut size={20} />
                    <span>Sair</span>
                </button>
            </div>
        </nav>
    )
}