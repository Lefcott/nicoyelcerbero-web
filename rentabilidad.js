const fees = [0.0699, 0.0449, 0.0399, 0.0149];
const inflationValues = [1, 1, 1, 1];
const IVA = 1.21;

const getPrices = (addedFee) =>
  fees.map((fee, i) => {
    const externalFee = fee * IVA;
    return (1 / (1 - externalFee)) * addedFee * inflationValues[i];
  });
