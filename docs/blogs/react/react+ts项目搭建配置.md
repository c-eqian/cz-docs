---
title: react+ts项目搭建配置
date: 2023-02-12 10:50:07
author: 秋谨
categories:
  - react
tags:
  - react
  - typescript
---

# 创建React

```bash
npx create-react-app my-app --template typescript
```

# 配置`eslint`+`prettier`

```bash
yarn add -D prettier eslint
初始化eslint
npx eslint --init

```

在代码格式化时采用Perttier规则，而我们代码校验使用的是ESLint，如果同一个规则配置不一致，往往就会出现冲突问题；
比如：字符串单、双引号的配置，eslint后把字符串变成单引号，更新文件代码过后，重新保存（`Prettier`）又自动格式化后变成双引号，导致代码校验异常。

解决方案1： 两者配置文件部分配置修改成一致.
解决方案2： 安装相关插件（`Prettier `和 `ESLint `冲突解决方案` eslint-config-prettier eslint-plugin-prettier`）

`eslint-config-prettier `禁用 `eslint `冲突配置

```bash
yarn add -D eslint-config-prettier eslint-plugin-prettier eslint-import-resolver-alias
npx install-peerdeps --dev eslint-config-airbnb
```

## 修改`eslintrc.js`

```json
module.exports = {
  root: true,
  extends: ['airbnb', 'plugin:import/recommended',
    'plugin:import/typescript'],
  parser: '@typescript-eslint/parser', // ESLint 默认使用 esprima 作为其解析器，也可以在配置文件中指定一个不同的解析器（它必须是一个 Node 模块，且它必须符合 parser interface）
  plugins: ['react', 'react-hooks', 'import', 'jsx-a11y', 'simple-import-sort'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css']
      },
      typescript: {
        // always try to resolve types under `<root>@types`
        // directory even it doesn't contain any source code, like `@types/unist`
        alwaysTryTypes: true,

        // Choose from one of the "project" configs
        // below or omit to use <root>/tsconfig.json by default

        // use <root>/path/to/folder/tsconfig.json
        project: '@'
      }
    }
  },
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'react/function-component-definition': [2, { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' }],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-undef': 'off',
    'sort-imports': 'off',
    'import/order': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'dot-notation': 'off',
    'spaced-comment': 'off',
    'space-before-function-paren': ['error', 'never'],
    'one-var': 'off',
    'one-var-declaration-per-line': 'off',
    'no-use-before-define': 'off',
    'no-restricted-globals': ['error', 'history'],
    'class-methods-use-this': 'off',
    radix: 'off',
    'global-require': 'error',
    'default-case': 'off',
    'no-param-reassign': 'error',
    'consistent-return': 'off',
    'no-script-url': 'error',
    'no-else-return': 'error',
    'no-restricted-syntax': 'error',
    'no-extend-native': 'error',
    'no-return-assign': 'off',
    'no-unused-expressions': ['error', {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: true
    }],
    'max-len': ['error', {
      code: 200,
      ignoreComments: true,
      ignoreUrls: true,
      ignoreTemplateLiterals: true
    }],
    'jsx-quotes': ['error', 'prefer-single'],
    'jsx-a11y/alt-text': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'prefer-destructuring': 'off',
    'react/prop-types': 'off',
    'react/jsx-tag-spacing': 'off',
    'import/no-dynamic-require': 'off',
    'react/no-did-update-set-state': 'error',
    'react/no-unused-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/forbid-prop-types': 'off',
    'react/jsx-indent-props': 'off',
    'react/no-array-index-key': 'off',
    'react/require-default-props': 'off',
    'react/sort-comp': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-first-prop-new-line': 'off',
    'react/no-multi-comp': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/no-access-state-in-setstate': 'off',
    'react/jsx-no-bind': 'off',
    'react/jsx-indent': [2, 2],
    'react/no-unescaped-entities': 'off',
    'no-prototype-builtins': 'error',
    'no-nested-ternary': 'error',
    'react-hooks/exhaustive-deps': 'off',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'no-useless-constructor': 'off',
    'no-empty-function': 'off',
    'react/no-danger': 'off',
    'react/button-has-type': 'off',
    'no-multiple-empty-lines': 'off',
    'no-useless-escape': 'off',
    'react/no-unused-prop-types': 'off',
    'react/default-props-match-prop-types': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'import/no-cycle': 'off',
    'no-underscore-dangle': 'off',
    'prefer-object-spread': 'off',
    'arrow-parens': [2, 'as-needed', { requireForBlockBody: false }],
    'no-async-promise-executor': 'off',
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true, argsIgnorePattern: '^_' }],
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prefer-promise-reject-errors': 'off',
    'linebreak-style': 'off', // 回车换行风格
    'no-trailing-spaces': 1, // 禁用行尾空格
    'object-curly-newline': 'off', // 不强制花括号内换行
    'arrow-body-style': 'off', // 箭头函数不强制以用块体（用花括号表示）
    'import/named': 'off', // 停用 import/named 校验
    'comma-dangle': ['error', 'never'], // 禁止末尾使用的逗号
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    // 默认不能使用一元运算符++和--
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true
      }
    ],
    camelcase: 'off'
  }
};

```

