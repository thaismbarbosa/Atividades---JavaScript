// Gerenciador de Tarefas

let listaTarefas = [];
let opcao = "";

//Adicionar tarefa (funções anônimas)
let adicionarTarefa = function(tarefa){
    listaTarefas.push(tarefa);
};

//Listar tarefas
const listarTarefas = () => {
    if (listarTarefas.length === 0) {
        console.log("Nenhuma tarefa cadastrada.");
    } else {
        console.log("Lista de tarefas:");
        listaTarefas.forEach((tarefa, indice) => {
            console.log(indice + " - " + tarefa);
        });
    }
};

//Criando a função Callback
function gerenciarTarefas(Callback) {
    if(listarTarefas.length === 0) {
        console.log("Não há tarefas!");
    } else {
        let indice = parseInt(prompt("Digite o índice da tarefa: "));
        if (indice >= 0 && indice < listarTarefas.length){
            Callback(indice);

        } else {
            console.log("Índice inválido!");
        }
    }
};

//Usando a função Callback

const removerTarefa = (indice) => {
    listaTarefas.splice(indice, 1);
    console.log("Tarefa removida com sucesso!");
};

const concluirTarefa = (indice) => {
    listarTarefas[indice] = "✅" + listarTarefas[indice];
    console.log("Tarefa marcada como concluída!");
};


//Criando menu 
while (opcao !== "5") {
    opcao =  prompt(
        "Digite uma opção:\n" +
        "1. Adicionar\n" + 
        "2. Listar\n" + 
        "3. Remover\n" +
        "4. Tarefa Concluida\n" +
        "5. Sair "
    );

//Utilizando o switch case
switch (opcao) {

    case "1": 
        let nomeDaTarefa = prompt("O que você precisa fazer? ");
        adicionarTarefa(nomeDaTarefa);
        console.log("Tarefa adicionada com sucesso!");

    break;

       
    case "2": 
        listarTarefas();
    
    break;


    case "3": 
        gerenciarTarefas(removerTarefa);
    
    break;


    case "4": 
        gerenciarTarefas(concluirTarefa);
    
    break;


    case "5": 
        console.log("Programa encerrado!");
    
        break;

    default:
        console.log("Opção inválida. Tente novamente.");
        
    }
};

    

