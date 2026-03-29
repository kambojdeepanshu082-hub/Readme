function addExpense() {
    let date = document.getElementById("date").value;
    let category = document.getElementById("category").value;
    let amount = document.getElementById("amount").value;

    if (date === "" || category === "" || amount === "") {
        alert("Fill all fields");
        return;
    }

    let table = document.getElementById("table");

    let row = table.insertRow();

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);

    cell1.innerHTML = date;
    cell2.innerHTML = category;
    cell3.innerHTML = amount;

    document.getElementById("date").value = "";
    document.getElementById("category").value = "";
    document.getElementById("amount").value = "";
}