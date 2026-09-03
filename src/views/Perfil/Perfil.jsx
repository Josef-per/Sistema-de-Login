import React from "react";
import { PencilLine, User, RotateCcwClock, CircleSmall, Clock, Email } from "lucide-react";

import FormInput from "../../components/FormInput/FormInput";
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

                        {/*Fazer com que isso seja um componente futuramente*/}
                        <div className="perfil-Infos-CamposHead">
                            <p>Informações pessoais</p>
                            <button>
                                <PencilLine size={15} />
                                <span>Editar</span>
                            </button>
                        </div>

                        {/*Fazer com que isso seja um componente futuramente*/}
                        <div className="perfil-Infos-Campos">
                            <User size={15} />
                            <div className="perfil-Infos-CamposInfos">
                                <p>NOME</p>
                                <p>Usuário de Teste</p>
                            </div>   
                        </div>

                        {/*Esse seria outro estado dessa parte, onde o btn de editar fosse clicado, os capos como input devem ficar disponíveis*/}

                        <form>
                            {/*Esses forms são mt semelhantes ao de login e cadastro, vou refatorar eles para poder reutilizar como estados aqui nessa tela de perfil*/}
                        </form>
                    </div>

                    <div className="perfil-Infos-CampoEndereco">
                        {/*Repetir tudo mas com os componentes do campo a cima*/}
                    </div>

                    <div className="perfil-Infos-CampoAcessos">
                        
                        <div className="perfil-Infos-CampoAcessos-Head">
                            <RotateCcwClock size={15} />
                            <p>Histórico de acesso</p>
                            {/*Nessa parte vai ser disponível o histórico dos 5 acessos feitos*/}
                            <span>Últimos 5 acesso</span>
                        </div>  

                        {/*Essa parte deve ser um componente futuramente*/}
                        <div className="perfil-Infos-CampoAcessos-Acessos">
                            {/*Para a sessão ativa deve ficar verde e para outras sessões cinza, como se tivesse desativado */}
                            <CircleSmall siz={15} />
                            <div>
                                <Clock size={15} />
                                <p>03/09/2026, 12:52</p>
                            </div>
                            {/*Se não for a sessão ativa os status não devem estar aparecendo na tela*/}
                            <p id="Status">Atual</p>
                        </div>

                    </div>
                </div>
            </main>
        </>
    )
}