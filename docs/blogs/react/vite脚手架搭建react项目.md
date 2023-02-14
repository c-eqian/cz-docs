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

![](https://c-typora.oss-cn-guangzhou.aliyuncs.com/c-typora/image-20230212135922609.png)

![](https://c-typora.oss-cn-guangzhou.aliyuncs.com/c-typora/image-20230212140211367.png)

# 代码规范

```bash
npx eslint --init
```

![](https://c-typora.oss-cn-guangzhou.aliyuncs.com/c-typora/image-20230212135922609.png)

```json
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint --ext .js,.jsx,.ts,.tsx --fix --quiet ./"
  },
```

