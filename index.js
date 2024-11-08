const bankacc = {
    Name: "star",
    country: "Sweden",
    language: "swedish",
    balance: 50000,
    curency: "kronor",
    creditcard: 5000,
    active: true,

    checkBalance: function()
{
    console.log(`here is your current balance: ${this.balance}`)
},
 makeDeposit: function()
{
    let amount = prompt("enter amount to deposit: kr")
    if ( amount > `${this.creditcard}`)
    {
        console.log("error, insufficient money on card")
    } else (`${this.creditcard}` <= amount)
    {
    console.log(amount + " kr has been deposited to your account")
    }
    
},
withDrawl: function()
{
    let amount = prompt("enter amount to withdraw: kr")
    if (amount > `${this.balance}`) 
    {
        console.log("insufficient money")
    } else (`${this.balance}` <= amount) 
    {
        console.log("kr" + amount + "mas been withdrawn from your account")
    }
   
},
accountName: function()
{
    console.log("here is your current account name" + `${this.Name}`)
},

exit()
{
    console.log("thank you, have a good day")
},
};



let running = true
function ATM() {
    while(running) {
    const message = parseFloat(
        prompt(
            "Enter an option:)1. Check Balance) 2. Deposit) 3. Withdraw) 4. account Name) 5. Exit"
        )
);
    switch (message) {
        
        case 1:
            bankacc.checkBalance();
            break;
        case 2:
            bankacc.makeDeposit();
            break;
        case 3:
            bankacc.withDrawl();
            break;
        case 4:
            bankacc.accountName()
            break;
        case 5:
            bankacc.exit();
            running = false
            break;
    }
}

};
ATM();