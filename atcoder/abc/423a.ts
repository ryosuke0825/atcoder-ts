import * as fs from "fs";

function main(input: string) {
  const S = input.split(" ").map(Number);
  // 千円を何回引き出せるか
  const cnt = Math.floor(S[0] / (1000 + S[1]));
  console.log(cnt * 1000);
}

const input = fs.readFileSync(0, "utf8");
main(input);
