let users = [];

let btnAdd = document.querySelector("button");

btnAdd.addEventListener("click", () => {
    let inputValue = document.querySelector("input").value;
    users.push(inputValue);
    document.querySelector("p").innerHTML = users;
});
