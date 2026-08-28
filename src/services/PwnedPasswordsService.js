
//função para transformar tudo em SHA-1, para passar para a API
async function gerarHash(password) {
    const encoder = new TextEncoder();

    const data = encoder.encode(password);

    const hashBuffer = await crypto.subtle.digest(
        "SHA-1",
        data
    );

    const hashArray = Array.from(
        new Uint8Array(hashBuffer)
    );

    const hash = hashArray
        .map(byte => byte.toString(16).padStart(2, "0"))
        .join("")
        .toUpperCase();

    return hash;
}

export async function pwnedPassword(password) {

    const hash = await gerarHash(password);

    //pegando os 5 primeiros
    const prefix = hash.slice(0, 5);
    const suffix = hash.slice(5);

    //requisição para a API
    const response = await fetch(
        `https://api.pwnedpasswords.com/range/${prefix}`
    )

    const data = await response.text();

    const linhas = data.split("\n");

    const encontrado = linhas.find(linha =>
        linha.startsWith(suffix)
    );

    //Verificando se retornou algum vazamento de senha
    if (!encontrado) {
        return 0;
    }

    const partes = encontrado.split(":");

    const quantidade = Number(partes[1]);

    return quantidade;


}
