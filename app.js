let myForm = document.getElementById("myForm");
let myField = document.getElementById("myField");
let myList = document.getElementById("myList")

myForm.addEventListener("submit", (e) => {
    e.preventDefault()
    createItem(myField.value)
});

function createItem(x) {
    if (x == "") {
        alert("Write something in the field.")
    } else {
        let myHTML = `
        <div class="item">
            <li>${x}</li>
                <button class="delete-button" onclick="deleteItem(this)">delete</button>
        </div>`

        myList.insertAdjacentHTML("beforeend", myHTML)
    }
    
    myField.value = ""
    myField.focus()
}

function deleteItem(elementToDelete) {
    elementToDelete.parentElement.remove()
}