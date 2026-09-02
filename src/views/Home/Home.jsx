import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"

import {Shield, LayoutDashboard, Calendar, User, MapPin, Cog, LogOut} from "lucide-react";

export default function Home (){

    return (
        <>
            <main className="home-Page">

                {/*Esse nav lateral vai ser reaproveitado em mais de uma tela, ent tenho que fazer ele virar um componente futuramente*/}
                <nav className="home-SideNav">

                    <div className="home-SideNav-Title">
                        <Shield size={20}/>
                        <h1>BitLogin</h1>
                    </div>

                    {/*Essa lista pode ser um componente fuuramente*/}
                    <div className="home-SideNav-ItemsList">

                        {/*Criar um componente do link para poder add as outras funções que estão disponíveis no nav como o perfil*/}
                        <Link
                            to="/Home" 
                            className="home-SideNav-Items"
                        >
                            <LayoutDashboard size={20}/>
                            <span>Dashboard</span>
                        </Link>
                    </div>

                    <div className="home-SideNav-Bottom"> 
                        <div className="home-SideNav-BottomProfile">
                            <p>Usuário de teste</p>
                            {/*Funciona como um pequeno subtitle, mas os dois tem que ser pequenos, por isso do p*/}
                            <p>teste@sistema.com</p>
                        </div>
                        <button className ="home-SideNav-BottomLogout">
                            <LogOut size={20} />
                            <span>Sair</span>
                        </button>
                    </div>
                </nav>
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