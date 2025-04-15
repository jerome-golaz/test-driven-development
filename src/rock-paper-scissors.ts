export function play(player1: string, player2: string): number {
  const choices = ["rock", "paper", "scissors"];
  player1 = player1.trim().toLowerCase();
  player2 = player2.trim().toLowerCase();

  if (!choices.includes(player1) || !choices.includes(player2)) {
    throw new Error("invalid input");
  }

  if (player1 === player2) {
    return 0;
  }

  if (
    (player1 === "rock" && player2 === "scissors") ||
    (player1 === "paper" && player2 === "rock") ||
    (player1 === "scissors" && player2 === "paper")
  ) {
    return 1;
  }
  return 2;
}
