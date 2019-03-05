module.exports = [
  {
    type: "Question",
    name: "dirName",
    message: "请输入指定目录",
    default: "./"
  },
  {
    type: "Question",
    name: "fileName",
    message: "请输入生成文件名",
    default: "tree.md"
  },
  {
    type: "Question",
    name: "ignoreDir",
    message: "输入当前目录下忽略检索的文件夹，使用&&连接",
    default: "node_modules&&.git"
  }
];
