[TOC]

## Git仓库

### 创建git仓库

* 初始化：在git bash 中将路径切换到目标目录(lian)下，执行指令 `git init`

* 提交文件：文件必须在目录(lian)下，或者子目录下也行

  1.  `git add .`
  2.  `git commit -m 'xxx' `：xxx输入的是本次提交说明

  git add 可以多次执行，“git add 文件名”可以多次提交不同的文件，git commit 一次提交多个文件

### 其他指令

1. `git status`：仓库当前状态，可以查看仓库修改了哪些文件以及当前仓库内有没有需要提交的文件

2. `git diff`：“git diff 文件名”，可以查看具体文件里修改了什么内容

3. `git log`：查看最近的三次修改历史，加上参数`git log --pretty=oneline`，可以得到一大串数字表示的是commit id (版本号)，穿梭到过去

4. `git reset`：`HEAD` 表示当前版本，`HEAD^`表示上一个版本，`HEAD~n`表示上n个版本

   * 回退上一个版本：“`git reset --hard HEAD^`“

   * 回退上一个版本之后回退为最新版本：”`git reset --hard  版本号前几位数字即可`“

5. `git reflog`：记录每一次命令，可以找到版本号，穿梭到未来和过去

6. `cat <filename>` ：查看文件内容

工作区：电脑里能看到的目录

版本库：创建完git之后会有一个.git的目录，即为版本库，版本库中有暂存区stage和第一个分支master

​	      提交版本：1. `git add`将文件修改添加到暂存区域；2. `git commit`将暂存区中的所有内容提交到当前分支

### 撤销修改

两种情况：

1. 修改完未添加到暂存区：`git checkout -- file`：丢弃工作区修改内容，有两种情况：

   * 文件自修改后还没有被放到暂存区：撤销修改就回到和版本库一样的状态；

   * 文件已经添加到暂存区后又作了修改：撤销修改就回到添加到暂存区后的状态。

   总之就是将文件回到暂存区或者版本库中的状态

2. 修改完已经添加到暂存区域： `git reset HEAD <file>`：把暂存区的修改回退到工作区域，然后`git checkout -- file`

### 删除文件

1. 手动删除文件：
   1. 在文件管理器中把没用的文件删了
   2. `rm <file>` ：删除文件
2. 确定删除文件
   1. `git status` ：看哪些文件被删除
   2. `git rm <file> / git add <file>`：确定删除
   3. `git commit`

3. 删错文件：`git checkout -- test.txt`
   git checkout其实是用版本库里的版本替换工作区的版本，无论工作区是修改还是删除，都可以“一键还原”。

## 远程仓库

### 创建gIthub

### 添加远程仓库

添加远程库的前提：已经有了本地库，然后将本地库与远程库连接起来

1. 在github网站上创建一个新的仓库，仓库名字为本地仓库的名字

2. 把本地仓库与远程仓库连接起来：

   `git remote add origin https://github.com/lianstars/Lian.git`

3.  把本地库的所有内容推送到远程库：这是第一次提交

   `git push -u origin master`

   `git push`：实际上是把当前分支`master`推送到远程

   `-u`参数：不但把本地的`master`分支内容推送的远程新的`master`分支，还会把本地的`master`分支和远程的`master`分支关联起来

4. 以后的每次提交：`git push origin master`

### 从远程库克隆

1. 创建远程库：在github上创建一个新的仓库，在选项”Initialize this repository with a README“前打勾✔

2. 克隆本地库：`git clone`       git clone git@github.com:lianstars/Lian.git

   克隆地址协议：`https / ssh `，默认使用`ssh`，使用`https`除了速度慢以外，还有个最大的麻烦是每次推送都必须输入口令

## 分支管理

### 创建与合并分支

主分支：`master`，`master`分支是一条线，`Git`用`master`指向最新的提交，再用`HEAD`指向`master`，就能确定当前分支，以及当前分支的提交点

![1554553152033](C:\Users\lynn\AppData\Roaming\Typora\typora-user-images\1554553152033.png)

创建分支：创建新的分支，例如`dev`时，`Git`新建了一个指针叫`dev`，指向`master`相同的提交，再把`HEAD`指向`dev`，就表示当前分支在`dev`上

从现在开始，对工作区的修改和提交就是针对`dev`分支了，比如新提交一次后，`dev`指针往前移动一步，而`master`指针不变

![1554554259576](C:\Users\lynn\AppData\Roaming\Typora\typora-user-images\1554554259576.png)

合并分支：把`master`指向`dev`的当前提交，就完成了合并

1. 创建分支dev：`git checkout -b dev`   === `git branch` dev + `git checkout dev`  (两条指令)

   `-b`参数：表示创建分支并进行切换

   `git checkout -b <name>` ：创建+切换分支

    `git branch <name>` ：创建分支

   `git checkout <name>`：切换分支

   `git branch` ：查看当前分支，列出所有分支，当前分支前面会标一个`*`号

