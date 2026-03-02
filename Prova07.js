let listaNomes = ["Ana", "Bruno", "Carla"];
let continuar = true;

console.log("--- Gerenciador de Nomes Iniciado ---");

while (continuar) {
  const opcao = prompt(
    "Escolha uma opção:\n1. Adicionar Nome\n2. Filtrar por Letra\n3. Buscar Nome Exato\n4. Transformar em Maiúsculas\n5. Verificar Tamanho Mínimo\n6. Sair"
  );

  switch (opcao) {
    case "1":
      // Adicionar Nomes com push()
      const novoNome = prompt("Digite o nome para adicionar:");
      if (novoNome) {
        listaNomes.push(novoNome);
        console.log("Lista Atualizada:", listaNomes);
      }
      break;

    case "2":
      // Filtrar Nomes com filter()
      const letra = prompt("Filtrar nomes que começam com a letra:").toUpperCase();
      const filtrados = listaNomes.filter(nome => nome.toUpperCase().startsWith(letra));
      console.log(`Nomes que começam com "${letra}":`, filtrados);
      break;

    case "3":
      // Buscar Nome com find()
      const busca = prompt("Digite o nome exato que deseja buscar:");
      const encontrado = listaNomes.find(nome => nome.toLowerCase() === busca.toLowerCase());
      console.log(encontrado ? `Nome encontrado: ${encontrado}` : "Nome não encontrado na lista.");
      break;

    case "4":
      // Transformar com map()
      const nomesMaiusculos = listaNomes.map(nome => nome.toUpperCase());
      console.log("Lista em Maiúsculas:", nomesMaiusculos);
      break;

    case "5":
      // Verificar com every()
      const todosLongos = listaNomes.every(nome => nome.length > 3);
      console.log("Todos os nomes têm mais de 3 caracteres?", todosLongos);
      break;

    case "6":
      console.log("Encerrando programa...");
      continuar = false;
      break;

    default:
      console.log("Opção inválida. Tente novamente.");
  }
}