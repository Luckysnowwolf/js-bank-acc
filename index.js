

function ATM() {
    const message = parsefloat(
        let = message = prompt("Enter an option:")
            ("1. Check Balance")
            ("2. Deposit")
            ("3. Withdraw")
            ("4. Exit")
);
    switch (message) {
        case 1:
            checkBalance();
            break;
        case 2:
            makeDeposit();
            break;
        case 3:
            withDrawl();
            break;
        case 4:
            accountName()
            break;
        case 5:
            exit();
            break;
    }
checkBalance()
{
    console.log("here is your current balance kr" + balance)
}
 makeDeposit()
{
    prompt("enter amount to deposit: kr")
    console.log("kr" + amount + "has been deposited to your account")
    checkBalance()
}
withDrawl()
{
    prompt("enter amount to withdraw: kr")
    if (amount > balance) {
        console.log("insufficient money");
    } else {
        balance -= amount;
        console.log("kr" + amount + "mas been withdrawn from your account")
    }
    checkBalance();
}
accountName()
{
    console.log("here is your current account name" + Name)
}

exit()
{
    console.log("thank you, have a good day")

}

let = bankacc = {
    Name: "star",
    country: "Sweden",
    language: "swedish",
    balance: 50000,
    curency: "kronor",
    active: true,
    amount: (prompt)
}
}