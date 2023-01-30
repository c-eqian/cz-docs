---
title: git常用
date: 2022-12-28 10:01:39
author: 秋谨
categories:
  - 其他
tags:
  - git
---

<Boxx/>

# git常用命令

### git安装后-指定名称和邮箱

```sh
git config --global user.name "Your Name"

git config --global user.email "email@example.com"
```

1.在想要同步的文件夹中初始化git

```sh
git init
```

2.存入暂存区，提交至本地

```sh
git add . 
git commit -m "测试"
```

3.可以查看所有分支

```sh
git branch // 查看本地分支
git branch -a // 查看全部分支
```

4.添加远程分支

```sh
git remote add origin https://gitee.com/****/aa.git
git checkout -b 本地分支名 origin/远程分支名    // 拉取远程分支并创建本地分支
git clone -b 远程分支 远程地址   // 拉取指定分支
```

5.刷新分支

```sh
git fetch
```

6.本地分支关联远程分支

```sh
git branch --set-upstream-to=origin/远程分支名称  本地分支名称
```

7.创建本地分支关联远程分支

```sh
git checkout -b [分支名] [远程名]/[分支名]
```

8.切换分支

```sh
git checkout 本地分支/远程分支
```

9.显示所有的操作记录

```sh
git reflog
```

10.查看刚才提交的 commit id

```sh
git log
```

11.版本回退

```sh
git reset --hard（commit版本号）
```

12.git全局用户设置

```sh
git config --global user.name "***"
git config --global user.email "**
```

13.查看git配置信息

```sh
git config --list
```

14.拉代码

```sh
git pull
```

15.推送代码

```sh
git push (-u origin master)
```

16.删除本地分支

```sh
git branch -d 分支名
git rm -rf 文件名 // 删除文件
```

17.缓存修改中的代码

```sh
git stash save "save message"  # 执行存储时，添加备注，方便查找，只有git stash 也是可以的，但查找时不方便识别。
```

18.将缓存的代码恢复使用

```sh
git stash pop # 命令恢复之前缓存的工作目录，将缓存堆栈中的对应stash删除，并将对应修改应用到当前的工作目录下,默认为第一个stash,即stash@{0}，如果要应用并删除其他stash，命令：git stash pop stash@{$num} ，比如应用并删除第二个：git stash pop stash@{1}
```

19.查看缓存栈所有的缓存内容

```sh
git stash list
```

20.将指定的commit应用于其他分支 / 转移某个分支的最近一次提交

```sh
git cherry-pick xxxx(commit版本号/分支名)
```

21.查看本地文件的修改状态

```sh
git status
```

