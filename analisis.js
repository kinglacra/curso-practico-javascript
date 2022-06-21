//Helpers

function esPar(numero){
    return (numero % 2 === 0);
};

function calculaMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    )
    const promedio = sumaLista / lista.length;

    return promedio;
};
//calculadora de mediana

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calculaMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;
    } else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
};

//mediana general

const salariosVen = venezuela.map(
    function(persona){
        return persona.salary;
    }
);

const salariosVenSorted = salariosVen.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);

const medianaGeneralVen = medianaSalarios(salariosVenSorted);

//mediana top 10%
const spliceStart = (salariosVenSorted.length * 90) / 100;
const spliceCount = salariosVenSorted.length - spliceStart;
const salarios10Ven = salariosVenSorted.splice(spliceStart, spliceCount);

const medianaTop10Ven = medianaSalarios(salarios10Ven);

console.log({
    medianaGeneralVen,
    medianaTop10Ven,
});