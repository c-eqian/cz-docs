---
title: vite配置SSL证书
date: 2023-02-02 17:03:21
author: 秋谨
categories:
  - vue
tags:
  - vite
  - SSL
---

## 配置证书

[参考](https://zhuanlan.zhihu.com/p/551720193)

> [mkcert](https://link.zhihu.com/?target=https%3A//www.npmjs.com/package/mkcert)

### 安装

```bash
npm i mkcert -g
```

### 生成ca证书

```bash
mkcert create-ca // 进入需要生成证书的目录
```

### 生成cert证书

```bash
mkcert create-cert --domains 127.0.0.1,localhost,custom.domain.xxx // 配置证书地址，域名等
```

## 安装证书

- 双击ca.crt，在弹出对话框中点击“安装证书”

![img](https://pic1.zhimg.com/80/v2-d6290f454bf4c5ca38b90d32195a8ba4_720w.webp)

- 弹出框中，选择本地计算机，点击下一步

![img](https://pic3.zhimg.com/80/v2-ddb8d1fc01b1fb15cfd88458c8ca7bce_720w.webp)

- 弹出框中，按截图提示操作

![img](https://pic3.zhimg.com/80/v2-d86fe72318ec2a1d6be9b1168df3f84a_720w.webp)

- 弹出框中，点击确定即可

![img](https://pic2.zhimg.com/80/v2-bdda327e618475f823e2f6733042542d_720w.webp)

## 验证证书

### 修改vite.config.ts

```js
server: {
-  https: true,
+  https: {
+    cert: fs.readFileSync(path.join(__dirname, 'keys/cert.crt')),
+    key: fs.readFileSync(path.join(__dirname, 'keys/cert.key')),
+  },
},
```

### 启动本地服务

```bash
npm run dev
```
