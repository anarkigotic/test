

export interface Oferta {
    versions: [version];
    id: string;
    href: string

}
interface version {
    characteristics: [characteristics];
    productOfferingPrices: [productOfferingPrices];
    name: string;
    id: string;
}
export interface characteristics {
    versions: [versions];
    id:string
}
interface versions {
    validFor: {
        startDateTime: Date
    },
    valueType: string;
    name: string;
    id: string;
    type: string
    characteristicValues: [characteristicValues];
    properties : [properties]

}
interface characteristicValues {
    "displayValue": string,
    "isDefault": boolean,
    "validFor": {
        "startDateTime": Date
        "valueType": string,
        "value": string
    }
}
interface properties {
    "isSelected": boolean,
    "value": string
}
export interface productOfferingPrices {
    versions : [productOfferingPricesversions];
    id : string
}

interface productOfferingPricesversions {
    displayValue : string
    validFor: {
        startDateTime: Date
    },
    valueType: string;
    name: string;
    id: string;
    valueTypeSpecification: {
        "id":  string
    },
    type: string
    value : string
    properties : [properties]

}