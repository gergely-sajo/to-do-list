let myForm = document.getElementById("myForm");
let myField = document.getElementById("myField");
let myList = document.getElementById("myList")
let listText = document.getElementById("listText")

myForm.addEventListener("submit", (e) => {
    e.preventDefault()
    createItem(myField.value)
});

function createItem(x) {
    if (x == "") {
        alert("Write something in the field.")
    } else {
        let myHTML = `
        <li class="d-flex">
            <p id="listText">${x}</p>
            <div>
                <button class="btn btn--s btn--in-cart mr-s" onclick="itemInCart(this)">In Cart</button>
                <button class="btn btn--s btn--edit mr-s" onclick="editItem(this)">Edit</button>
                <button class="btn btn--s btn--delete" onclick="deleteItem(this)">Delete</button>
            </div>
        </li>
        `

        myList.insertAdjacentHTML("beforeend", myHTML)
    }
    
    myField.value = ""
    myField.focus()
}

function itemInCart(i) {
    i.parentElement.parentElement.querySelector("p").classList.toggle("in-cart")
    i.parentElement.classList.toggle("in-cart-buttons")
} 

function deleteItem(elementToDelete) {
    elementToDelete.parentElement.parentElement.remove()
}

function clearAllItems() {
    myList.innerHTML = "";
}