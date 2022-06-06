//codigo del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm");


function perimetroCuadrado(lado) {
   return lado * 4;
};



// console.log("el perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado){
    return lado * lado;
};


// console.log("el área del cuadrado es: " + areaCuadrado + "cm2");

console.groupEnd();


//codigo del triangulo
console.group("Triángulos");

// const ladotriangulo1 = 6;
// const ladotriangulo2 = 6;
// const ladotriangulo3 = 4;
// const alturaTriangulo = 5.5;

// console.log("los lados del triangulo miden: " + ladotriangulo1 + "cm, " + ladotriangulo2 + "cm, " + ladotriangulo3 + "cm");

// console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");



function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
};

// console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, alturaTriangulo){
    return (base * alturaTriangulo) / 2;
};
// console.log("El area del triangulo es: " + areaTriangulo + "cm2");

console.groupEnd();



//codigo del circulo
console.group("Circulos");

//radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");

//diametro
function diametroCirculo(radio){
    return radio * 2;
}

//PI
const PI = Math.PI;
console.log("PI es: " + PI + "cm");

//circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}



//area
function areaCirculo(radio){
    return (radio * radio) * PI;
}

console.groupEnd();