const list = document.querySelector("#bookList ul");
// delete books

list.addEventListener("click", function (e) {
    if (e.target.className == "delete") {
        const li = e.target.parentElement;
        list.removeChild(li)
    }
});

//add book
const addform = document.forms["add-book"];
addform.addEventListener("submit", function (e) {
    e.preventDefault();

    const value = addform.querySelector("#add-book input[type='text']").value;

    // creat elements
    const li = document.createElement("li");
    const addbook = document.createElement("span");
    const del = document.createElement("span");

    //add content
    del.textContent = "delete";
    addbook.textContent = value;

    //add classes
    addbook.classList.add("book");
    del.classList.add("delete")

    //append to doc
    li.appendChild(addbook);
    li.appendChild(del)
    list.appendChild(li);
});



