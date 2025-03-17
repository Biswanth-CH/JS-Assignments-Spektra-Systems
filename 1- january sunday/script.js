document
  .getElementById("yearForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const startYear = parseInt(document.getElementById("startYear").value);
    const endYear = parseInt(document.getElementById("endYear").value);

    if (isNaN(startYear) || isNaN(endYear) || startYear > endYear) {
      alert("Please enter valid start and end years.");
      return;
    }

    const resultTable = document.getElementById("resultTable");
    resultTable.innerHTML = "";
    document.getElementById("totalCount").textContent = "";

    let count = 0;
    for (let year = startYear; year <= endYear; year++) {
      if (isJanuaryFirstSunday(year)) {
        count++;
        const row = document.createElement("tr");
        row.innerHTML = `
        <th scope="row">${count}</th>
        <td>${year}</td>
      `;
        resultTable.appendChild(row);
      }
    }

    document.getElementById(
      "totalCount"
    ).textContent = `Total years where January 1st is a Sunday: ${count}`;
  });

function isJanuaryFirstSunday(year) {
  return new Date(year, 0, 1).getDay() === 0;
}
