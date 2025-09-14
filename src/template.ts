import * as fs from "fs";

function main(input: string) {
  console.log(input);
}

const input = fs.readFileSync(0, "utf8");
main(input);
