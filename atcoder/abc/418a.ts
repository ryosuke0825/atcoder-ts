import * as fs from "fs";

function main(tokens: string[]) {
  // nextは次の標準入力を取得する関数
  let idx = 0;
  const next = () => tokens[idx++];

  const n = +next();
  const s = next();
  if (s.length >= 3 && s.slice(s.length - 3) === "tea") {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

// 標準入力全体を読み込み、空白、改行で分割してStringの配列に格納
main(fs.readFileSync(0, "utf8").trim().split(/\s+/));
