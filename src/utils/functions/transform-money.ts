export function formatAmountToFCFA(amount: number): string {
    return amount.toLocaleString("fr-FR", {
      style: "currency",
      currency: "XOF",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  }