---
date: 2024-05-06 14:06:12
title: 基于vite搭建项目脚手架-create-eqian-app
author: 秋谨
categories:
  - vue
tags:
  - vue
  - vite
---

> 生活之礁为强者所粉碎，生活之舟为勇士而扬帆。

# 前言

为什么要做这个自己的项目脚手架呢？主要原因是因为在每次开发项目的时候，都要进重复性的项目搭建工作，比如使用`vite`、`vue3`作为项目开发框架，就会需要使用vite创建项目。同时，为了进行项目规范会还要配置`eslint`、`prettier`、`pinia`等常用插件。进而重复行的工作会导致时间上的浪费。或者可以将模板项目进行存放至仓库中，需要的时候进行克隆下来，但是这样始终不如使用脚手架来的方便点吧。

所以去研究了一下`creat-vite`的源码，参考这个工作流程，搭建符合自己需求的项目脚手架。同时，搭建项目脚手架，有以下好处：

**提高开发效率**

- **标准化流程**：通过项目脚手架，你可以定义一个标准的项目创建流程，包括项目初始化、文件生成、依赖安装等步骤。这样可以确保每次创建新项目时都能快速且准确地按照预定的步骤进行。
- **自动化配置**：脚手架可以自动处理一些常见的配置任务，如设置构建工具、测试框架、代码风格检查等。这可以节省开发者手动配置的时间，让他们能够更快地投入到实际的开发工作中。

 **定制项目结构**

- **满足特定需求**：不同的项目可能有不同的需求和结构要求。通过创建自己的项目脚手架，你可以根据项目需求定制项目结构，包括目录结构、文件模板、配置文件等。这样可以确保新项目从一开始就符合项目的需求。
- **保持一致性**：在团队中，使用统一的项目脚手架可以确保团队成员在创建新项目时遵循相同的标准和规范，从而保持项目结构的一致性。

 **简化项目初始化**

- **减少手动操作**：使用项目脚手架可以大大减少手动操作，如创建目录、编写配置文件等。开发者只需通过简单的命令行操作或交互式界面即可快速完成项目的初始化。
- **降低错误率**：手动创建项目时容易出现错误，如配置错误、文件遗漏等。使用项目脚手架可以减少这些错误的发生，提高项目的质量。

**学习和探索新技术**

- **技术实践**：创建项目脚手架是一个很好的机会来学习和实践新技术和工具。你可以通过编写脚本来熟悉命令行接口、文件操作、模板引擎等技术，并将这些技术应用到实际的项目中。
- **技术探索**：在创建脚手架的过程中，你可能会遇到一些新的挑战和问题。这将促使你去探索和学习更多的知识和解决方案，从而提高你的技术水平。

**便于项目管理和维护**

- **统一管理**：通过项目脚手架，你可以统一管理项目的创建和维护流程。无论是个人项目还是团队项目，都可以使用相同的脚手架来创建和维护项目，从而提高项目的可维护性和可管理性。
- **易于扩展**：随着项目的发展和变化，你可能需要添加新的功能或修改现有的功能。使用项目脚手架可以方便地扩展和修改项目结构，以满足新的需求。

# 必要的依赖

为了构建我们的脚手架工具，我们需要安装几个必要的Node.js模块。fs`（文件系统）、`path`（路径处理）、`url`（URL处理）、`minimist`（命令行参数处理）、prompts`（终端交互）和``kolorist`（颜色处理）等模块。

# 安装

```bash
npm install prompts minimist kolorist unbuild --save -dev

