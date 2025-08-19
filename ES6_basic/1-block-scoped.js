export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // These are block-scoped and will not overwrite the outer bindings
    const task = true;
    const task2 = false;
    void task; // avoid linter complaints about unused variables
    void task2;
  }

  return [task, task2];
}

