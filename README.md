# ref-once-init

<p align="center">
  <a href="https://github.com/darkXmo/ref-once-init/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/ref-once-init.svg?sanitize=true" alt="npm"></a>
  <a href="https://www.npmjs.com/package/ref-once-init"><img src="https://img.shields.io/npm/v/ref-once-init.svg?sanitize=true" alt="gzip size"></a>
</p>

<strong style="text-align: center;">🗼 Let Promise Function Executed Only Once.</strong>

> The `Promise` will be executed when the attribute target is called for the first time, and the `Promise` executed will not be executed again when called repeatedly.

> The same `Promise` will not be executed twice at the same time. Only the first one will be executed, while the rest can still get the result of the `promise` after executed.

[If you are looking for the pure version of once-init(without ref), click me](https://github.com/darkXmo/once-init)
[国内镜像](https://gitee.com/dXmo/ref-once-init)

## Once init Promise

1. **The `Promise Function` packaged by `RefOnceInit` will never be executed twice at the same time**
2. If A `Promise Function` is called before previous `Promise Function` resolved， It will share the response of the previous one.

## Install

Install by package management tools, `pnpm` is recommended;

```bash
npm install ref-once-init
```

OR

```bash
yarn add ref-once-init
```

OR

```bash
pnpm add ref-once-init
```

## Usage

For example, use `ref-once-init` with `axios`;
