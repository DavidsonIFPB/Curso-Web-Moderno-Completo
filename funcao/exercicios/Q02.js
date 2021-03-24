function triangulo( ld1, ld2, ld3){
    if (ld1 == ld2 && ld2 == ld3) console.log('Equilátero')
    else if (ld1 == ld2 || ld2 == ld3 || ld3 == ld1) console.log('Isóceles')
    else console.log('Escaleno')
}

triangulo(3,4,5)
