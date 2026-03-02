// Criação do Objeto Literal

const aluno = {

  nome: "Thais Maria",

  notas: [7.5, 8.0, 9.5],



  // Método para calcular a média

  calcularMedia() {

    const soma = this.notas.reduce((acc, nota) => acc + nota, 0);

    return (soma / this.notas.length).toFixed(2);

  }

};



// Desestruturação (Destructuring é útil quando o objeto tem muitas propriedades e você só precisa de algumas delas.)

// Extraímos a propriedade 'nome' diretamente para uma variável

const { nome } = aluno;

console.log(`Aluno: ${nome}`);



// Spread Operator (...)(com esse metodo abrimos o array anterior e isso permite inserir novos elementos.)

// Adicionando uma nova nota ao array original de forma imutável ou direta

aluno.notas = [...aluno.notas, 10]; 



console.log(`Notas atualizadas: ${aluno.notas}`);


console.log(`Média final: ${aluno.calcularMedia()}`);
