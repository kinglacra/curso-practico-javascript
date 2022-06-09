function alturaTriangulo(lado1grande, lado2grande, basegrande){
    if (lado1grande != lado2grande) {
        console.error("los lados 1 y 2 no son iguales");
    } else {
        const lado2pequeño = basegrande / 2;
        const basepequena = lado1grande;

        const lado2pequeñocuadrado = lado2pequeño * lado2pequeño;
        const basepequenacuadrado = basepequena * basepequena;
        const lado1pequeno = Math.sqrt(basepequenacuadrado - lado2pequeñocuadrado);

        const altura = lado1pequeno;
        return(altura);
    }
}

function calcularAlturaTriangulo() {
    const input1 = document.getElementById("inputLado1");
    const input2 = document.getElementById("inputLado2");
    const input3 = document.getElementById("inputBase");

    const value1 = input1.value;
    const value2 = input1.value;
    const value3 = input1.value;

    const altura = alturaTriangulo(value1, value2, value3);
    alert(altura);
};