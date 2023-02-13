---
title: vite脚手架搭建react项目
date: 2023-02-12 13:53:26
author: 秋谨
categories:
  - react
tags:
  - react
  - vite
  - typescript
---

# 创建

运行 yarn create vite 然后根据提示输入项目名，然后依次选择 `react`、`react-ts` 即可创建一个 `React+TS` 项目。

```bash
yarn create vite
```

![image-20230212135922609](https://c-typora.oss-cn-guangzhou.aliyuncs.com/c-typora/image-20230212135922609.png)

![image-20230212140211367](./vite%E8%84%9A%E6%89%8B%E6%9E%B6%E6%90%AD%E5%BB%BAreact%E9%A1%B9%E7%9B%AE.assets/image-20230212140211367.png)

# 代码规范

```bash
npx eslint --init
```

![image-20230212140925069](./vite%E8%84%9A%E6%89%8B%E6%9E%B6%E6%90%AD%E5%BB%BAreact%E9%A1%B9%E7%9B%AE.assets/image-20230212140925069.png)

```json
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint --ext .js,.jsx,.ts,.tsx --fix --quiet ./"
  },
```

