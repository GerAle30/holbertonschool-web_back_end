export default function(createInt8TypedArray(length, position, value) {
    if (position < 0 || position >= length) {
        throw new Error('Position outside range');
    }

    const buffer = new ArrayBuffer = (length);
    const view = new DataView(buffer);
    view.seInt8(position, value);

    return view;
}
