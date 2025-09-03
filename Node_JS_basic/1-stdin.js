process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    const name = chunk.toString().trim();
    // aquí cambiamos el salto de línea
    process.stdout.write(`Your name is: ${name}\r`);
    process.stdin.end();
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});

