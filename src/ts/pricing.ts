export interface PricingData {
    BillingCurrency: string;
    CustomerEntityId: string;
    CustomerEntityType: string;
    Items: Item[];
    NextPageLink: string;
    Count: number;
}

export interface Item {
    currencyCode: string;
    tierMinimumUnits: number;
    retailPrice: number;
    unitPrice: number;
    armRegionName: string;
    location: string;
    effectiveStartDate: string;
    meterId: string;
    meterName: string;
    productId: string;
    skuId: string;
    productName: string;
    skuName: string;
    serviceName: string;
    serviceId: string;
    serviceFamily: string;
    unitOfMeasure: string;
    type: string;
    isPrimaryMeterRegion: boolean;
    armSkuName: string;
    effectiveEndDate?: string | null;
    reservationTerm?: string | null;
}
