class Grid {
  constructor(cells) {
    if (!Array.isArray(cells) || cells?.length === 0 || cells[0]?.length === 0) throw new Error("Invalid grid");

    for (const row of cells) {
      if (!Array.isArray(row) || row.length !== cells[0].length) {
        throw new Error("Grid must have same number of columns for all rows");
      }
      for (const v of row) {
        if (v !== 0 && v !== 1) throw new Error("All values in Grid must be 0 or 1");
      }
    }

    this.cells = cells;
  }

  width() { return this.cells[0].length; }

  height() { return this.cells.length; }

  inBounds(pos) { 
    const isInBounds = pos.x >= 0 && pos.x < this.width() && 
                       pos.y >= 0 && pos.y < this.height()
    return isInBounds; 
  }

  isFree(pos) {
    return this.inBounds(pos) && this.cells[pos.y][pos.x] === 0;
  }
}

module.exports = { Grid };