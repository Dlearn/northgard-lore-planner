export default function getPositionInSelectedLores(
  selectedLores,
  coordinatesRowCol
) {
  const [row, col] = coordinatesRowCol;
  const isUpperRow = row % 2 === 0;
  let nthOccurance = isUpperRow ? col + 1 : col;
  for (let i = 0; i < selectedLores.length; i++) {
    if (selectedLores[i] === row) {
      if (nthOccurance === 1) {
        return i + 1;
      } else {
        nthOccurance--;
      }
    }
  }

  return -1;
}
