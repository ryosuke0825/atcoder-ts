# atcoder-ts

TS で解いた AtCoder の問題

# 標準入力サンプル

## S N(Number)

```ts
const tempInput = input.split(" ").map(Number);
const s = tempInput[0];
const n = tempInput[1];
```

## N N 個の S(Number)

```ts
let idx = 0;
const next = () => tokens[idx++];
const tokenNum = () => +next();

const n = tokenNum();
const s: number[] = new Array(n);
for (let i = 0; i < n; i++) {
  s[i] = tokenNum();
}
```

## N N 個の S(String)

```ts
let idx = 0;
const next = () => tokens[idx++];

const n = +next();
const s: string[] = new Array(n);
for (let i = 0; i < n; i++) {
  s[i] = next();
}
```
