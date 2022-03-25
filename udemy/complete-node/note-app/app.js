import { addNote, removeNote, listNotes, readNote, appendNote } from './notes.js';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

// Create commands
yargs(hideBin(process.argv))
  .command(
    'add',
    'add a new note',
    {
      title: {
        describe: 'title of the note',
        demandOption: true,
        type: 'string',
      },
      body: {
        describe: 'the content of the note',
        demandOption: true,
        type: 'string',
      },
    },
    (argv) => {
      addNote(argv.title, argv.body);
    }
  )
  .command(
    'remove',
    'removes a note',
    {
      title: {
        describe: 'title of the note',
        demandOption: true,
        type: 'string',
      },
    },
    (argv) => {
      removeNote(argv.title);
    }
  )
  .command(
    'read',
    'reads the note',
    {
      title: {
        describe: 'title of the note',
        demandOption: true,
        type: 'string',
      },
    },
    (argv) => {
      readNote(argv.title);
    }
  )
  .command('list', 'lists all notes', {}, () => {
    listNotes();
  })
  .command(
    'append',
    'appends additional text to a note',
    {
      title: {
        describe: 'title of the note',
        demandOption: true,
        type: 'string',
      },
      additionalText: {
        describe: 'the new text to append to note',
        demandOption: true,
        type: 'string',
      },
    },
    (argv) => {
      appendNote(argv.title, argv.additionalText);
    }
  ).argv;
