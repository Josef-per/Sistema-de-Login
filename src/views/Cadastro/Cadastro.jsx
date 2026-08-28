import React, {useState} from "react";
import { Link } from "react-router-dom"; 
import { User, Mail, Lock, Eye, EyeOff, MapPin, Hash, Building2, CircleCheck } from "lucide-react"
import "./Cadastro.css";

import LoginHeader from "../../components/LoginHeader/LoginHeader";
import FormInput from "../../components/FormInput/FormInput";
import RegisterSteps from "../../components/RegisterSteps/RegisterSteps";

import { validatePersonalData, validateAddress } from "../../utils/CadastroValidatioin";
import { buscarCep } from "../../services/ViaCepService"

export default function Cadastro (){

    //Pegando os valores dos inputs
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    //Segunda parte do cadastro
    const [cep, setCep] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [uf, setUf] = useState("");

    //Erros
    const [fullNameError, setFullNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    //segunda parte do cadastro
    const [cepError, setCepError] = useState("");
    const [logradouroError, setLogradouroError] = useState("");
    const [numeroError, setNumeroError] = useState("");
    const [bairroError, setBairroError] = useState("");
    const [cidadeError, setCidadeError] = useState("");
    const [ufError, setUfError] = useState("");

    //requisitos de senha
    const passwordRequirements = {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        number: /[0-9]/.test(password),
        special: /[^A-Za-z0-9]/.test(password),
    };


    //Troca de componentes toggle
    const [showPassword, setShowPassword] = useState(false);

    //alguns controladores de estado
    const [step, setStep] = useState(1);
    const [passwordRequirementsView, setPasswordRequirementsView] = useState("none")


    //funcionalidades
    function handleNextStep() {
        const errors = validatePersonalData({
            fullName,
            email,
            password,
            confirmPassword,
            passwordRequirements
        });

        setFullNameError(errors.fullName || "");
        setEmailError(errors.email || "");
        setPasswordError(errors.password || "");
        setConfirmPasswordError(errors.confirmPassword || "");

        if (Object.keys(errors).length > 0) {
            return;
        }

        setStep(2);
    }

    function handleSubmit(event) {
        event.preventDefault();

        const errors = validateAddress({
            cep,
            logradouro,
            numero,
            bairro,
            cidade,
            uf
        });

        setCepError(errors.cep || "");
        setLogradouroError(errors.logradouro || "");
        setNumeroError(errors.numero || "");
        setBairroError(errors.bairro || "");
        setCidadeError(errors.cidade || "");
        setUfError(errors.uf || "");

        if (Object.keys(errors).length > 0) {
            return;
        }

        console.log("Cadastro válido.");
    }

    //api via cep
    async function handleBuscarCep() {
        try {
            setCepError("");

            const data = await buscarCep(cep);

            setLogradouro(data.logradouro);
            setBairro(data.bairro);
            setCidade(data.localidade);
            setUf(data.uf);

        } catch (error) {
            setCepError(error.message);
        }
    }

    return(
        <>
            <main className="cadastro-page">
                <section className="cadastro-section">
                    <LoginHeader
                        title={step === 1 ? "Criar conta" : "Seu endereço"}
                        subtitle={step === 1 
                            ? "Preencha seus dados pessoais"
                            : "Informe onde você está localizado"
                        }
                    />

                    <div className="cadastro-card">
                        {/*Fazer o slides das duas partes, mais tarde*/}

                        <RegisterSteps step={step} />

                        <form className="cadastro-form" onSubmit={handleSubmit}>
                            {/*Fazer as verificações do cadastro do onsubmit*/}

                            {step === 1 &&(
                                <>
                                    <div className="Cadastro-formPhase">
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
                                            onChange={(event) => {
                                                setPassword(event.target.value)
                                                setPasswordRequirementsView("block")
                                            }}
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

                                        {/*Requisitos de senha*/}

                                        <div className="password-requirements" style={{ display: passwordRequirementsView }}>
                                            <p>REQUISITOS DA SENHA</p>

                                            <span className={passwordRequirements.length ? "valid" : ""}>
                                                <CircleCheck size={17}/> Mínimo 8 caracteres
                                            </span>

                                            <span className={passwordRequirements.uppercase ? "valid" : ""}>
                                                <CircleCheck size={17}/> Uma letra maiúscula
                                            </span>

                                            <span className={passwordRequirements.number ? "valid" : ""}>
                                                <CircleCheck size={17}/>  Um número
                                            </span>

                                            <span className={passwordRequirements.special ? "valid" : ""}>
                                                <CircleCheck size={17}/> Um caractere especial
                                            </span>
                                        </div>


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
                                            type="button"
                                            className="cadastro-button"
                                            onClick={handleNextStep}
                                        >
                                            Continuar
                                        </button>

                                    </div>
                                </>
                            )}

                            {step === 2 && (
                                <>
                                    <div className="cadastro-formPhase">
                                        <FormInput
                                            label="CEP"
                                            id="cep"
                                            type="text"
                                            placeholder="00000-000"
                                            icon={<MapPin size={18} />}
                                            value={cep}
                                            onChange={(event) => setCep(event.target.value)}
                                            onBlur={handleBuscarCep}
                                            error={cepError}
                                        />

                                        <div className="address-row">
                                            <div className="address-street">
                                                <FormInput
                                                    label="LOGRADOURO"
                                                    id="logradouro"
                                                    type="text"
                                                    placeholder="Rua, Avenida..."
                                                    value={logradouro}
                                                    onChange={(event) => setLogradouro(event.target.value)}
                                                    error={logradouroError}
                                                />
                                            </div>

                                            <div className="address-number">
                                                <FormInput
                                                    label="NÚMERO"
                                                    id="numero"
                                                    type="text"
                                                    placeholder="123"
                                                    icon={<Hash size={18} />}
                                                    value={numero}
                                                    onChange={(event) => setNumero(event.target.value)}
                                                    error={numeroError}
                                                />
                                            </div>
                                        </div>

                                        <FormInput
                                            label={
                                                <>
                                                    COMPLEMENTO
                                                    <span className="optional-label"> (opcional)</span>
                                                </>
                                            }
                                            id="complemento"
                                            type="text"
                                            placeholder="Apto, Bloco, Sala..."
                                            value={complemento}
                                            onChange={(event) => setComplemento(event.target.value)}
                                        />

                                        <FormInput
                                            label="BAIRRO"
                                            id="bairro"
                                            type="text"
                                            placeholder="Nome do bairro"
                                            value={bairro}
                                            onChange={(event) => setBairro(event.target.value)}
                                            error={bairroError}
                                        />

                                        <div className="address-row">
                                            <div className="address-city">
                                                <FormInput
                                                    label="CIDADE"
                                                    id="cidade"
                                                    type="text"
                                                    placeholder="São Paulo"
                                                    icon={<Building2 size={18} />}
                                                    value={cidade}
                                                    onChange={(event) => setCidade(event.target.value)}
                                                    error={cidadeError}
                                                />
                                            </div>

                                            <div className="address-state">
                                                <label className="form-label" htmlFor="uf">
                                                    ESTADO
                                                </label>

                                                <div className="select-wrapper">
                                                    <select
                                                        id="uf"
                                                        value={uf}
                                                        onChange={(event) => setUf(event.target.value)}
                                                    >
                                                        <option value="">UF</option>
                                                        <option value="AC">AC</option>
                                                        <option value="AL">AL</option>
                                                        <option value="AP">AP</option>
                                                        <option value="AM">AM</option>
                                                        <option value="BA">BA</option>
                                                        <option value="CE">CE</option>
                                                        <option value="DF">DF</option>
                                                        <option value="ES">ES</option>
                                                        <option value="GO">GO</option>
                                                        <option value="MA">MA</option>
                                                        <option value="MT">MT</option>
                                                        <option value="MS">MS</option>
                                                        <option value="MG">MG</option>
                                                        <option value="PA">PA</option>
                                                        <option value="PB">PB</option>
                                                        <option value="PR">PR</option>
                                                        <option value="PE">PE</option>
                                                        <option value="PI">PI</option>
                                                        <option value="RJ">RJ</option>
                                                        <option value="RN">RN</option>
                                                        <option value="RS">RS</option>
                                                        <option value="RO">RO</option>
                                                        <option value="RR">RR</option>
                                                        <option value="SC">SC</option>
                                                        <option value="SP">SP</option>
                                                        <option value="SE">SE</option>
                                                        <option value="TO">TO</option>
                                                    </select>
                                                </div>
                                                {ufError && (
                                                    <span className="form-error">
                                                        {ufError}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        <div className="cadastro-actions">
                                            <button
                                                type="button"
                                                className="cadastro-back-button"
                                                onClick={() => setStep(1)}
                                            >
                                                Voltar
                                            </button>

                                            <button
                                                type="submit"
                                                className="cadastro-button"
                                                onClick={handleSubmit}
                                            >
                                                Criar conta
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}
                        </form>

                        <div className="cadastro-divider"></div>

                        <p className="login-text">
                            Já tem uma conta
                            <Link to="/">
                                Entrar
                            </Link>
                        </p>

                    </div>
                </section>
            </main>
        </>
    )
}
