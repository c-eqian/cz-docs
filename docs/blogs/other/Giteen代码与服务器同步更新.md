---
title: Gitee代码与服务器同步更新
date: 2021-11-25
tags:
 - centos
 - git
categories:
 -  其他
---

<Boxx/>

##  安装git

如果没有就自行安装一下，在终端输入安装指令

```
yum install git
```

## 生成公钥

生成公钥，输入下面命令后**回车三下**

```
ssh-keygen -t rsa 
```

查看公钥，按顺序输入下面代码，最后一个是获取密钥，cat 后面是公钥文件名

```
cd ~/.ssh
ls
cat id_rsa.pub
```

复制绿色框部分全部内容，这就是生成的SSH密钥

![](https://c-typora.oss-cn-guangzhou.aliyuncs.com/c-typora/image-20210826181827828.png)

## 创建Gitee仓库，添加公钥

仓库就简单的默认仓库就好，要**记好仓库名**。
进入仓库管理的添加公钥功能，将上面复制的密钥copy进底下后，标题会自动生成，直接点击添加即可。

![](https://c-typora.oss-cn-guangzhou.aliyuncs.com/c-typora/image-20210826182253272.png)

## 宝塔安装WebHook并配置

在宝塔界面的软件商店里搜索webhook并安装，安装成功后添加脚本

![](https://c-typora.oss-cn-guangzhou.aliyuncs.com/c-typora/image-20210826182426542.png)



![](C:\Users\24291\AppData\Roaming\Typora\typora-user-images\image-20210826183008307.png)



### 执行脚本

```shell
#!/bin/bash
 
echo ""
#输出当前时间
date --date='0 days ago' "+%Y-%m-%d %H:%M:%S"
echo "Start"
#判断宝塔WebHook参数是否存在
if [ ! -n "$1" ];
then 
          echo "param参数错误"
          echo "End"
          exit
fi
#git项目路径
gitPath="/www/wwwroot/$1"
#git 网址
gitHttp="https://gitee.com/cyq13/AppletInterface.git" //自己仓库的链接
echo "Web站点路径：$gitPath"
#判断项目路径是否存在
if [ -d "$gitPath" ]; then
        cd $gitPath
        #判断是否存在git目录
        if [ ! -d ".git" ]; then
                echo "在该目录下克隆 git"
                sudo git clone $gitHttp gittemp
                sudo mv gittemp/.git .
                sudo rm -rf gittemp
        fi
        echo "拉取最新的项目文件"
        #sudo git reset --hard origin/master
        sudo git pull        
        echo "设置目录权限"
        sudo chown -R www:www $gitPath
        echo "End"
        exit
else
        echo "该项目路径不存在"
                echo "新建项目目录"
        mkdir $gitPath
        cd $gitPath
        #判断是否存在git目录
        if [ ! -d ".git" ]; then
                echo "在该目录下克隆 git"
                sudo git clone $gitHttp gittemp
                sudo mv gittemp/.git .
                sudo rm -rf gittemp
        fi
        echo "拉取最新的项目文件"
        #sudo git reset --hard origin/master
        sudo git pull
        echo "设置目录权限"
        sudo chown -R www:www $gitPath
        echo "End"
        exit
fi
```

添加完成，点击**编辑**再确认一下，如果被过滤就再把代码复制进去然后保存。

确保脚本没问题后，重启我们的宝塔，在终端输入下面代码

```
/etc/init.d/bt restart
```

如果直接通过宝塔面板重启失败，尽量进入**XShell6*，连接服务器，连接成功后再输入上面代码。

重启后，进入软件商店，查看我们宝塔WebHook生成的密钥，复制公网地址内容。

![](https://c-typora.oss-cn-guangzhou.aliyuncs.com/c-typora/image-20210826183513405.png)

## 配置Gitee的WebHooks

**进入仓库的WebHooks功能页面**

![](https://c-typora.oss-cn-guangzhou.aliyuncs.com/c-typora/image-20210826183720859.png)

![](https://c-typora.oss-cn-guangzhou.aliyuncs.com/c-typora/image-20210826184108580.png)

在宝塔面板的终端设置git,代码同步时不会弹出输入账号密码。第一次clone需要输入用户名和密码

```bash
git config --global user.name "用户名"
git config --global user.password "密码"
git config --global credential.helper store //会生成.gitconfig 的文件
cat .gitconfig   //如果报错: No such file or directory，就用下一行的代码
cat ~/.gitconfig  //显示内容
```

**将Gitee仓库clone到服务器的本地目录中**

```bash
cd /www/wwwroot/
git clone <创库地址>
```

当clone成功后，就已经是配置好了，点击测试，然后查看更多，可以看到已经请求成功。

![](https://c-typora.oss-cn-guangzhou.aliyuncs.com/c-typora/image-20210826184759615.png)

![](https://c-typora.oss-cn-guangzhou.aliyuncs.com/c-typora/image-20210826184812200.png)

宝塔里查看WebHook日志

![](https://c-typora.oss-cn-guangzhou.aliyuncs.com/c-typora/image-20210826184923434.png)

