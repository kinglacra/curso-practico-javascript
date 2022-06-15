const lista = [
    100,
    200,
    300,
    500,
];

function calculaMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    )

    const promedio = sumaLista / lista.length;

    return promedio;
}

