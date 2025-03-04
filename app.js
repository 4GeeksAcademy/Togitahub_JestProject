// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b;
}

// Solo un registro en consola para nosotros
console.log(sum(7,3));

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function(dollarValue) {
    let yenValue = dollarValue * 146.27;
    return yenValue;
}

const fromYenToPound = function(yenValue) {
    let poundValue = yenValue * 0.005;
    return poundValue;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }