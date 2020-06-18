var expense = 0, total;
function budgetcalc() {
    var budgetamt = document.getElementById("budget").value;
    var listitem = document.getElementById("item").value;
    var listamt = parseInt(document.getElementById("expense").value);
    const listcontainer = document.getElementById("taskitem");

    if (budgetamt.length === 0 && listitem.length === 0) {
        alert("Kindly, provide appropriate information")
    }
    else {
        const list = listcontainer.appendChild(document.createElement("div"));
        const list_item = list.appendChild(document.createElement("p"));
        const list_amt = list.appendChild(document.createElement("p"));
        const delete_list = list.appendChild(document.createElement("i"));
        delete_list.className = "fa fa-trash";
        list.className = "list_contain";
        list_item.className = "list_item";
        list_amt.className = "list_amt";
        list_item.innerHTML = listitem;
        list_item.style.textTransform = "upperCase";
        list_amt.innerHTML = listamt;
        function finaldata() {
            expense = expense + listamt;
            total = budgetamt - expense;
            document.getElementById("balance").value = total;
            document.getElementById("expensefinal").value = expense;
        }
        finaldata();

        listamt = " ";
        listitem= " ";
        delete_list.addEventListener("click", delete_item);
        function delete_item(e) {
           var i =e.target.previousSibling.innerHTML;
            alert(i);
            expense=expense-i;
            document.getElementById("expensefinal").value = expense;
            total = budgetamt - expense;
            document.getElementById("balance").value = total;
            e.target.parentElement.remove();
        }
    }
}
