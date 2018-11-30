# tree-md-cli

使用命令将制定目录下文件和文件夹生成指定树形markdown文档

### Getting Started

```
  npm i tree-md-cli -g

  tree-md
```

### 使用

```
  tree-md init
  // 或
  tree-md-init
```

在当前目录生成以下mardown文件（会默认忽略git以及node_modules目录）

example：

``` js 
|-- treeDir
    |-- .DS_Store
    |-- .gitignore
    |-- README.md
    |-- index.js
    |-- package-lock.json
    |-- package.json
    |-- .vscode
    |   |-- launch.json
    |-- bin
    |   |-- index.js
    |   |-- init.js
    |-- config
    |   |-- index.js
    |-- lib
        |-- .DS_Store
        |-- index.js

```
