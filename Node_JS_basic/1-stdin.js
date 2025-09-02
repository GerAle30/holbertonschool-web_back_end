process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
    const name = data.toktring().trim();
    process.stdout.write(`Your name is: ${name}\n`);
    process.stdin.end();
});

process.on('exit', () => {
    console.log('This important software is now closing');
});
