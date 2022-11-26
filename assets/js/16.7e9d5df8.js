(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{435:function(s,a,t){"use strict";t.r(a);var n=t(2),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("Boxx"),s._v(" "),a("h2",{attrs:{id:"安装git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装git"}},[s._v("#")]),s._v(" 安装git")]),s._v(" "),a("p",[s._v("如果没有就自行安装一下，在终端输入安装指令")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("yum install git\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"生成公钥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成公钥"}},[s._v("#")]),s._v(" 生成公钥")]),s._v(" "),a("p",[s._v("生成公钥，输入下面命令后"),a("strong",[s._v("回车三下")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ssh-keygen -t rsa \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("查看公钥，按顺序输入下面代码，最后一个是获取密钥，cat 后面是公钥文件名")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("cd ~/.ssh\nls\ncat id_rsa.pub\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("复制绿色框部分全部内容，这就是生成的SSH密钥")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://c-typora.oss-cn-guangzhou.aliyuncs.com/c-typora/image-20210826181827828.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"创建gitee仓库-添加公钥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建gitee仓库-添加公钥"}},[s._v("#")]),s._v(" 创建Gitee仓库，添加公钥")]),s._v(" "),a("p",[s._v("仓库就简单的默认仓库就好，要"),a("strong",[s._v("记好仓库名")]),s._v("。\n进入仓库管理的添加公钥功能，将上面复制的密钥copy进底下后，标题会自动生成，直接点击添加即可。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://c-typora.oss-cn-guangzhou.aliyuncs.com/c-typora/image-20210826182253272.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"宝塔安装webhook并配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#宝塔安装webhook并配置"}},[s._v("#")]),s._v(" 宝塔安装WebHook并配置")]),s._v(" "),a("p",[s._v("在宝塔界面的软件商店里搜索webhook并安装，安装成功后添加脚本")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://c-typora.oss-cn-guangzhou.aliyuncs.com/c-typora/image-20210826182426542.png",alt:""}})]),s._v(" "),a("p",[a("img",{attrs:{src:"C:%5CUsers%5C24291%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20210826183008307.png",alt:""}})]),s._v(" "),a("h3",{attrs:{id:"执行脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行脚本"}},[s._v("#")]),s._v(" 执行脚本")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n \n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#输出当前时间")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--date")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0 days ago'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"+%Y-%m-%d %H:%M:%S"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Start"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#判断宝塔WebHook参数是否存在")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v(" \n          "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"param参数错误"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"End"')]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#git项目路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gitPath")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/www/wwwroot/'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#git 网址")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gitHttp")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://gitee.com/cyq13/AppletInterface.git"')]),s._v(" //自己仓库的链接\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Web站点路径：'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$gitPath")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#判断项目路径是否存在")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$gitPath")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$gitPath")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#判断是否存在git目录")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('".git"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"在该目录下克隆 git"')]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$gitHttp")]),s._v(" gittemp\n                "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" gittemp/.git "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rf")]),s._v(" gittemp\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"拉取最新的项目文件"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#sudo git reset --hard origin/master")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull        \n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"设置目录权限"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-R")]),s._v(" www:www "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$gitPath")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"End"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"该项目路径不存在"')]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"新建项目目录"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$gitPath")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$gitPath")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#判断是否存在git目录")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('".git"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"在该目录下克隆 git"')]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$gitHttp")]),s._v(" gittemp\n                "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" gittemp/.git "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-rf")]),s._v(" gittemp\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"拉取最新的项目文件"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#sudo git reset --hard origin/master")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"设置目录权限"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-R")]),s._v(" www:www "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$gitPath")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"End"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br")])]),a("p",[s._v("添加完成，点击"),a("strong",[s._v("编辑")]),s._v("再确认一下，如果被过滤就再把代码复制进去然后保存。")]),s._v(" "),a("p",[s._v("确保脚本没问题后，重启我们的宝塔，在终端输入下面代码")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("/etc/init.d/bt restart\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果直接通过宝塔面板重启失败，尽量进入**XShell6*，连接服务器，连接成功后再输入上面代码。")]),s._v(" "),a("p",[s._v("重启后，进入软件商店，查看我们宝塔WebHook生成的密钥，复制公网地址内容。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://c-typora.oss-cn-guangzhou.aliyuncs.com/c-typora/image-20210826183513405.png",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"配置gitee的webhooks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置gitee的webhooks"}},[s._v("#")]),s._v(" 配置Gitee的WebHooks")]),s._v(" "),a("p",[a("strong",[s._v("进入仓库的WebHooks功能页面")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://c-typora.oss-cn-guangzhou.aliyuncs.com/c-typora/image-20210826183720859.png",alt:""}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://c-typora.oss-cn-guangzhou.aliyuncs.com/c-typora/image-20210826184108580.png",alt:""}})]),s._v(" "),a("p",[s._v("在宝塔面板的终端设置git,代码同步时不会弹出输入账号密码。第一次clone需要输入用户名和密码")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--global")]),s._v(" user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"用户名"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--global")]),s._v(" user.password "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"密码"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--global")]),s._v(" credential.helper store //会生成.gitconfig 的文件\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" .gitconfig   //如果报错: No such "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" or directory，就用下一行的代码\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" ~/.gitconfig  //显示内容\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("strong",[s._v("将Gitee仓库clone到服务器的本地目录中")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /www/wwwroot/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("创库地址"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("当clone成功后，就已经是配置好了，点击测试，然后查看更多，可以看到已经请求成功。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://c-typora.oss-cn-guangzhou.aliyuncs.com/c-typora/image-20210826184759615.png",alt:""}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://c-typora.oss-cn-guangzhou.aliyuncs.com/c-typora/image-20210826184812200.png",alt:""}})]),s._v(" "),a("p",[s._v("宝塔里查看WebHook日志")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://c-typora.oss-cn-guangzhou.aliyuncs.com/c-typora/image-20210826184923434.png",alt:""}})])],1)}),[],!1,null,null,null);a.default=e.exports}}]);