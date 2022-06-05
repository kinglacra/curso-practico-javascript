//codigo del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("el perimetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("el área del cuadrado es: " + areaCuadrado + "cm2");

console.groupEnd();
//codigo del triangulo
console.group("Triángulos");

const ladotriangulo1 = 6;
const ladotriangulo2 = 6;
const ladotriangulo3 = 4;
const alturaTriangulo = 5.5;

console.log("los lados del triangulo miden: " + ladotriangulo1 + "cm, " + ladotriangulo2 + "cm, " + ladotriangulo3 + "cm");

console.log("La altura del triangulo es de: " + alturaTriangulo + "cm");

const perimetroTriangulo = ladotriangulo1 + ladotriangulo2 + ladotriangulo3;

console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (ladotriangulo3 * alturaTriangulo) / 2;
console.log("El area del triangulo es: " + areaTriangulo + "cm2");

console.groupEnd();

//codigo del circulo
console.group("Circulos");

//radio
const radioCirculo = 4;
console.log("El radio del circulo es: " + radioCirculo + "cm");
//diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es: " + diametroCirculo + "cm");
//PI
const PI = Math.PI;
console.log("El radio del circulo es: " + radioCirculo + "cm");
//circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El el perimetro del circulo es: " + perimetroCirculo + "cm");
//area
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del circulo es: " + areaCirculo + "cm");
console.groupEnd();