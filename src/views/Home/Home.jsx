import React from "react";
import { Link } from "react-router-dom";
import { Calendar, User, MapPin, Cog, Clock, FingerprintPattern} from "lucide-react";

import SideNav from "../../components/SideNav/SideNav";
import "./Home.css"
import DashboardCards from "../../components/DashboardCards/DashboardCards";

export default function Home(){

    return (
        <>
            <main className="home-Page">

                {/*Esse nav lateral vai ser reaproveitado em mais de uma tela, ent tenho que fazer ele virar um componente futuramente*/}
                
                <SideNav />

                <div className="home-Dashboard">
                    <div className="home-Dashboard-Title">
                        <h1>Olá, Usuário</h1>
                        <p>Aqui está um resumo da sua atividade</p>
                    </div>
                    
                    <div className="home-Dashboard-CardsList">

                        <DashboardCards 
                            title="CONTA CRIADA EM"
                            info="02 de setembro de 2026"
                            icon={Calendar}
                        />

                        <DashboardCards 
                            title="ÚLTIMO ACESSO"
                            info="02/08/2026"
                            icon={Clock}
                        />

                        <DashboardCards 
                            title="TOTAL DE ACESSOS"
                            info="2 Acessos"
                            icon={FingerprintPattern}
                        />

                    </div>

                    <div className="home-Dashboard-Profile">

                        <div className="home-Dashboard-Infos">
                            <User size={20} />
                            <div className="home-Dashboard-InfosItens">
                                <h3>Usuário de teste</h3>
                                <p>teste@sistema.com</p>

                                <div className="home-Dashboard-InfosLocal">
                                    <MapPin size={15} />
                                    <p>São Paulo, <span>Sp</span></p>
                                </div>

                            </div>  
                        </div>

                        <Link to="/Perfil">
                            <Cog size={15} />
                            <span>Gerenciar Perfil</span>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}