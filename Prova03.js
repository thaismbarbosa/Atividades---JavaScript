const nomes = [];

while(true) {
    const entrada = prompt("Digite um nome (oou 'sair' para finalizar)");

    if(entrada === "sair") {
        break;

    }
    nomes.push(entrada);

}

console.log("=== Lista com índices (for) ===");
for (let i = 0; i < nomes.length; i++){
    console.log(`${i + 1}: ${nomes[i]}`)
}

console.log("=== Mensagens personalizadas (for...of) ===");
for (const nome of nomes ){
    console.log(`Bem-vindo(a), ${nome}!`)
}