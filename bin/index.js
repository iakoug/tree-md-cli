#!/usr/bin/env node

const program = require("commander")

program
  .version(require("../package").version)
  .usage("<command> [options]")
  .command("init", "generate tree markdown from a specified directory")
  // .option("-I, --ignore <value>", "Ignore the specified file in the current directory and use the && connection")
  .parse(process.argv)
