---
title: mysql安装教程
date: 2019-01-30 13:22:19
tags:
---

## MYSQL
> mysql解压版安装

----------
1.将解压版(免安装包)解压至指定目录；
2.添加MySQL环境变量；
3.配置my.ini文件，防止在mysql的根目录下，my.ini的内容
```
[Client]
# 设置mysql客户端连接服务端时默认使用的端口和默认字符集
port = 3306
default-character-set=utf8
 
[mysqld]
# 设置3306端口
port = 3306
server_id =10

# 自定义设置mysql的安装目录，即解压mysql压缩包的目录
basedir=E:\MYSQL\mysql-8.0.14-winx64

# 自定义设置mysql数据库的数据存放目录
datadir=E:\MYSQL\mysql-8.0.14-winx64\data

# 允许最大连接数
max_connections=200

# 服务端使用的字符集默认为UTF8
character-set-server=utf8

# 创建新表时将使用的默认存储引擎
default-storage-engine=INNODB


sql_mode=NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES
 
#忘记密码时使用
#skip-grant-tables
#设置协议认证方式
default_authentication_plugin=mysql_native_password
 
[mysql]
default-character-set=utf8
```
4.在MySQL的bin目录下执行命令
```
mysqld --initialize --user=mysql --console
```
表示初始化mysql服务，能在命令行中显示临时的初始密码，后面进入mysql会用到，所以这个要保存好,执行结果中会包含临时密码   A temporary password is generated for root@localhost:    **密码** ，临时初始化为: **密码**；
5.执行命令
``` 
mysqld --install
```
表示安装mysql服务，成功则会提示“Serve successfully installed.”；
若是不小心目录弄错了，要装到其他目录去，再装的时候就有一个问题，提示“ervice already exist!”， 此时输入 **mysqld --remove ** 可解决
6.执行命令
``` 
net start mysql 
```
表示启动mysql服务，此操作执行成功后就会提示“服务MySQL已经启动成功”；
7.连接mysql，执行命令
``` 
mysql -u root -p 
```
回车输入密码，请看 =>  **步骤4**
8.修改密码，在进入了mysql之后执行
``` 
 ALTER USER root@localhost IDENTIFIED BY '密码'; 
```
