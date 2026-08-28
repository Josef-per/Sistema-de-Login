export async function buscarCep(cep) {

    //tirando as caracteres que não são necessários
    const cepLimpo = cep.replace(/\D/g, "");

    //tratando alguns erros
    if (cepLimpo.length !== 8) {
        throw new Error("CEP inválido.");
    }

    //criando a tring para ser enviada para a api
    const response = await fetch(
        `https://viacep.com.br/ws/${cepLimpo}/json/`
    );

    if (!response.ok) {
        throw new Error("Erro ao consultar o CEP.");
    }

    //pegando os dados mandados e tratando eles para componentes
    const data = await response.json();

    if (data.erro) {
        throw new Error("CEP não encontrado.");
    }

    return data;
}