export function formatDuration(seconds: number): string {
  if (seconds < 0) {
    throw new Error("negative number");
  }

  const hours = Math.floor(seconds / 3600);
  seconds %= 3600;
  const minutes = Math.floor(seconds / 60);
  seconds %= 60;

  let result = "";
  result += hours > 0 ? `${hours}h` : "";
  result += minutes > 0 ? `${minutes}m` : "";
  result += seconds > 0 ? `${seconds}s` : "";
  if (result === "") {
    result = "0s";
  }

  return result;
}
