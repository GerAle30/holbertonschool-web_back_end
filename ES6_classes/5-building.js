export default class Building {
  constructor(sqft) {
    this._sqft = sqft;

    // Check if this is a subclass and if it implements evacuationWarningMessage
    if (this.constructor !== Building && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }
}
