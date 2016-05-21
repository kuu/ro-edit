import fs from 'fs';
import yargs from 'yargs';
import Kontainer from '.';

const argv = yargs.argv;
const HELP = `
Usage:
    ro  [options] {command} {filePath}

Example:
    # List all the tracks contained in a file
    ro ls file.mp4

    # Remove a track from a file
    cat file.mp4 | ro drop 0
     => Removes the first track

    # Adjust av-sync
    cat file.mp4 | ro shift 0 -10
     => Shifts the first track 10 seconds backward

    # File composition
    ro merge video.webm audio-en.webm audio-fr.webm

    # Trimming
    cat file.webm | ro slice 10 50
     => Extract the middle of the file (10-49 seconds)
      i.e. cuts off the first 10 seconds and the last 10 seconds
      (supposing the original duration was 60 seconds.)

Options:
  -h, --help    Print help
  -v, --version Print version
`;

let pkg;

try {
  pkg = require('./package.json');
} catch (e) {
  // Being executed locally
  pkg = require('../package.json');
}

const VERSION = `v${pkg.version}`;
const command = argv._[0];
const filePath = argv._[1];

if (argv.h || argv.help) {
  console.info(HELP);
} else if (argv.v || argv.version) {
  console.info(VERSION);
} else {

  let input;

  if (filePath) {
    input = fs.createReadStream(filePath);
  } else {
    input = process.stdin;
  }
  // TODO
}
