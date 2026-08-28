
//validação da primeira etapa
export function validatePersonalData({

    fullName,
    email,
    password,
    confirmPassword,
    passwordRequirements

}) {
    const errors = {};

    if (fullName.trim() === "") {
        errors.fullName = "Informe seu nome completo.";
    }

    if (email.trim() === "") {
        errors.email = "Informe seu e-mail.";
    }

    if (password === "") {
        errors.password = "Informe uma senha.";
    } else if (
        !passwordRequirements.length ||
        !passwordRequirements.uppercase ||
        !passwordRequirements.number ||
        !passwordRequirements.special
    ) {
        errors.password = "A senha não atende aos requisitos.";
    }

    if (confirmPassword === "") {
        errors.confirmPassword = "Confirme sua senha.";
    } else if (password !== confirmPassword) {
        errors.confirmPassword = "As senhas não coincidem.";
    }

    return errors;
}

//validação da segunda etapa
export function validateAddress({
    cep,
    logradouro,
    numero,
    bairro,
    cidade,
    uf
}) {
    const errors = {};

    if (cep.trim() === "") {
        errors.cep = "Informe o CEP.";
    }

    if (logradouro.trim() === "") {
        errors.logradouro = "Informe o logradouro.";
    }

    if (numero.trim() === "") {
        errors.numero = "Informe o número.";
    }

    if (bairro.trim() === "") {
        errors.bairro = "Informe o bairro.";
    }

    if (cidade.trim() === "") {
        errors.cidade = "Informe a cidade.";
    }

    if (uf.trim() === "") {
        errors.uf = "Informe o estado.";
    }

    return errors;
}