```

# minimist

```javascript
const argv = minimist(process.argv.slice(2), {string: ['-']})
```

代码解释：

1. 使用 slice(2) 方法从 `process.argv` 数组中取出从索引 2 开始的所有元素。这意味着它移除了 'node' 和 JavaScript 文件的路径，只保留了命令行参数。
2. 第二个参数目的是将 -（单独出现或作为其他参数值的一部分）当作字符串来处理

如运行命令 `xxxx my-vue-app --template vue`

```javascript
{ _: [ 'my-vue-app' ], template: 'vue' }
```

 其中_是一个数组，为用户输入的未带前缀属性的值 如my-vue-app

# prompts 

- **很简单**：提示[没有大的依赖关系](http://npm.anvaka.com/#/view/2d/prompts)，也没有分解成[十几个](http://npm.anvaka.com/#/view/2d/inquirer)只能很好地协同工作的小模块。
- **用户友好**：提示使用布局和颜色来创建漂亮的 cli 界面。
- **Promised**：使用 promise 和 /。没有回调地狱。`async``await`
- **灵活**：所有提示都是独立的，可以单独使用。
- **可测试**：提供一种以编程方式提交答案的方法。
- **统一**：所有[提示的](https://www.npmjs.com/package/prompts#-types)一致体验。

## 安装

```bash
npm install --save prompts
```

## 主要参数说明

| Param    | Type                   | Description                                                  |
| -------- | ---------------------- | ------------------------------------------------------------ |
| type     | string \| function     | 交互类型                                                     |
| name     | `string`               | 显示名称                                                     |
| message  | `string`               | 提示显示消息                                                 |
| initial  | `string` | `function ` | 默认值                                                       |
| style    | `string`               | 渲染样式 （， ， ， ）。默认值为`default``password``invisible``emoji``default` |
| format   | `function`             | 接收用户输入。返回的值将添加到响应对象中                     |
| validate | `function`             | 接收用户输入。如果值有效，则应返回，否则应返回错误消息。如果返回，则显示默认错误消息`true``String``false` |
| onRender | `function`             | 在渲染回调时。关键字是指当前提示`this`                       |
| onState  | `function`             | 在状态更改回调时。函数签名具有两个属性：和`object``value``aborted` |

# 流程

![image-20240507101958875](https://c-typora.oss-cn-guangzhou.aliyuncs.com/c-typora/image-20240507101958875.png)

1. 获取终端命令行参数
2. 验证参数是否正确，项目名称是否合法、参数是否已经确定选择哪种框架
3. 终端相关交互
4. 确定模板项目、项目名称 复制文件到项目目录下

## 目录结构

```bash
|-- build.config.js # unbuild打包配置文件
|-- dist
|   `-- index.mjs # 打包输出目录
|-- index.js # 入口文件
|-- package-lock.json
|-- package.json
|-- src
|   `-- index.js # 源代码
|-- template # 项目模板
|   |-- template-react
|   |-- template-react-ts
|   |-- template-vue
|   `-- template-vue-ts
```



## 引入需要的库

```javascript

import fs from 'node:fs' // 文件处理
import path from 'node:path' //路径处理
import { fileURLToPath } from 'node:url'
import minimist from 'minimist'// 处理命令行参数
import prompts from 'prompts' // 终端交互
import {
    blue,
    cyan,
    green,
    lightBlue,
    lightGreen,
    lightRed,
    magenta,
    red,
    reset,
    yellow,
} from 'kolorist' // 用于着色stdin stdout的小实用程序,可以将颜色放入stdin和stdout中

```

## 定义框架类型

 * variants是框架下的不同脚手架实现，如js,ts版本
 * name：模板名，用于vite找到最终模板
 * display：用于命令行展示的名称
 * color：命令行展示时的文字颜色
 * customCommand：需要执行的命令(这里没用到)

```javascript
/**
 * 定义框架
 */
const FRAMEWORKS = [
    {
        name : 'vue',
        display: 'Vue',
        color: green,
        variants: [
            {
                name : 'vue-ts',
                display: 'TypeScript',
                color: blue,
            },
            {
                name: 'vue',
                display: 'JavaScript',
                color: yellow,
            },
        ]
    }, {
        name: 'react',
        display: 'React',
        color: cyan,
        variants: [
            {
                name: 'react-ts',
                display: 'TypeScript',
                color: blue,
            },
            {
                name: 'react',
                display: 'JavaScript',
                color: yellow,
            }
        ],
    }
]
```

## 定义模板

 * 根据框架名称遍历模板项目名称和颜色 后面用到
 * 放到一个模板数组里面
 * 这里与`create-vite`源码中只有`['react-ts']`这样的框架类型，因为是个人的脚手架，因此无需跟`create-vite`一样，改成自己定义的就可以

```javascript
/**
 * 如：
 * [
 *    {
 *        name: 'react-ts',
 *        color: color
 *    }
 * ]
 */
const TEMPLATES = FRAMEWORKS.flatMap(
    (f) => (f.variants && f.variants.map((v) => {
        return {
            name:v.name,
            color: v.color
        }
    })) || [{
        name:f.name,
        color: f.color
    }]
);
```

## 定义默认项目名称

