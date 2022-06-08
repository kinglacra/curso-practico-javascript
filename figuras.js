//codigo del cuadrado

function perimetroCuadrado(lado) {
   return lado * 4;
};


function areaCuadrado(lado){
    return lado * lado;
};


//codigo del triangulo

function perimetroTriangulo(lado1, lado2, base){
    return (Number(lado1) + Number(lado2) + Number(base));
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

//interactuando con HTML
//Cuadrado

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
};

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
};

//Circulo

function calcularDiametroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const diametro = diametroCirculo(value)
    alert(diametro);
};

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
};

function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

//Triangulo

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("inputLado1");
    const input2 = document.getElementById("inputLado2");
    const input3 = document.getElementById("inputBase");

    const value1 = input1.value;
    const value2 = input2.value;
    const value3 = input3.value;

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("inputBase");
    const input2 = document.getElementById("inputAltura");

    
    const value1 = input1.value;
    const value2 = input2.value;

    const area = areaTriangulo(value1, value2);
    alert(area);
}