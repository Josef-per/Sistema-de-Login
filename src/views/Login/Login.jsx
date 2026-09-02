import React, {useState}  from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css"

//importando os ícones
import { Mail, Lock, Eye, EyeOff} from "lucide-react"

//importando componentes
import FormInput from "../../components/FormInput/FormInput";
import LoginHeader from "../../components/LoginHeader/LoginHeader";


//telinha
export default function Login(){

    //tratando oestado do btn de senha
    const [showPassword, setShowPassword] = useState(false);

    //tratando das informações presentes no react
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //estados de testes de erros
    const [emailError, setErrorEmail] = useState("");
    const [passwordError, setErrorPassword] = useState("");

    //navegações
    const navigation = useNavigate();

    //funções

    //verificar campos
    function handleSubmit (event) {
        event.preventDefault();

        let formIsValid =  true;

        
        setErrorEmail("");
        setErrorPassword("");

        //validações dos campos
        //validação do email.
        if (email.trim() === ""){
            setErrorEmail("Informe o seu e-mail.");
            formIsValid = false;
        } else if (!email.includes("@")) {
            setErrorEmail("Informe um e-mail válido.");
            formIsValid = false;
        }

        //validação de senha
        if (password.trim() === ""){
            setErrorPassword("Informe a sua senha.");
            formIsValid = false;
        }

        if (formIsValid){
            navigation("/Home");
        } else {
            return
        }
        
        console.log("Login realizado com sucesso");
        console.log({
            email, 
            password
        })
    }

    //front-end da minha telinha
    return(
        <>
            <main className="login-page">
                <section className="login-container">

                    <LoginHeader 
                        title="Entrar na conta"
                        subtitle="Acesso o sistema com suas credenciais"    
                    />

                    <div className="login-card">

                        <form className="login-form" onSubmit={handleSubmit}>

                            <FormInput
                                label="E-MAIL"
                                id="email"
                                type="email"
                                placeholder="voce@exemplo.com"
                                icon={<Mail size={18} />}
                                value = {email}
                                onChange = {(event) => setEmail(event.target.value)}
                                error={emailError}
                            />

                            <FormInput
                                label="SENHA"
                                id="password"
                                type= {showPassword ? "text" : "password"}
                                placeholder="**********"
                                icon={<Lock size={18} />}
                                endIcon={
                                    <button 
                                        type="button" 
                                        className="password-toggle"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword
                                            ? <EyeOff size={17}/>
                                            : <Eye size={17}/>
                                        }
                                    </button>
                                }
                                value={password}
                                onChange = {(event) => setPassword(event.target.value)}
                                error={passwordError}
                            />
                           <Link
                                to="#"
                                className="forgot-password"
                            >
                                Esqueci a senha
                            </Link>

                            <button 
                                type="submit" 
                                className="login-button"       
                            >
                                Entrar
                            </button>
                        </form>

                        <div className="login-divider"> </div>
                        <p className="register-text">
                            Não tem uma conta?

                            <Link to="/Cadastro">
                                Criar conta
                            </Link>
                        </p>
                    </div>

                </section>
            </main>
        </>
    );
};