## 新建`.prettierrc.js`

```json
module.exports = {
  // 一行最多 100 字符
  printWidth: 100,
  // 使用 4 个空格缩进
  tabWidth: 2,
  // 不使用缩进符，而使用空格
  useTabs: false,
  // 行尾需要有分号
  semi: true,
  // 使用单引号
  singleQuote: true,
  // 对象的 key 仅在必要时用引号
  quoteProps: 'as-needed',
  // jsx 不使用单引号，而使用双引号
  jsxSingleQuote: false,
  // // 末尾不需要逗号
  // trailingComma: 'none',
    // 末尾不需要逗号
  trailingComma: "none",
  // 大括号内的首尾需要空格
  bracketSpacing: true,
  // jsx 标签的反尖括号需要换行
  jsxBracketSameLine: false,
  // 箭头函数，只有一个参数的时候，也需要括号
  // arrowParens: 'always',
  // 箭头函数，只有一个参数的时候，不需要括号
  arrowParens: 'avoid',
  // 每个文件格式化的范围是文件的全部内容
  rangeStart: 0,
  rangeEnd: Infinity,
  // 不需要写文件开头的 @prettier
  requirePragma: false,
  // 不需要自动在文件开头插入 @prettier
  insertPragma: false,
  // 使用默认的折行标准
  proseWrap: 'preserve',
  // 根据显示样式决定 html 要不要折行
  htmlWhitespaceSensitivity: 'css',
  // 换行符使用 lf
  endOfLine: 'lf'
};
```

## 配置`stylelint`

```ba
yarn add stylelint stylelint-config-stardand stylelint-config-prettier stylelint-order -D
// stylelint-config-prettier解决和prettier冲突
// stylelint-order 排序css属性
```

### 新建`.stylelint.json`文件

