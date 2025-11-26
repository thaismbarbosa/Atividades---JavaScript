//Utilizando operadores ternários

const idade = parseInt(prompt("Digite sua idade: "));
const statusUsuario = prompt("Qual é seu status? (registrado ou não registrado)");

const statusIdade = idade >= 18 ? "Maior de Idade" : "Menor de Idade";
console.log(`Classificação: ${statusIdade}`);

switch(statusUsuario) {
    case "registrado":
        console.log("Seja Bem-vindo!");
        break;
    case "não registrado":
        console.log("Por favor, complete seu registro!");
        break;
    default:
        console.log("Status desconhecido!");
}

if (idade >= 18 && statusUsuario === "registrado"){
    console.log("Acesso completo!");
}
else if (idade < 18 || statusUsuario === "não registrado"){
    console.log("Acesso limitado, complete seu cadastro!")
}