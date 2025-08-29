export default function guardrail(mathFunction) {
    const queue = [];
    try {
        const value = mathFunction();
        queue.push(value);
    }catch (err) {
        queue.push('Error: ${err.message}');
    } finally {
        queue.push('Guardrail was processed');
    }
    return queue;
}
