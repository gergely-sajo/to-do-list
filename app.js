let myForm = document.getElementById("myForm");
let myField = document.getElementById("myField");
let myList = document.getElementById("myList")

myForm.addEventListener("submit", (e) => {
    e.preventDefault()
    createItem(myField.value)
    myField.value = ""
    myField.focus()
});

function createItem(x) {
let myHTML = `<li>${x} <button onclick="deleteItem(this)">delete</button></li>`
myList.insertAdjacentHTML("beforeend", myHTML)
};

function deleteItem(elementToDelete) {
    elementToDelete.parentElement.remove()
}