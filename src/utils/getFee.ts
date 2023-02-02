export const getFee = (show, price: number) => {
  const { feeMultiplier } = show;
  let finalPrice = price;

  if (show.feePayer === "buyer") {
    finalPrice *= 1 / (1 - feeMultiplier);
  } else if (show.feePayer === "both") {
    finalPrice *= 1 / (1 - feeMultiplier / 2);
  }

  return finalPrice - price;
};
