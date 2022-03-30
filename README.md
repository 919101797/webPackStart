# webPackStart
- css loader
- sass loader
- less loader
- stylus loader




# 待引入
- https://fontawesome.dashgame.com/ 图标
- antd
- rootnet-ui|edit|core

# webpackDoc ![]https://webpack.docschina.org/guides/asset-modules/#resource-assets





    ```txt

    .gitignore中已经标明忽略的文件目录下的文件，git push的时候还会出现在push的目录中，或者用git status查看状态，想要忽略的文件还是显示被追踪状态。
原因是因为在git忽略目录中，新建的文件在git中会有缓存，如果某些文件已经被纳入了版本管理中，就算是在.gitignore中已经声明了忽略路径也是不起作用的，
这时候我们就应该先把本地缓存删除，然后再进行git的提交，这样就不会出现忽略的文件了。
  
解决方法: git清除本地缓存（改变成未track状态），然后再提交:
[root@kevin ~]# git rm -r --cached .
[root@kevin ~]# git add .
[root@kevin ~]# git commit -m 'update .gitignore'
[root@kevin ~]# git push -u origin master
    ```