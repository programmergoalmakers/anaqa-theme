const { spawn } = require('child_process');
const path = require('path');

const cwd = path.resolve(__dirname);
const sallajs = path.join(process.env.APPDATA, 'npm', 'node_modules', '@salla.sa', 'cli', 'dist', 'salla.js');
const gitBin = 'C:\\Program Files\\Git\\bin';
const env = Object.assign({}, process.env, { PATH: process.env.PATH + ';' + gitBin });

const args = process.argv.slice(2);
const command = args[0] || 'theme';
const subcommand = args[1] || 'create';

console.error('Running: salla ' + command + ' ' + subcommand + ' from ' + cwd);

const child = spawn('node', [sallajs, command, subcommand], {
  cwd,
  stdio: ['pipe', 'inherit', 'inherit'],
  env
});

let step = 0;
const steps = [
  { delay: 3000, input: '\n' },      // Enter to select Store Theme
  { delay: 6000, input: 'n\n' },     // n for VS Code
  { delay: 20000, input: '\n' },     // maybe another Enter for store selection
];

function sendNext() {
  if (step < steps.length) {
    setTimeout(() => {
      if (child.stdin.writable) {
        child.stdin.write(steps[step].input);
      }
      step++;
      sendNext();
    }, steps[step].delay);
  } else {
    setTimeout(() => {
      if (child.stdin.writable) child.stdin.end();
    }, 10000);
  }
}

sendNext();

child.on('close', (code) => {
  console.error('Exit code:', code);
  process.exit(code);
});
