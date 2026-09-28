export function costCalculator(pago) {
    let tarifa = 3;
    let interes = pago * 0.01;
    return pago + tarifa + interes;
}