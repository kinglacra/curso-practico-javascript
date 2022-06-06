//codigo del cuadrado

function perimetroCuadrado(lado) {
   return lado * 4;
};


function areaCuadrado(lado){
    return lado * lado;
};


//codigo del triangulo

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
};


function areaTriangulo(base, alturaTriangulo){
    return (base * alturaTriangulo) / 2;
};


//codigo del circulo

//diametro
function diametroCirculo(radio){
    return radio * 2;
};

//PI
const PI = Math.PI;
console.log("PI es: " + PI + "cm");

//circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
};

//area
function areaCirculo(radio){
    return (radio * radio) * PI;
};