export function getAvg(scores: any[]): void {
  let sum = 0;

  for (let i = 0; i <= scores.length; i += 1) {
    sum += scores[i] as number;
  }

  var avg = sum / scores.length;

  return avg;
}