```javascript
/**
 * 默认项目名称
 * 如果没有输入名称，使用默认的
 */
const defaultTargetDir = 'eqian-project'
```

## 获取命令行参数

```javascript
/**
 * 解析命令行参数
 * 如 npm create eqian@latest my-vue-app --template vue
 * 得到
 * { _: [ 'my-vue-app' ], template: 'vue' }
 * 其中_是一个数组，为用户输入的未带前缀属性的值 如my-vue-app
 * 使用 slice(2) 方法从 process.argv 数组中取出从索引 2 开始的所有元素。
 * 这意味着它移除了 'node' 和 JavaScript 文件的路径，只保留了命令行参数。
 * 第二个参数目的是将 -（单独出现或作为其他参数值的一部分）当作字符串来处理
 */
const argv = minimist(process.argv.slice(2), {string: ['-']})
```

## 获取参数项目名称

获取不带前缀的参数，如一般是项目名称,`formatTargetDir`格式化输入的项目名称，避免不必要的多余字符

```javascript
    // 获取不带前缀的参数，如一般是项目名称
    const argTargetDir = formatTargetDir(argv._[0])
     // 如果没有输入项目名称，使用默认的
    let targetDir = argTargetDir || defaultTargetDir
```

## 获取参数模板

1. argv.template表示输入参数为 --template
2. argv.t表示输入参数-t

```javascript
    const argTemplate = argv.template || argv.t
```

## 终端交互

```javascript
    // 默认配置覆盖。如果用户输入覆盖参数，则不会出现提示覆盖的选择
    prompts.override({
        overwrite: argv.overwrite,
    })
    try {
        result = await prompts([
            // 项目名称
            {
                type: argTargetDir ? null : 'text', // 交互类型
                name: 'projectName',// 显示名称
                message: reset('Project name'), //提示显示消息
                initial: defaultTargetDir,// 默认字符串值
                onState: (state)=> { // 在状态更改回调时。函数签名具有两个属性：和object value aborted
                    targetDir = formatTargetDir(state.value) || defaultTargetDir
            }
            },
            // 校验项目目录是否为空，不为空用户确认
            {
                type: () =>
                    !fs.existsSync(targetDir) || isEmpty(targetDir) ? null : 'select',
                name: 'overwrite',// 如果模板路径不为空，是否覆盖
                message: () =>
                    (targetDir === '.'
                        ? 'Current directory'
                        : `Target directory "${targetDir}"`) +
                    ` is not empty. Please choose how to proceed:`,
                initial: 0,// 默认选择第一项
                choices: [
                    {
                        title: 'Remove existing files and continue',
                        value: 'yes',
                    },
                    {
                        title: 'Cancel operation',
                        value: 'no',
                    },
                    {
                        title: 'Ignore files and continue',
                        value: 'ignore',
                    },
                ],
            },
            // 确认是否覆盖
            {
                type: (_, { overwrite }) => {
                    /**
                     * 基于上一个提示 (overwrite) 的响应来动态确定的提示类型。如果 overwrite 的值为 'no'，
                     * 则抛出一个错误并取消操作。否则，类型为 null，表示不显示此提示。
                     */
                    if (overwrite === 'no') {
                        throw new Error(red('✖') + ' Operation cancelled')
                    }
                    return null
                },
                name: 'overwriteChecker',
            },
            // 包名称是否合法
            {
                /**
                 * 如果项目名称符合包名称的语法，则会默认使用项目名称作为包名称
                 * 否则，需要用户进行命名包名称
                 * @returns {null|string}
                 */
                type: () => (isValidPackageName(getProjectName()) ? null : 'text'),
                name: 'packageName',
                message: reset('Package name:'),
                initial: () => toValidPackageName(getProjectName()),
                validate: (dir) =>
                    /**
                     * 接收用户输入。如果值有效，则应返回，否则应返回错误消息。如果返回，则显示默认错误消息true String false
                     * @param dir
                     * @returns {boolean|string}
                     */
                    isValidPackageName(dir) || 'Invalid package.json name',
            },
        //   是否已经有选择模板参数 没有提示选择
            {
                type:
                    argTemplate && TEMPLATES.map(v=> v.name).includes(argTemplate) ? null : 'select',
                name: 'framework',
                message:
                    // 如果输入模板框架不在默认框架里，提示重新选择
                    typeof argTemplate === 'string' && !TEMPLATES.map(v=> v.name).includes(argTemplate)
                        ? reset(
                            `"${argTemplate}" isn't a valid template. Please choose from below: `,
                        )
                        : reset('Select a framework:'),
                initial: 0,
                choices: TEMPLATES.map((framework) => {
                    const frameworkColor = framework.color
                    return {
                        title: frameworkColor(framework.name),
                        value: framework.name,
                    }
                }),
            },
            {
                onCancel: () => {
                    throw new Error(red('✖') + ' Operation cancelled')
                },
            },
        ])
    } catch (e) {
        console.log(e)
        console.log(e.message)
        return
    }