```json
{
 
  "plugins": ["stylelint-order"],
  "extends": ["stylelint-config-standard", "stylelint-config-prettier"],
  "rules": {
 
    "property-no-unknown": true,
    "comment-no-empty": [
      true,
      {
 
        "message": "禁止空注释"
      }
    ],
    "order/properties-order": [
      "position",
      "top",
      "right",
      "bottom",
      "left",
      "z-index",
      "display",
      "float",
      "width",
      "height",
      "max-width",
      "max-height",
      "min-width",
      "min-height",
      "padding",
      "padding-top",
      "padding-right",
      "padding-bottom",
      "padding-left",
      "margin",
      "margin-top",
      "margin-right",
      "margin-bottom",
      "margin-left",
      "margin-collapse",
      "margin-top-collapse",
      "margin-right-collapse",
      "margin-bottom-collapse",
      "margin-left-collapse",
      "overflow",
      "overflow-x",
      "overflow-y",
      "clip",
      "clear",
      "font",
      "font-family",
      "font-size",
      "font-smoothing",
      "osx-font-smoothing",
      "font-style",
      "font-weight",
      "hyphens",
      "src",
      "line-height",
      "letter-spacing",
      "word-spacing",
      "color",
      "text-align",
      "text-decoration",
      "text-indent",
      "text-overflow",
      "text-rendering",
      "text-size-adjust",
      "text-shadow",
      "text-transform",
      "word-break",
      "word-wrap",
      "white-space",
      "vertical-align",
      "list-style",
      "list-style-type",
      "list-style-position",
      "list-style-image",
      "pointer-events",
      "cursor",
      "background",
      "background-attachment",
      "background-color",
      "background-image",
      "background-position",
      "background-repeat",
      "background-size",
      "border",
      "border-collapse",
      "border-top",
      "border-right",
      "border-bottom",
      "border-left",
      "border-color",
      "border-image",
      "border-top-color",
      "border-right-color",
      "border-bottom-color",
      "border-left-color",
      "border-spacing",
      "border-style",
      "border-top-style",
      "border-right-style",
      "border-bottom-style",
      "border-left-style",
      "border-width",
      "border-top-width",
      "border-right-width",
      "border-bottom-width",
      "border-left-width",
      "border-radius",
      "border-top-right-radius",
      "border-bottom-right-radius",
      "border-bottom-left-radius",
      "border-top-left-radius",
      "border-radius-topright",
      "border-radius-bottomright",
      "border-radius-bottomleft",
      "border-radius-topleft",
      "content",
      "quotes",
      "outline",
      "outline-offset",
      "opacity",
      "filter",
      "visibility",
      "size",
      "zoom",
      "transform",
      "box-align",
      "box-flex",
      "box-orient",
      "box-pack",
      "box-shadow",
      "box-sizing",
      "table-layout",
      "animation",
      "animation-delay",
      "animation-duration",
      "animation-iteration-count",
      "animation-name",
      "animation-play-state",
      "animation-timing-function",
      "animation-fill-mode",
      "transition",
      "transition-delay",
      "transition-duration",
      "transition-property",
      "transition-timing-function",
      "background-clip",
      "backface-visibility",
      "resize",
      "appearance",
      "user-select",
      "interpolation-mode",
      "direction",
      "marks",
      "page",
      "set-link-source",
      "unicode-bidi",
      "speak"
    ]
  }
}
```

# Husky + lint-staged

通过 `Husky `在 `Git commit` 时进行代码校验。

```shell
yarn add husky -D
```

然后在 `package.json `中添加脚本 ``prepare`` 并运行

```shell
npm pkg set scripts.prepare="husky install"

npm run prepare // 运行命令后会在项目根目录创建 .husky 文件夹。
npx husky add .husky/pre-commit "npm run lint"  // 添加一个 Hook
```

添加 `hook `之后，每次 ``git commit`` 之前都会先运行 ``npm run lint``，通过之后才会提交代码。

通过 `lint-staged `只对暂存区的代码进行检验。

```shell
yarn add lint-staged -D
```

然后在 `package.json` 添加相关配置。

```json
{
  "lint-staged": {
    "*.{js,jsx,tsx,ts}": [
      "npm run lint"
    ]
  }
}
```

# 配置别名

```json
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '~@': path.resolve(__dirname, '/src')
    }
  },
  server: {
    host: '0.0.0.0'
  }
});
// tsconfig.json
{
    ...
  "baseUrl": "./",
  "paths": {
    "@/*": ["src/*"]
  },
}

```

# 需要依赖包

``` bash
npm install -D eslint-plugin-prettier prettier-eslint @types/node @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-airbnb eslint-import-
resolver-alias eslint-import-resolver-typescript eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-simple-import-sort husky lint-staged prettier stylelint stylelint-config-prettier stylelint-order
```

