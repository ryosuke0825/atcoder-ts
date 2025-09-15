import * as fs from "fs";

function main(tokens: string[]) {
  // nextは次の標準入力を取得する関数
  let idx = 0;
  const next = () => tokens[idx++];

  const n = +next();
  const l = +next();
  const r = +next();
  const s = next();

  const cnt = s.slice(l - 1, r).match(/o/g)?.length;
  //console.log(s.slice(l - 1, r));
  //console.log(cnt);
  console.log(cnt === r - l + 1 ? "Yes" : "No");
}

// 標準入力全体を読み込み、空白、改行で分割してStringの配列に格納
main(fs.readFileSync(0, "utf8").trim().split(/\s+/));
