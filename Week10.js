// Project Instructions:
// Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:
// A Bootstrap styled table representing your choice of data.
// A Bootstrap styled form that allows a user to add a new row to the table when clicking on submit.

/**
 * I need:
 * My Button: Add info to table on click
 *      How do I do this? From the <input> fields & their .value()
 * Need: kittyName, kittyAge and funFact
 * Need to find a way to get the # value
 * Need to find a way to get the value from the forms and add it to the table, when submit is clicked (append info to the table)
 * 
 * Need to use:
 * getElementById() to get the values
 */

const myButton = document.getElementById('submitForm');

myButton.addEventListener('click', (event) => {
    event.preventDefault();
    // I need variables to hold the values of the form
    let kittyName = document.getElementById('kittyName').value;
    let kittyAge = document.getElementById('kittyAge').value;
    let funFact = document.getElementById('funFact').value;

    //Create a tr node - to append to my form

    let newTableRow = document.createElement('tr');

    let kittyNameNode = document.createElement('td');
    kittyNameNode.innerHTML = kittyName;
    newTableRow.append(kittyNameNode);

    let kittyAgeNode = document.createElement('td');
    kittyAgeNode.innerHTML = kittyAge;
    newTableRow.append(kittyAgeNode);

    let funFactNode = document.createElement('td');
    funFactNode.innerHTML = funFact;
    newTableRow.append(funFactNode);

    document.getElementById('tBody').appendChild(newTableRow);
})