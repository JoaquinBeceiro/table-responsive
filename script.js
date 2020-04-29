console.log("=====================");
console.log("mockData", mockData);
console.log("=====================");

const table = document.querySelector("table");

// CREATE HEADERS
const createHeaders = () => {
  const tableHead = table.querySelector("thead");
  const tr = document.createElement("tr");
  Object.keys(mockData[0]).forEach((element) => {
    const th = document.createElement("th");
    th.innerHTML = element;
    tr.appendChild(th);
  });
  tableHead.appendChild(tr);
};

// CREATE BODY
const createBody = () => {
  const tableBody = table.querySelector("tbody");
  mockData.forEach((row) => {
    const tr = document.createElement("tr");
    Object.values(row).forEach((element) => {
      const td = document.createElement("td");
      td.innerHTML = element;
      tr.appendChild(td);
    });
    tableBody.appendChild(tr);
  });
};

createHeaders();
createBody();
