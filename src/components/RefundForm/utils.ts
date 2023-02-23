export const getSelectedGuests = (guests, selectedGuesIndexes) => {
  return Object.entries(selectedGuesIndexes)
    .filter(([index, selected]) => selected)
    .map(([index]) => guests[index]);
};
