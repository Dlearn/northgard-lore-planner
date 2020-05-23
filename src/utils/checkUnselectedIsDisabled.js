export default function checkUnselectedIsDisabled(
  selectedLores,
  coordinatesRowCol
) {
  const [row, col] = coordinatesRowCol;
  const isUpperRow = row % 2 === 0;
  const count = countLoresInRow(selectedLores, row);
  if (isUpperRow) {
    return col > count;
  } else {
    const isUpperRowSelected = countLoresInRow(selectedLores, row - 1) > 0;
    return isUpperRowSelected ? col > count + 1 : true;
  }
}

function countLoresInRow(selectedLores, row) {
  let count = 0;
  selectedLores.forEach((selectedLore) => {
    if (selectedLore === row) {
      count++;
    }
  });
  return count;
}
