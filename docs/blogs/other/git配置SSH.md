---
title: git配置SSH
date: 2022-12-28 10:03:08
author: 秋谨
categories:
  - 其他
tags:
  - git
  - SSH
---

<Boxx/>

# git 配置 SSH

## 生成秘钥

```javascript
ssh-keygen -t rsa -C "2429120006@qq.com"
```

按照提示完成三次回车，即可生成 ssh key。通过查看 ~/.ssh/id_rsa.pub 文件内容，获取到你的 public key

![image-20220717214506421](https://c-typora.oss-cn-guangzhou.aliyuncs.com/c-typoraimage-20220717214506421.png)

```
cat ~/.ssh/id_rsa.pub
```

![image-20220717220331840](https://c-typora.oss-cn-guangzhou.aliyuncs.com/c-typora/image-20220717220331840.png)

## 部署公钥

复制生成后的 ssh key，通过仓库主页 **「管理」->「部署公钥管理」->「添加部署公钥」** ，添加生成的 public key 添加到仓库中。

![image-20220717220727126](https://c-typora.oss-cn-guangzhou.aliyuncs.com/c-typora/image-20220717220727126.png)

## 本地添加 ssh 信任

添加后，在终端（Terminal）中输入

```
ssh -T git@gitee.com
```

首次使用需要确认并添加主机到本机 SSH 可信列表。若返回 Hi XXX! You’ve successfully authenticated, but Gitee.com does not provide shell access. 内容，则证明添加成功。

https://www.php.cn/tool/git/475056.html

