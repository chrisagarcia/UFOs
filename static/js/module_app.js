// importing the data
const tableData = data;

// reference the html table wiht d3
var tbody = d3.select('tbody');

// function for filling table with data
function buildTable(data) {
    // clears the table before construction
    tbody.html("");

    // loops through objects in data to append rows
    data.forEach(dataRow => {
        let row = tbody.append("tr");

        // loops through object.object in data to append the cell and data
        Object.values(dataRow).forEach(val => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}

function handleClick() {
    // d3 selects the 1st datetime elem, .property('value') will extract the actual value of the cell
    let date = d3.select("#datetime").property("value");
    // initialize a filtered data var
    let filteredData = tableData;

    // if the date var is present
    if (date) {
        // filteredData var will have a filter applied
        // the filter uses .filter() with an anonymous function that takes each row as arg
        //      and asks if the datetime property is = to the date var
        filteredData = filteredData.filter(row => row[datetime] === date);
    }

    buildTable(filteredData);
}

d3.selectAll("#filter-btn").on("click", handleClick);

buildTable(tableData);