2. 分支合并到master上：`git merge dev`

   `git merge <name>`：合并指定分支到当前分支上，所以上述命令是在`master`上执行的

3. 删除分支：`git branch -d <name>`

### 解决冲突

当master分支跟feature1分支各自有新的提交，此时执行`git merge`合并会出现冲突，分支如下

![1554555593719](C:\Users\lynn\AppData\Roaming\Typora\typora-user-images\1554555593719.png)

`git status`可以告诉我们冲突的文件

`cat <filename>`：查看文件内容，Git用`<<<<<<<`，`=======`，`>>>>>>>`标记出不同分支的内容

解决冲突：在feature1分支中做两个分支中内容的合并，再`git add` 和 `git commit`，此时分支如下

![1554556482259](C:\Users\lynn\AppData\Roaming\Typora\typora-user-images\1554556482259.png)

`git log --graph`：命令可以看到分支合并图

### 分支管理策略

分支合并模式：

1. Fast forward`模式：如前文中在master下`git merge <file>`，合并看不出来曾经做过合并

2.  `--no-ff`参数模式：禁用  `Fast forward`模式，在merge时生成一个新的commit，这样，从分支历史上就可以看出分支信息

   `git checkout -b <name>`

   `git add <file>`

   `git commit -m 'xxx'`

   `git checkout master`

   ` git merge --no-ff -m "merge with no-ff" <name>`

   【--no-ff 表示禁用Fast forward；-m 创建新的commit】

![1554565396080](C:\Users\lynn\AppData\Roaming\Typora\typora-user-images\1554565396080.png)

### Bug分支

当前分支工作进行到一半未能提交，突然有bug需要修复

1. `git stash`：把当前工作现场“储藏”起来，等以后恢复现场后继续工作

   可以用`git status  `查看工作区，是干净的（除非有没有被git管理的文件）

2. 创建分支修复bug：

   确定在哪个分支上修改，`git checkout`到目标分支

   在目标分支上创建临时分支，`git checkout -b <name>`

3. 修复bug

4. 提交，`git add `+ `git commit`

5. `git checkout`切换到master上进行`merge`合并

6. `git checkout`回原来干活的分支上继续干活，此时`git status`工作区是干净的，`stash`把内容存在某个地方

   恢复工作区方法：

   1. `git stash apply`，恢复后用 `git stash drop` 来删除stash内容
   2. `git stash pop`，恢复的同时删除stash内容

7. 对次stash的时候恢复：先用`git stash list` 查看，然后用命令`git stash apply stash@{0}`

### Feature分支       

添加新功能的时候，新建一个feature分支，在上面开发，完成后，合并，最后，删除该feature分支

`git branch -D <name>`：丢弃一个没有被合并过的分支

### 多人协作

本地master与远程master相对应，远程仓库默认名称为`origin`

`git remote`：查看远程库的信息

`git remote -v`：查看更多远程库的详细信息

`git push origin <name>` ：推送分支到远程库

`git pull`：抓取远程的新提交

提交冲突：当你`git push`的时候远程仓库的分支比本地更新

解决：抓取分支，用`git pull`把最新的提交从`orign/dev`上抓下来在本地合并解决冲突再推送

​	如果`git pull`失败，按照提示将本地的dev分支与远程的orgin/dev分支连接，再`git pull`

合并冲突：在`git pull`成功后合并分支发生冲突

解决：如前文执行`git merge`合并时出现冲突时的解决方法一样，解决后再`git commit`和`git push`

### Rebase

在`git push`之前先执行`git rebase`

`git rebase`：把分叉的提交历史整理成直线的看上去更直观

## 标签管理

在版本库中打标签（tag），取版本的时候可以通过标签来取

commit 的指针跟tag的区别：

commit的指针是一串数字比较麻烦不好找

tag可以简单的设置为一个数字与commit绑定在一起，比较容易记，好找

### 创建标签

1. `git checkout`切换到相应分支上

2. `git tag <tagname>`：打上标签，标签是搭载最新提交的commit上的

3. `git tag <tagname> <commit id>`：打在历史提交的commit上

4. `git tag`：查看所有的标签

5. `git show <tagname>`：查看标签信息

6. `git tag -a <tagname> -m "xxx" <commit id>`创建带说明的标签

   `-a`：指定标签名

   `-m`：指定说明文字

### 操作标签

1. 删除本地标签：`git tag -d <tagname>`  ，创建的标签都只存储在本地，不会自动推送到远程，打错的标签可以在本地安全删除

2. 推送某个标签到远程：`git push origin <tagname>`

   一次性推送所有标签到远程：`git push origin --tags`

3. 删除远程标签：

   1. 从本地删除：`git tag -d <tagname>`
   2. 从远程删除：`git push origin :refs/tags/<tagname>`



















