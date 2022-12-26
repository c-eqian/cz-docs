---
title: centos jenkins
date: 2022-11-23
tags:
  - centos
  - jenkins
categories:
  - 其他

---

<Boxx/>

### 1.安装 JDK11

```shell
yum install java-11-openjdk* -y
```

### 2.查看当前使用的 java 版本 可以看到以下信息则可以继续安装 jenkins

```shell
[root@bogon ~]# java -version
openjdk version "11.0.15" 2022-04-19 LTS
OpenJDK Runtime Environment 18.9 (build 11.0.15+9-LTS)
OpenJDK 64-Bit Server VM 18.9 (build 11.0.15+9-LTS, mixed mode, sharing)
```

如果以前已经安装过其它版本的 java 运行时环境，则需要切换使用 jdk11，使用 alternatives --config java 切换 java 版本，切换版本后验证下是否切换成功

```
[root@iZ5hkuztint4rsZ ~]# alternatives --config java

There are 2 programs which provide 'java'.

  Selection    Command
-----------------------------------------------
*  1           java-1.8.0-openjdk.x86_64 (/usr/lib/jvm/java-1.8.0-openjdk-1.8.0.342.b07-1.el7_9.x86_64/jre/bin/java)
 + 2           java-11-openjdk.x86_64 (/usr/lib/jvm/java-11-openjdk-11.0.16.0.8-1.el7_9.x86_64/bin/java)

Enter to keep the current selection[+], or type selection number:
```

把 Jenkins 库添加到 yum 库,然后安装

```
wget -O /etc/yum.repos.d/jenkins.repo http://pkg.jenkins-ci.org/redhat/jenkins.repo
 rpm --import https://jenkins-ci.org/redhat/jenkins-ci.org.key
 yum install -y jenkins
```

如果 yum 安装 jenkins 出现签名认证失败,再启动命令后面加上- -nogpgcheck

```
yum install -y jenkins --nogpgcheck
```

### 3.配置 jenkis 的端口

```
vi /etc/sysconfig/jenkins
#此端口不冲突可以不修改
JENKINS_PORT="8080"
```

### 4.启动 jenkins

```4.启动jenkins
# start 启动 stop停止,restart重启
service jenkins start/stop/restart
```

安装成功后 Jenkins 将作为一个守护进程随系统启动
系统会创建一个“jenkins”用户来允许这个服务，如果改变服务所有者，同时需要修改/var/log/jenkins, /var/lib/jenkins, 和/var/cache/jenkins 的所有者
启动的时候将从/etc/sysconfig/jenkins 获取配置参数

### 5.后台运行

- **查看`Jenkins`状态**

```bash
ps -ef | grep jenkins
```

- **后台启动方式**

```bash
nohup java -jar jenkins.war --httpPort=13203
```

- **注意**

- 启动的路径必须是`jenkins.war`所在的文件目录。`find / -name *jenkins.war`
- `nohup`命令的输出的文件是`nohup.out`，详细说明见`nohup --help`。
