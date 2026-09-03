import React from "react";

import SideNav from "../../components/SideNav/SideNav";
import "./Perfil.css" 

export default function Perfil(){
    return (
        <>
            <main className="perfil-page">
                <SideNav />

                <div className="perfil-Infos">
                    <div className="perfil-Infos-Title">
                        <h1>Meu perfil</h1>
                        <p>gerencie suas informações pessoais</p>
                    </div>

                    <div className="perfil-Infos-CampoPessoal">

                    </div>

                    <div className="perfil-Infos-CampoEndereco">

                    </div>

                    <div className="perfil-Infos-CampoAcessos">

                    </div>
                </div>
            </main>
        </>
    )
}