---
title: GIT 常用命令
date: 2019-01-30 14:22:57
tags:
---
## Git 常用命令
``` 
	初始化git: git init
	
	提交到版本库放入暂存: git add ./filename 
	
	提交到版本库: git commit -m "备注" 
	
	关联远端仓库: git remote add origin http://github.com/youname/repo.git
	
	删除远端仓库关联: git remote rm origin
	
	查看已关联远端库 : git remote -v
	
	提交到远端仓库 第一次以后用：git push origin mastergit push -u origin master 
	
	查看记录: git log 
	
	回退版本 HEAD HEAD^  HEAD^^ HEAD~100: git reset --hard HEAD^
	
	查看文件内容: cat filename
	
	记录每次命令查找id: git reflog
	
	查看文件状态: git status 
	
	放弃工作区中的内容: git checkout -- readme.txt
	
	删除文件: git rm filename 
	
	查看分支：git branch
	
	创建分支：git branch <name>
	
	切换分支：git checkout <name>
	
	创建+切换分支：git checkout -b <name>
	
	合并某分支到当前分支：git merge <name>
	
	删除分支：git branch -d <name>
```