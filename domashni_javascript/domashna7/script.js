let table = document.createElement('table');
table.style.borderCollapse = 'collapse';

let tableHeader = document.createElement('thead');
let headerRow = document.createElement('tr');

let nameHeader = document.createElement('th');
nameHeader.textContent = 'Name';
nameHeader.style.border = '1px solid black';
headerRow.appendChild(nameHeader);

let heightHeader = document.createElement('th');
heightHeader.textContent = 'Height';
heightHeader.style.border = '1px solid black';
headerRow.appendChild(heightHeader);

let countryHeader = document.createElement('th');
countryHeader.textContent = 'Country';
countryHeader.style.border = '1px solid black';
headerRow.appendChild(countryHeader);

tableHeader.appendChild(headerRow);
table.appendChild(tableHeader);

//Table Body here
let tableBody = document.createElement('tbody');

let mountains = [
  { name: 'Kilimanjaro', height: 5895, country: 'Tanzania' },
  { name: 'Everest', height: 8848, country: 'Nepal' },
  { name: 'Mount Fuji', height: 3776, country: 'Japan' },
  { name: 'Mont Blanc', height: 4808, country: 'Italy/France' },
  { name: 'Vaalserberg', height: 323, country: 'Netherlands' },
  { name: 'Denali', height: 6168, country: 'United States' },
  { name: 'Popocatepetl', height: 5465, country: 'Mexico' },
];

mountains.forEach(function (mountain) {
  let row = document.createElement('tr');

  let nameCell = document.createElement('td');
  nameCell.textContent = mountain.name;
  nameCell.style.border = '1px solid black';
  row.appendChild(nameCell);

  let heightCell = document.createElement('td');
  heightCell.textContent = mountain.height;
  heightCell.style.border = '1px solid black';
  row.appendChild(heightCell);

  let countryCell = document.createElement('td');
  countryCell.textContent = mountain.country;
  countryCell.style.border = '1px solid black';
  row.appendChild(countryCell);

  tableBody.appendChild(row);
});

table.appendChild(tableBody);


document.body.appendChild(table);
