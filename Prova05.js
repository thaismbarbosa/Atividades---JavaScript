// Gerenciador de Tarefas

let listaTarefas = [];
let opcao = "";

while (opcao !== "5") {
    opcao =  prompt(
        "Digite uma opção:\n" +
        "1. Adicionar\n" + 
        "2. Listar\n" + 
        "3. Remover\n" +
        "4. Tarefa Concluida\n" +
        "5. Sair "
    );

    switch (opcao) {
//Adicionar tarefa
        case "1": {
            let nomeDaTarefa = prompt("O que você precisa fazer? ");
            listaTarefas.push(nomeDaTarefa);
            console.log("Tarefa adicionada com sucesso!");
            break;
        }
//Listar tarerfas        
        case "2": {
            if (listaTarefas.length === 0){
                console.log("Nenhuma tarefa cadastrada.");
            } else {
                console.log("Lista de tarefas: ");
                for( let i = 0; i < listaTarefas.length; i++) {
                console.log(i + " - " + listaTarefas.length[i]);
                }
        }
        break;
    }
// Remover tarefa
        case "3": {
            if(listaTarefas.length === 0){
                console.log("Não há tarefas para remover.");
            } else {
                let indice = parseInt(prompt("Digite o indice da tarefa que deseja remover: "));
                if (indice >= 0 && indice < listaTarefas.length){
                    listaTarefas.splice(indice, 1);
                    console.log("Tarefa removida com sucesso!");
                } else{
                    console.log("Indice invalido.")
                }
                }
                break;

            }
        case "4": {
            if(listaTarefas.length === 0){
                console.log("Não há tarefas para concluir.");
            } else {
                let indice = parseInt(prompt("Digite o indice da tarefa concluída: "));

                if (indice >= 0 && indice < listaTarefas.length) {
                    listaTarefas[indice] = "✅" + listaTarefas[indice];
                    console.log("Tarefa marcada com concluída!");
                } else {
                    console.log("Indice inválido.");
                }
            }
            break;
        }
// Sair do programa
        case "5": {
            console.log("Programa encerrado!");
            break;
        }
        default:
            console.log("Opção inválida. Tente novamente.");
        }
        
};
