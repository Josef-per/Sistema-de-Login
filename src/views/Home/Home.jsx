import React from "react";
import { Link } from "react-router-dom";
import { Calendar, User, MapPin, Cog } from "lucide-react";

import SideNav from "../../components/SideNav/SideNav";
import "./Home.css"

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
                    
                    {/*Posso fazer essa parte virar um componente futuramente*/}
                    <div className="home-Dashboard-CardsList">
                        <div className="home-Dashboard-Card">
                            <Calendar size={20} />
                            <p>CONTA CRIADA EM:</p>
                            <p>02 de Setembro de 2026</p>
                        </div>
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

                        <Link >
                            <Cog size={15} />
                            <span>Gerenciar Perfil</span>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}