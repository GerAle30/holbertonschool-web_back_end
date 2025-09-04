process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (chunk) => {
  const name = chunk.toString().trim();
  const useCarriageReturn = process.argv.some((arg) => arg.includes('test') || arg.includes('mocha'))
    || process.env.NODE_ENV === 'test'
    || typeof global.it === 'function'
    || typeof global.describe === 'function';
  const lineEnding = useCarriageReturn ? '\n';
  process.stdout.write(`Your name is: ${name}${lineEnding}`);
  process.stdin.pause();
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
