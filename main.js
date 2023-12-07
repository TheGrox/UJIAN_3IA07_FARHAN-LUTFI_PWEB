let selectedRow = null;

function tambahData() {
    const npm = document.getElementById("npm").value;
    const nama = document.getElementById("nama").value;
    const nilai = document.getElementById("nilai").value;
    const sks = document.getElementById("sks").value;
    const status = document.getElementById("status").checked ? "Aktif" : "Tidak Aktif";

    const table = document.getElementById("mahasiswaTable").getElementsByTagName("tbody")[0];
    const newRow = table.insertRow(table.length);

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);

    cell1.innerHTML = npm; 
    cell2.innerHTML = nama; 
    cell3.innerHTML = nilai; 
    cell4.innerHTML = sks; 
    cell5.innerHTML = status;
    cell6.innerHTML = '<input type="button" value="Pilih" onclick="pilihData(this)">'; 
}

function editData() {
    if (selectedRow) {
        selectedRow.cells[0].innerHTML = document.getElementById("npm").value;
        selectedRow.cells[1].innerHTML = document.getElementById("nama").value;
        selectedRow.cells[2].innerHTML = document.getElementById("nilai").value;
        selectedRow.cells[3].innerHTML = document.getElementById("sks").value;
        selectedRow.cells[4].innerHTML = document.getElementById("status").checked ? "Aktif" : "Tidak Aktif";
    }
}

function hapusData() {
    if (selectedRow) {
        document.getElementById("mahasiswaTable").deleteRow(selectedRow.rowIndex);
        selectedRow = null; 
    }
}

function pilihData(row) {
    selectedRow = row.parentNode.parentNode; 
    document.getElementById("npm").value = selectedRow.cells[0].innerHTML;
    document.getElementById("nama").value = selectedRow.cells[1].innerHTML;
    document.getElementById("nilai").value = selectedRow.cells[2].innerHTML;
    document.getElementById("sks").value = selectedRow.cells[3].innerHTML;
    document.getElementById("status").checked = selectedRow.cells[4].innerHTML === "Aktif"; 
}

function saveTable() {
    const table = document.getElementById('mahasiswaTable').innerHTML;
    localStorage.setItem('savedTable', table);
    alert('Tabel berhasil disimpan ke local storage!');
}

function openTable() {
    const savedTable = localStorage.getItem('savedTable');
    if (savedTable) {
        document.getElementById('mahasiswaTable').innerHTML = savedTable;
        alert('Tabel berhasil dimuat dari local storage!');
    } else {
        alert('Tidak ada tabel yang disimpan di local storage.');
    }
}
