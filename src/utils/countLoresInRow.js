export default function countLoresInRow(selectedLores, row) {
  let count = 0;
  selectedLores.forEach((selectedLore) => {
    if (selectedLore === row) {
      count++;
    }
  });
  return count;
}