```

## 获取交互结果

1. framework：获取框架名称
2. overwrite：是否覆盖
3. packageName： 包名称

```javascript
    const { framework, overwrite, packageName } = result
    // console.log(framework, overwrite, packageName)
    const root = path.join(process.cwd(), targetDir)
    if (overwrite === 'yes') {
        setEmptyDir(root)
    } else if (!fs.existsSync(root)) {
        fs.mkdirSync(root, { recursive: true })
    }
```

## 确定最终的框架

```javascript
    // 确定模板
    let template = framework || argTemplate
    const pkgInfo = pkgFromUserAgent(process.env.npm_config_user_agent)
    // 包管理器
    const pkgManager = pkgInfo ? pkgInfo.name : 'npm'
    // console.log(pkgManager)
    // const isYarn1 = pkgManager === 'yarn' && pkgInfo?.version.startsWith('1.')
    // 模板目录
    const templateDir = path.resolve(
        fileURLToPath(import.meta.url),
        '../..',
        `template/template-${template}`,
    )
```

## 复制模板文件

```javascript
    /**
     * 文件写入
     * @param file 需要写入的路径文件
     * @param content 是否使用content作为写入内容
     */
    const fileWrite = (file, content) =>{
        // 获取目标文件路径 xxx/targetDir/xxx
        const targetPath = path.join(root, renameGitignoreFiles[file] ?? file)
        if (content){
            fs.writeFileSync(targetPath, content)
        } else {
            copyFile(path.join(templateDir, file), targetPath)
        }
    }
    // 新增判断模板项目是否存在
    if (!fs.existsSync(templateDir)){
        throw new Error(`${template} not exist`)
    }
    // 读取模板目录下的所有文件
    const files = fs.readdirSync(templateDir)
    // 先排除复制模板项目的package.json，待将包名称修改完成后再复制过来
    for (const file of files.filter((f) => f !== 'package.json')) {
        fileWrite(file)
    }
    // 读取模板项目下的package.json内容
    const pkg = JSON.parse(
        fs.readFileSync(path.join(templateDir, `package.json`), 'utf-8'),
    )
    pkg.name = packageName || getProjectName()
    // 将修改后的package.json复制到指定目标目录
    fileWrite('package.json', JSON.stringify(pkg, null, 2) + '\n')
```

## 完成后的操作

主要提示如何运行项目，如：

```bash
  cd test
  npm install
  npm run dev
```

```javascript
    // 返回相对于第一条路径的第二个路径的路径 如 /app/a, /app/b ==>  ../b
    const cdProjectName = path.relative(process.cwd(), root)
    console.log(`\nDone. Now run:\n`)
    // 如果目标路径不是当前路径下，需要提示cd命令切换到目标路径
    if (root !== process.cwd()) {
        console.log(
            `  cd ${
                cdProjectName.includes(' ') ? `"${cdProjectName}"` : cdProjectName
            }`,
        )
    }
    // 处理当前用户使用的包管理器
    switch (pkgManager) {
        case 'yarn':
            console.log('  yarn')
            console.log('  yarn dev')
            break
        default:
            console.log(`  ${pkgManager} install`)
            console.log(`  ${pkgManager} run dev`)
            break
    }
```

## 工具函数

```javascript
/**
 * 复制文件到指定目录下
 * @param src
 * @param dest
 */
function copyFile(src, dest) {
    // 文件信息状态
    const stat  =fs.statSync(src)
    // 如果是目录
    if (stat.isDirectory()){
    //     继续获取该目录下的文件，并递归创建目标目录
    fs.mkdirSync(dest, { recursive: true })
    for (const file of fs.readdirSync(src)) {
        const srcFile = path.resolve(src, file)
        const destFile = path.resolve(dest, file)
        copyFile(srcFile, destFile)
    }
    } else {
        fs.copyFileSync(src, dest)
    }
}
/**
 * 格式化项目名称
 * 将最后的/替换为空
 * @param targetDir
 * @returns {string | undefined}
 */
