document.addEventListener("DOMContentLoaded", loadFiles);

function loadFiles() {
    const files = JSON.parse(localStorage.getItem("files")) || [];
    const fileList = document.getElementById("fileList");
    fileList.innerHTML = "";

    files.forEach(file => {
        const li = document.createElement("li");
        li.textContent = file;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => deleteFile(file);
        li.appendChild(deleteButton);
        fileList.appendChild(li);
    });
}

function addFile() {
    const fileName = document.getElementById("fileName").value;
    if (fileName) {
        const files = JSON.parse(localStorage.getItem("files")) || [];
        files.push(fileName);
        localStorage.setItem("files", JSON.stringify(files));
        document.getElementById("fileName").value = "";
        loadFiles();
    }
}

function deleteFile(fileName) {
    let files = JSON.parse(localStorage.getItem("files")) || [];
    files = files.filter(file => file !== fileName);
    localStorage.setItem("files", JSON.stringify(files));
    loadFiles();
}
