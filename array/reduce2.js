const alunos = [
    { nome:'João', nota: 7.3, bolsista: false},
    { nome:'Maria', nota: 9.2, bolsista: true},
    { nome:'Pedor', nota: 9.8, bolsista: false},
    { nome:'Ana', nota: 7.3, bolsista: true}
]

//Desafio 1 : Todos os alunos são bolsista ?
const todosAlunos = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosAlunos))

//Desafio2: Algum aluno é bolsista ?
const algumAluno = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumAluno))