const CODES = {
  A: 65,
  Z: 90,
};

const cell = `<div class="cell" contenteditable="true"></div>`;

function toColumn(col) {
  return `
    <div class="column">${col}</div>
  `;
}

function createRow(content, info = '') {
  return `
      <div class="row">
              <div class="row-info">${info}</div>
              <div class="row-data">${content}</div>
      </div>
  `;
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index);
}

export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1;
  const rows = [];

  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(toColumn)
      .join('');

  rows.push(createRow(cols));
  for (let i = 0; i < rowsCount; i++) {
    const cols = new Array(colsCount)
        .fill(cell)
        .join('');

    rows.push(createRow(cols, i+1));
  }

  return rows.join('');
}