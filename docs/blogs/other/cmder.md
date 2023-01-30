---
title: cmder
date: 2022-12-28 09:58:46
author: 秋谨
tags:
  - cmder
categories:
  - 其他

---

<Boxx/>

# 下载安装

> **1、官网地址：http://cmder.net/ 下载**

# 配置环境变量

![image-20220718212903825](https://c-typora.oss-cn-guangzhou.aliyuncs.com/c-typora/image-20220718212903825.png)

## 添加到右键

```
在管理员模式下的命令行输入：Cmder.exe /REGISTER ALL 回车
```

## VSCode 配合 cmder

- 编辑 vscode 的 settings.json (目录自行替换)

```json
 "git.enabled": true,
  "git.path": "D:\\soft\\cmder\\vendor\\git-for-windows\\cmd\\git.exe",
  "terminal.integrated.profiles.windows": {
    "bash": {
         "path": "D:\\soft\\cmder\\vendor\\git-for-windows\\bin\\bash.exe",
         "args": []
     }
  },
  "terminal.integrated.defaultProfile.windows": "bash",
```

## 修改λ成$

打开cmder目录下vendor文件夹clink.lua

![image-20220718213910521](https://c-typora.oss-cn-guangzhou.aliyuncs.com/c-typora/image-20220718213910521.png)

### 中文乱码问题

```
set LANG=zh_CN.UTF-8  
set LC_ALL=zh_CN.utf8
```

![image-20220718214057685](https://c-typora.oss-cn-guangzhou.aliyuncs.com/c-typora/image-20220718214057685.png)