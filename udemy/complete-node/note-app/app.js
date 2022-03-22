import { addNote, removeNote, listNotes, readNote } from './notes.js';
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
  }).argv;
