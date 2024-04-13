function highlight(table) {
  let rows = table.rows;

  for (let i = 1; i < rows.length; i++) {
    let row = rows[i];
    let statusCell = row.cells[3];
    let genderCell = row.cells[2];
    let ageCell = row.cells[1];

    if (statusCell.getAttribute('data-available') === 'true') {
      row.classList.add('available');
    } else if (statusCell.getAttribute('data-available') === 'false') {
      row.classList.add('unavailable');
    } else {
      row.setAttribute('hidden', '');
    }

    if (genderCell.textContent === 'm') {
      row.classList.add('male');
    } else if (genderCell.textContent === 'f') {
      row.classList.add('female');
    }

    if (ageCell.textContent < 18) {
      row.style.textDecoration = 'line-through';
    }
  }
}
