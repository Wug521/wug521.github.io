---
title: Hexo 常用命令
date: 2019-01-30 14:24:38
tags:
---
## hexo 常用命令

``` 
1.hexo s  
启动本地服务器，hexo s 是 hexo server；
对Hexo根目录_config.yml 的修改,需要重启本地服务器后才能预览效果
		
2.hexo new <name>
如：hexo new "文件名"
新建文件,新建一篇标题为"文件名"文章,因为标题里有空格,所以加上了引号;文章标题可以在对应md文件里改，新建时标题可以写的简单些
		
3.hexo clean	
清除缓存,清除缓存文件 db.json 和已生成的静态文件 public

4.hexo g
生成网站静态文件到默认设置的public文件夹; hexo g 是hexo generate的缩写	

5.hexo new page <name>
新建一个标题为name的页面，默认链接地址为 主页地址/name/;页面不会出现在首页文章列表和归档中,也不支持设置分类和标签

6.hexo d
自动生成网站静态文件,并部署到设定的仓库;hexo d 是 hexo deploy 的缩写
```

