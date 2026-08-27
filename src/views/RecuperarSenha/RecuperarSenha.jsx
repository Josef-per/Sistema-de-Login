import React, {useState} from "react";
import {Link, Mail, CircleCheck} from "react-router-dom";
import {ArrowLeft} from "lucide-react";
import LoginHeader from "../../components/LoginHeader/LoginHeader";
import FormInput from "../../components/FormInput/FormInput";

//Pra essa tela vai faltar a função de enviar o email e fazer toda a estilização da página
//Além disso fazer testes e caçar bugs, e os estados que ainda não foram configurados

export default function ForgotPassword (){

    //pegando os valores dos campos
    const [email, setEmail] = useState("");

    //tratando erros da página
    const [emailError, setEmailError] = useState("");


    //função de verificação do form
    function verifyForm (event){
        event.preventDefault();

        let formValid = true;
        let numberTrys = 3;

        setEmailError("");


        //Validando o número de tentativas
        if (numberTrys <= 0){
            setEmailError("Número de tentativas excedidas, tente mais tarde")
            formValid = false;
        } else {
            //fazendo as validações
            if(email.trim() === ""){
                setEmailError("Informe o seu e-mail");
                formValid = false;
            } else if (!email.includes("@")){
                setEmailError("Informe um e-mail válido");
            }
        }

        //varificando o formulário
        if(!formValid){
            return;
        }

        console.log("Chamado realizado com sucesso");
        console.log({
            email, 
            password
        })

        
    }

    return(
        <>
            <main className="forgotPassword-page">
                <section className="forgotPassword-container">
                    <LoginHeader 
                        title="Recuperar Senha"
                        subtitle="Informe seu e-mail para receber as instruções"
                    />

                    <div className="forgotPassword-card">
                        {/*Fazer a função de verificação no submit dps*/}
                        <form className="forgotPassword-form" onSubmit={verifyForm}>

                            <Link
                                to="/Login"
                                className="login-page"
                            >
                                <div className="login-link">
                                    <ArrowLeft size={17}/>
                                </div>
                                <span className="login-text">
                                    Voltar para o login
                                </span>
                            </Link>

                            <FormInput 
                                label="E-MAIL CADASTRADO"
                                id="email"
                                type="email"
                                placeholder="voce@exemplo.com"
                                icon={<Mail sieze={18}/>}
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                error={emailError}
                            />

                            {/*Btn de envio para a próxima etapa*/}
                            <buttom 
                                type="submit"
                                className="forgotPassword-buttom"
                            >
                                Enviar Instruções
                            </buttom>
                        </form>

                        {/*Essa vai ser a mensagem de confirmação caso tudo esteja funcionando*/}
                        <div className="forgotPassword-confirm">
                            <div className="forgotPassword-confimIcon">
                                {/*Depois trocar essas cores por um verde bem bonitinho e fiel ao protótipo*/}
                                <CircleCheck size={20} color="#5138ff"/>
                            </div>
                            <p>{subtitle}</p>
                            <Link
                                to="/Login"
                                className="forgotpassword-confirmLink"
                            >
                                Voltar para o login
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}