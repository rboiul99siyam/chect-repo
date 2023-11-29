const DespoitDo = ()=>
{
    let InputDeposit = document.getElementById("InputDeposit").value;
    
    
    let depositAmount = document.getElementById("deposit-amount").innerText;


    let Total= document.getElementById("total-amount").innerText;

    let sum = 0;
    sum = parseFloat(depositAmount) + parseFloat(InputDeposit);
    let TotalAmount = parseFloat(Total) + sum;


    
    
    document.getElementById("deposit-amount").innerText = sum+".00";
    document.getElementById("InputDeposit").value = null;
    document.getElementById("total-amount").innerText = TotalAmount+".00";

}

const WithdrowDo = ()=>
{
    let InputWithdraw = document.getElementById("InputWithdrow").value;
    
    
    let withdrawAmount = document.getElementById("Withdrow-amount").innerText;
    let Total= document.getElementById("total-amount").innerText;
    let sum = 0;
    sum = parseFloat(withdrawAmount) + parseFloat(InputWithdraw);
    let TotalAmount = parseFloat(Total) - sum;

    
    
    
    document.getElementById("Withdrow-amount").innerText = sum+".00";
    document.getElementById("total-amount").innerText = TotalAmount+".00";
    document.getElementById("InputWithdrow").value = '';

    if (TotalAmount == 0)
    {
        document.getElementById("total-amount").innerText = "Your Carrent Balacne : 0"
    }
   
}
