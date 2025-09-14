import * as fs from "fs";

function main(input: string) {
  const S = input.split("-").map(Number);
  if (S[1] === 8) {
    S[0] += 1;
    S[1] = 1;
  } else {
    S[1] += 1;
  }
  console.log(`${S[0]}-${S[1]}`);
}

const input = fs.readFileSync(0, "utf8");
main(input);