function formatTargetDir(targetDir) {
    return targetDir?.trim().replace(/\/+$/g, '')
}

/**
 * 校验有效项目名称 因为包名称默认是基于项目名称
 * @param projectName
 * @returns {boolean}
 */
function isValidPackageName(projectName) {
    return /^(?:@[a-z\d\-*~][a-z\d\-*._~]*\/)?[a-z\d\-~][a-z\d\-._~]*$/.test(
        projectName,
    )
}

/**
 * 转换有效包名称
 * @param projectName
 * @returns {string}
 */
function toValidPackageName(projectName) {
    return projectName
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/^[._]/, '')
        .replace(/[^a-z\d\-~]+/g, '-')
}

/**
 * 预处理_gitignore文件，转为正确的gitignore
 * @type {{_gitignore: string}}
 */
const renameGitignoreFiles= {
    _gitignore: '.gitignore',
}
/**
 * 清空目录列表
 * @param dir
 */
function setEmptyDir(dir) {
    if (!fs.existsSync(dir)) {
        return
    }
    for (const file of fs.readdirSync(dir)) {
        if (file === '.git') {
            continue
        }
        fs.rmSync(path.resolve(dir, file), { recursive: true, force: true })
    }
}

/**
 * 获取用户当前环境的node包管理器
 * @param userAgent
 * @returns {undefined|{name: *, version: *}}
 */
function pkgFromUserAgent(userAgent) {
    if (!userAgent) return undefined
    const pkgSpec = userAgent.split(' ')[0]
    const pkgSpecArr = pkgSpec.split('/')
    return {
        name: pkgSpecArr[0],
        version: pkgSpecArr[1],
    }
}
/**
 * 判断当前路径是否为空
 * @param path
 * @returns {boolean}
 */
function isEmpty(path) {
    const files = fs.readdirSync(path)
    return files.length === 0 || (files.length === 1 && files[0] === '.git')
}
```

# 打包

这里打包工具使用的是`unbuild`,`unbuild` 是一个基于 `rollup` 的打包工具。官方README中描述它有以下这些优势。

- 强大的构建功能 - unbuild 集成了 Rollup 构建工具，支持 TypeScript，并能生成 CommonJS 和模块格式以及类型声明，提供了丰富的构建功能。
- 自动化配置 - unbuild 可以从 package.json 文件中自动推断构建配置和入口点，减少了手动配置的工作量。
- 与 `mkdist` 集成，通过文件到文件的转译生成无捆绑的 dist
- 使用 `jiti` 开发过程中只需要一次编译之后的改动都可以实时同步调试。而无需在开发过程中监视和重建

此外可以将打包后的文件发布到npm，发布过程时间原因，这里就不一一讲述了。

# 自定义和扩展

我们的脚手架工具只是一个基础框架，你可以根据需要进行自定义和扩展。例如，你可以添加更多的框架模板、支持更多的初始化选项、集成代码格式化工具等。

# 验证使用

完成开发后，你可以将你的脚手架工具发布到npm上，供其他开发者使用。其他开发者只需通过npm安装你的工具，并在命令行中运行相应的命令即可快速搭建他们的项目。

![image-20240507113910823](https://c-typora.oss-cn-guangzhou.aliyuncs.com/c-typora/image-20240507113910823.png)

**注意： 在文档中使用命令应该是npx，同时，在v1.0.0版本中基于测试功能，现在的模板只是简单的模板，后期会抽出时间补上这一块**

# 总结

通过Node.js和几个关键的npm模块，我们可以轻松地构建一个交互式的脚手架工具。这个工具不仅可以帮助开发者快速选择并初始化他们的项目，还可以根据需要进行自定义和扩展。如果你是一个经常需要搭建新项目的开发者，那么一个高效的脚手架工具无疑会大大提高你的工作效率。

# 相关链接

[项目地址]([C1320/create-eqian-app: 使用Node.js构建一个交互式的脚手架工具 (github.com)](https://github.com/C1320/create-eqian-app))

[create-vite](https://github.com/vitejs/vite/tree/main/packages/create-vite)

