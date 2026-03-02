//  Declaração do objeto literal 'aluno'
const aluno = {
  nome: "Thaís Maria",
  idade: 33,
  notas: [8.5, 7.0, 9.0],

  // Método para calcular a média
  calcularMedia() {
    const soma = this.notas.reduce((acc, nota) => acc + nota, 0);
    return (soma / this.notas.length).toFixed(1);
  }
};

// Utilizando Desestruturação para acessar propriedades
const { nome, idade } = aluno;

// Usando Spread Operator para adicionar uma nova nota (ex: nota de participação)
aluno.notas = [...aluno.notas, 10];

// Função para verificar a situação do aluno
function verificarSituacao(media) {
  return media >= 7 ? "APROVADO(A)" : "REPROVADO(A)";
}

// --- EXIBIÇÃO DOS RESULTADOS ---

console.log(`--- Sistema Escolar ---`);
console.log(`Aluno: ${nome}`);
console.log(`Idade: ${idade} anos`);

console.log("Notas registradas:");
// Utilizando loop para exibir todas as notas
for (let i = 0; i < aluno.notas.length; i++) {
  console.log(`- Nota ${i + 1}: ${aluno.notas[i]}`);
}

const mediaFinal = aluno.calcularMedia();
const situacao = verificarSituacao(mediaFinal);

console.log(`-----------------------`);
console.log(`Média Final: ${mediaFinal}`);
console.log(`Situação: ${situacao}`);