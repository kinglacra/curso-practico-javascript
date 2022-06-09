// const precioOriginal = 241756;
// const descuento = 35;
const cupones = [
    "diego_b",
    "kinglacra",
    "eclipse"
];


function calcularDescuento(precio, descuento, cupon){
    const porcentajePrecioConDescuento = 100 - descuento - cupon;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
};

function precioDescuento(){
    const inputPrice = document.getElementById("InputPrice");
    const inputDiscount = document.getElementById("InputDiscount");
    const inputCoupons = document.getElementById("InputCoupon")

    const priceValue = inputPrice.value;
    const discountValue = inputDiscount.value;
    var couponvalue = inputCoupons.value;

    if (!cupones.includes(couponvalue)) {
        alert("El cupón " + couponvalue + "es incorrecto")
    } else if (couponvalue === "diego_b") {
        couponvalue = 30;
    } else if (couponvalue === "kinglacra") {
        couponvalue = 50;
    } else if (couponvalue === "eclipse") {
        couponvalue = 80;
    };

    const precioFinal = calcularDescuento(priceValue, discountValue, couponvalue);

    const resultP = document.getElementById("resultP");
    resultP.innerText = "El precio con descuento es de $" + precioFinal;
}




// console.log({
//     precioOriginal,
//     descuento,
//     precioConDescuento,
//     porcentajePrecioConDescuento,
// });