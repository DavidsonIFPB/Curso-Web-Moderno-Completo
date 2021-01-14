function rand ([min = 0, max = 1000] = [0, 1000]) {
    if (max < min ) [max, min] = [ min, max]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)

}
console.log(rand([50,40]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))
console.log(rand())