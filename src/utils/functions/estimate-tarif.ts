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
     // Convertir les dates en objets Date
     const startDate = new Date(data.startDate);
     const endDate = new Date(data.endDate);

     // Calculer le nombre de jours entre les dates
     const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
     const daysDifference = Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1; // +1 pour inclure la dernière journée

     // Calculer les montants pour chaque option
    const baseAmount = daysDifference * 10000;
    const driverAmount = data.isDriver ? baseAmount : 0;
    const goOutCityAmount = data.isGoOutCity ? baseAmount : 0;
    const deliveryAmount = data.isDelivery ? 5000 : 0;

    // Calculer le total
    const totalAmount = driverAmount + goOutCityAmount + deliveryAmount + data.priceNoDriver;

    // Formater le montant total en tant que chaîne avec des espaces pour la séparation des milliers
    const formattedTotal = totalAmount.toLocaleString("fr-FR", {
        style: "currency",
        currency: "XOF", // Code de devise pour le Franc CFA
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });

    return formattedTotal;
}
