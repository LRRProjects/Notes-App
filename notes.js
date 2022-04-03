const fs = require("fs");
const chalk = require("chalk");

const addNotes = (title, body) => {
  const notes = loadNotes();

  const duplicateNote = notes.find((note) => note[0].title === title);
  if (!duplicateNote) {
    notes.push([
      {
        title: title,
        body: body,
      },
    ]);
    saveNote(notes);
    console.log(chalk.bold.green("New note added..."));
  } else {
    console.log(chalk.bold.red("Note title already taken..."));
  }
};

const removeNotes = (title) => {
  const notes = loadNotes();

  const newData = notes.filter((note) => note[0].title !== title);

  if (notes.length > newData.length) {
    console.log(chalk.bold.green("List item was removed..."));
    saveNote(newData);
  } else {
    console.log(chalk.bold.red("No note was found..."));
  }
};

const listNotes = () => {
  const noteList = loadNotes();
  console.log(chalk.bold.blue("Your notes..."));
  noteList.forEach((values) =>
    console.log(chalk.bold.blue(`Title: ${values[0].title}`))
  );
};

const readNotes = (title) => {
  const noteData = loadNotes();
  const titleExists = noteData.find((noteData) => noteData[0].title === title);

  if (titleExists === undefined) {
    console.log(
      chalk.bold.red("Note with the title provided does not exist...")
    );
  } else {
    console.log(
      chalk.bold.blue(
        `Title: ${titleExists[0].title} - Body: ${titleExists[0].body}`
      )
    );
  }
};

const saveNote = function (notes) {
  const jsonData = JSON.stringify(notes);
  console.log(chalk.bold.green("Saving note..."));
  fs.writeFileSync("notes.json", jsonData);
};

const loadNotes = function () {
  try {
    const loadedData = fs.readFileSync("notes.json");
    const bufferData = loadedData.toString();
    console.log(chalk.bold.green("Loading note file..."));
    return JSON.parse(bufferData);
  } catch (e) {
    console.log(chalk.bold.green("Creating new file..."));
    return [];
  }
};

module.exports = {
  addNotes: addNotes,
  removeNotes: removeNotes,
  listNotes: listNotes,
  readNotes: readNotes,
};
