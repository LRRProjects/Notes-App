const fs = require("fs");
const noteUtilities = require("./notes.js");
const yargs = require("yargs");
const { readNotes } = require("./notes.js");

//Add,Remove,Read,List
//Creates add command
yargs.command({
  command: "add",
  describe: "Adds a new note",
  builder: {
    title: {
      describe: "Note title",
      demand: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demand: true,
      type: "string",
    },
  },
  handler(argv) {
    noteUtilities.addNotes(argv.title, argv.body);
  },
});
//Creates remove command
yargs.command({
  command: "remove",
  description: "Removes a note",
  builder: {
    title: {
      describe: "Note title",
      demamd: true,
      type: "string",
    },
  },
  handler(argv) {
    noteUtilities.removeNotes(argv.title);
  },
});
//Creates a read command
yargs.command({
  command: "read",
  description: "Reads a note",
  builder: {
    title: {
      describe: "Note title",
      demand: true,
      type: "string",
    },
  },
  handler: (argv) => {
    noteUtilities.readNotes(argv.title);
  },
});
//Creates a list command
yargs.command({
  command: "list",
  description: "Lists notes",
  handler: () => {
    noteUtilities.listNotes();
  },
});

yargs.parse();
