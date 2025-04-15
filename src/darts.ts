export function calcPoints(hits: string): number {
  const darts = hits.split(" ").map(Number);
  let points = 0;
  for (let i = 0; i < darts.length; i += 2) {
    const multiplier = darts[i];
    const score = darts[i + 1];
    points += score * multiplier;
  }
  return points;
}

export function possibleCheckout(x: number): string {
  const score = 501 - x;
  if (score % 2 !== 0) {
    return "Not possible, odd score";
  }
  if (score / 2 > 20) {
    return `Not possible, ${score / 2} > 20`;
  }
  if (score === 50) {
    return "Double Bull";
  }
  if (score === 25) {
    return "Bull";
  }
  return `Double ${score / 2}`;
}
