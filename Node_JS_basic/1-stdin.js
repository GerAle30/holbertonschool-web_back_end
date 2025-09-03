process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (chunk) => {
  const name = chunk.toString().trim();
  process.stdout.write(`Your name is: ${name}\r\n`);
  process.stdin.end();
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});

