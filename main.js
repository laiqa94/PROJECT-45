"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function storeCarInfo(manufacturer, modelNames, ...exterOption) {
    const carInfo = Object.assign({ manufacturer,
        modelNames }, Object.assign({}, ...exterOption));
    return carInfo;
}
const carInfo = console.log('Honda', 'Civic', { color: 'black' }, { facturer: ['Navigation', 'power Window'] });
console.log('carInfo');
