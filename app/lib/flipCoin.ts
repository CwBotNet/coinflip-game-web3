export function flipCoin(): boolean {
  // Generate a random number between 0 and 1
  const randomNumber = Math.random();

  // If the number is less than 0.5, return true (heads), otherwise return false (tails)
  return randomNumber < 0.5;
}

// Example usage:
const result = flipCoin();
console.log(result ? "Heads" : "Tails");
