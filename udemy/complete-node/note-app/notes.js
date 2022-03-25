import fs from 'fs';
import chalk from 'chalk';

const loadNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('notes.json').toString());
  } catch (e) {
    return [];
  }
};

const saveNotes = (arr) => {
  fs.writeFileSync('notes.json', JSON.stringify(arr));
};

export const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicate = notes.find((note) => note.title === title);
  if (duplicate) {
    console.log(chalk.red(`Note titled ${title} already exists!`));
  } else {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green(`Note titled ${title} added!`));
  }
};

export const removeNote = (title) => {
  const noteToRemove = loadNotes().filter((note) => note.title === title);
  if (!noteToRemove.length) {
    console.log(chalk.red('Note title does not exist!'));
  } else {
    const lessNotes = loadNotes().filter((note) => note.title !== title);
    saveNotes(lessNotes);
    console.log(chalk.green(`Note titled ${title} removed successfully!`));
  }
};

export const listNotes = () => {
  if (!loadNotes().length) {
    console.log(chalk.red('No notes to list.'));
  } else {
    console.log(chalk.blueBright.inverse('Your Notes:'));
    loadNotes().forEach((note) => {
      console.log(chalk.blueBright(note.title));
    });
  }
};

export const readNote = (title) => {
  const wantedNote = loadNotes().find((note) => note.title === title);
  if (!wantedNote) {
    console.log(chalk.red(`No note titled ${title} exists.`));
  } else {
    console.log(chalk.greenBright.inverse(title));
    console.log(chalk.greenBright(wantedNote.body));
  }
};

export const appendNote = (title, additionalText) => {
  const notes = loadNotes();
  const wantedNote = notes.find((note) => note.title === title);
  if (!wantedNote) {
    console.log(chalk.red(`No note titled ${title} exists. To create a new note, use the 'add' command.`));
  } else {
    const appendedNotes = notes.map((note) =>
      note.title === title ? { title: note.title, body: `${note.body} ${additionalText}` } : note
    );
    saveNotes(appendedNotes);
    console.log(chalk.green(`Note titled ${title} has been appended.`));
  }
};
