---
title: nvm版本管理
date: 2022-12-28 10:03:57
author: 秋谨
categories:
  - 其他
tags:
  - nvm
  - npm
---

<Boxx/>

# nvm 版本管理

下载地址：

```go
 https://github.com/coreybutler/nvm-windows/releases
```

## 常用命令

```node
nvm list     //查看已安装的nodejs版本
nvm on      // 启用node.js版本管理
nvm off   // 禁用node.js版本管理(不卸载任何东西)
nvm install <version>       // 安装node.js的命名 version是版本号 例如：nvm install 8.12.0
nvm use <version>      //使用某一version的nodejs
nvm uninstall <version>   // 卸载指定版本的nodejs
nvm version	查看nvm版本
nvm ls	查看所有已经安装的Nodejs版本
nvm list installed	查看所有已经安装的Nodejs版本
nvm ls available	查看运程线上所有版本(列出所有可以安装的node版本号)
nvm root	查看nvm安装路径
nvm arch	查看节点是否以32位或64位模式运行
nvm current	查看当前node版本
nvm proxy	查看设置与代理
```

## 添加淘宝镜像

在安装目录下的 settings 中加入两行代码，采用淘宝镜像：

```sh
node_mirror: https://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/
```

## 可能遇到的问题：

```tex
错误1：无法加载文件 C:\Program Files\nodejs\npm.ps1，因为在此系统上禁止运行脚本，有关详细信息请参阅。。。！

错误2：xxx在使用时出现：无法将“xxx”项识别为 cmdlet、函数、脚本文件或可运行程序的名称。请检查名称的拼写，如果包括路径，请确保路径正确，然后再试一次。
解决办法1：执行策略权限

1、用快捷键：Win + X，选择 Windows Power Shell(管理员)(A) ，以管理员身份打开Power Shell。

2、在打开的打开Power Shell窗口中输入命令：set-executionpolicy remotesigned
```
