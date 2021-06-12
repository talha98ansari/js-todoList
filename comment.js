let names = document.getElementById("name");
const submit = document.getElementById("submit");
const list = document.getElementById("list");
// console.log(names.value)
// console.log(email.value)
// console.log(comment.value)

submit.addEventListener("click", (e) => {
  e.preventDefault();

  if (names.value === " ") {
    alert("Enter required values");
  } else {
    const listRow = document.createElement("tr");

    // name
    let listName = document.createElement("td");
    listName.innerHTML = names.value;
    listRow.appendChild(listName);
    currentName = listName.textContent;
    // console.log(listName)
    // update button
    const listUpdate = document.createElement("td");
    listUpdate.setAttribute("id", "update");
    listUpdate.innerHTML = "Update";
    listUpdate.style.cursor = "pointer";
    listRow.appendChild(listUpdate);
    listUpdate.addEventListener("click", () => {
      // selectedRowName = listName;
      // let nameUpdate = selectedRowName.innerHTML;
      names.value = currentName;

   
    });

    //delete button
    const listdelete = document.createElement("td");
    listdelete.setAttribute("id", "delete");
    listdelete.innerHTML = "Delete";
    listdelete.style.cursor = "pointer";
    listRow.appendChild(listdelete);

    listdelete.addEventListener("click", () => {
      listRow.style.display = "none";
    });

    //Append list in HTMl
    list.appendChild(listRow);
    resetFunction();
  }
});

const resetFunction = () => {
  const names = (document.getElementById("name").value = "");
};
