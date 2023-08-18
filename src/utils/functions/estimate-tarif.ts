export interface TarifEstimate {
    priceDriver: number;
    priceNoDriver: number;
    startDate: string;
    endDate: string;
    isDriver: boolean;
    isDelivery: boolean;
    isGoOutCity: boolean;
}
export function estimateTarif(data: TarifEstimate) {
    return "1 500 000 FCFA";
}
