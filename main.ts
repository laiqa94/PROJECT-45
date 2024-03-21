import { KeyObject } from "crypto";
import { userInfo } from "os";
import { stringify } from "querystring";

function  storeCarInfo(manufacturer:string, modelNames:string, ...exterOption:{[key :string]: any}[]):object{
    const carInfo={
        manufacturer,
        modelNames,
        ...Object.assign({}, ...exterOption)

    }
    
    return carInfo;
}

const carInfo = console.log('Honda','Civic',{color:'black'}, {facturer:['Navigation','power Window']})
console.log('carInfo');
