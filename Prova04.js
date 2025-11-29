// Criar um programa de gerenciamento de lista
let lista = [];

let listaDeCompras = ["teclado", "mouse sem fio", "fones de ouvido"];
for (let item of listaDeCompras){
    console.log(item);
}

let item = prompt("Digite o nome de mais um item a lista de compras: ");
listaDeCompras.push(item);

let indice = parseInt(prompt("Digite o indice do item que será substituido: "));
listaDeCompras.splice(indice, 1);

let novoItem = prompt("Digite o nome do novo item da lista: ");
listaDeCompras[indice] = novoItem;

for( let item of listaDeCompras){
    console.log(item);
}
for (let i = 0; i < listaDeCompras.length; i++) {
    console.log(i, listaDeCompras[i]);

}
