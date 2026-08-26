import React, {useState} from "react";
import { Link } from "react-router-dom"; 
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react"
import "./Cadastro.css";

import LoginHeader from "../../components/LoginHeader/LoginHeader";
import FormInput from "../../components/FormInput/FormInput";

export default function Cadastro ({}){

    //Pegando os valores dos inputs
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    //Erros
    const [fullNameError, setFullNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    //Troca de componentes toggle
    const [showPassword, setShowPassword] = useState(false);

    return(
        <>
            <main className="cadastro-page">
                <section className="cadastro-section">
                    <LoginHeader
                        title="Criar conta"
                        subtitle="Preencha seus dados pessoais"
                    />

                    <div className="cadastro-card">
                        {/*Fazer o slides das duas partes, mais tarde*/}

                        <form className="cadastro-form-phase1" onSubmit="#">
                            {/*Fazer as verificações do cadastro do onsubmit*/}
                            
                            <FormInput 
                                label="NOME COMPLETO"
                                id="fullName"
                                type="text"
                                placeholder="João da Silva"
                                icon={<User size={18} />}
                                value={fullName}
                                onChange={(event) => setFullName(event.target.value)}
                                error={fullNameError}
                            />

                            <FormInput 
                                label="E-MAIL"
                                id="email"
                                type="email"
                                placeholder="voce@exemplo.com"
                                icon={<Mail size={18} />}
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                error={emailError}
                            />

                            <FormInput 
                                label="SENHA"
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="**********"
                                icon={<Lock size={18}/>}
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                endIcon={
                                    <button
                                        type="button"
                                        className="password-toggle"
                                        onClick = {() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword 
                                            ? <EyeOff size={17} /> 
                                            : <Eye size={17} />
                                        }
                                    </button>
                                }
                                error={passwordError}
                            />

                            <FormInput 
                                label="CONFIRMAR SENHA"
                                id="confirmPassword"
                                type="password"
                                placeholder="**********"
                                icon={<Lock  size={18} />}
                                value={confirmPassword}
                                onChange={(event) => setConfirmPassword(event.target.value)}
                                error={confirmPasswordError}
                            />

                            <button
                                type="submit"
                                className="cadastro-button"
                            >
                                Continuar
                            </button>
                        </form>

                        <div className="cadastro-divider"></div>
                        <p className="login-text">
                            Já tem uma conta
                            <Link to="/Login/Login.jsx">
                                Entrar
                            </Link>
                        </p>

                        <form className="cadastro-form-phase2" onSubmit="#">
                            {/*Fazer as verificações do cadastro do onsubmit*/}

                        </form>
                    </div>
                </section>
            </main>
        </>
    )
}
