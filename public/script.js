let expenses = []
let totalAmount = 0;
const categorySelect = document.getElementById("category_select");
const amountInput = document.getElementById("amount_input");
const InfoInput = document.getElementById("info");
const dateInput = document.getElementById("date_input");
const expenseTableBody = document.getElementById("expense-table-body");
const totalAmountCell = document.getElementById("total-amount");
const addBtn = document.getElementById("add_btn");

addBtn.addEventListener('click',function(event){
    event.preventDefault();
    const category = categorySelect.value;
    const info = InfoInput.value;
    const amount = Number(amountInput.value);
    const date = dateInput.value;

    if(category ===''){
        alert("please select a category");
        return;
    }
     if(isNaN(amount) || amount<=0){
        alert("please enter a valid amount");
        return;
    }
     if(info ===''){
        alert("please enter a valid amount info");
        return;
    }
     if(date ===''){
        alert("please select a date");
        return;
    }
   const expense = { category, amount, info, date };
    expenses.push(expense);
    // Update total

    if(category === "Income"){
        totalAmount+=amount;
    }
    if(category === 'Expense'){
        totalAmount-=amount;
    }
    totalAmountCell.textContent = totalAmount;

     // Create a new row
    const newRow = expenseTableBody.insertRow();

   const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const infoCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();

    categoryCell.textContent = category;
    amountCell.textContent = amount;
    infoCell.textContent = info;
    dateCell.textContent = date;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');

    deleteBtn.addEventListener('click',function(){
         expenses = expenses.filter(e => e !== expense);
        if(category === "Income"){
        totalAmount-=amount;
        }
        if(category === 'Expense'){
        totalAmount+=amount;
        }

        totalAmountCell.textContent = totalAmount;
        newRow.remove();
        });
         deleteCell.appendChild(deleteBtn);

    //  Clear form fields after add
    categorySelect.value = '';
    amountInput.value = '';
    infoInput.value = '';
    dateInput.value = '';
});

for(const expense of expenses){
   if(category === "Income"){
        totalAmount+=amount;
    }
    if(category === 'Expense'){
        totalAmount-=amount;
    }
    totalAmountCell.textContent = totalAmount;

     // Create a new row
    const newRow = expenseTableBody.insertRow();

   const categoryCell = newRow.insertCell();
    const amountCell = newRow.insertCell();
    const infoCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();

    categoryCell.textContent = category;
    amountCell.textContent = amount;
    infoCell.textContent = info;
    dateCell.textContent = date;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');

    deleteBtn.addEventListener('click',function(){
         expenses = expenses.filter(e => e !== expense);
        if(category === "Income"){
        totalAmount-=amount;
        }
        if(category === 'Expense'){
        totalAmount+=amount;
        }

        totalAmountCell.textContent = totalAmount;
        newRow.remove();
        });
         deleteCell.appendChild(deleteBtn);

    //  Clear form fields after add
    categorySelect.value = '';
    amountInput.value = '';
    infoInput.value = '';
    dateInput.value = '';

}
