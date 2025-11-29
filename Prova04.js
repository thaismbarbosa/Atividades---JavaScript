// Criar um programa de gerenciamento de lista
let lista = [];

let listaDeCompras = ["teclado", "mouse sem fio", "fones de ouvido"];
for (let item of listaDeCompras){
    console.log(item);
}

let item = prompt("Digite mais um item a lista de compras: ");
listaDeCompras.push(item);

let indice = parseInt(prompt("Digite o item que será substituido: "));
listaDeCompras.splice(indice, 1);

let novoItem = prompt("Digite o novo item da lista: ");
listaDeCompras[indice] = novoItem;

for( let item of listaDeCompras){
    console.log(item);
}
for (let i = 0; i < listaDeCompras.length; i++) {
    console.log(i, listaDeCompras[i]);
}