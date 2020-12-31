const escola = "Cod3r"

console.log(escola.charAt(4))//Retorna o caractere da posição indicada
console.log(escola.charAt(5))// Não dá erro, retorna apenas vazio
console.log(escola.charCodeAt(3))// Tabela unicode
console.log(escola.indexOf("3"))//Retorna a posição do caractere

console.log(escola.substring(1))
console.log(escola.substring(0,3))

console.log('Escola '.concat(escola).concat("!"))
console.log("Escola "+escola+"!")
console.log(escola.replace(3,'e'))//Subsitui caractere na posição indicada

console.log("Ana,Maria,Pedro".split(","))