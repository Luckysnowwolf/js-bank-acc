

function ATM() {
    const message = parsefloat(
        prompt(
            ("1. Check Balance")
            ("2. Deposit")
            ("3. Withdraw")
            ("4. Exit")
            ("Enter an option: "))     
    );

    switch (message) {
        case 1:
        default:
            ("1. Check Balance")
            ("2. Deposit")
            ("3. Withdraw")
            ("4. Exit")
            ("Enter an option: ")
            break;

        case 2:
            checkBalance();
            break;
        case 3:
            makeDeposit();
            break;
        case 4:
            withDrawl();
            break;
        case 5:
            accountName()
            break;
        case 6:
            exit();
            break;
    }
}
function ATM() {
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
}
const bankacc = {
    Name: "star",
    country: "Sweden",
    language: "swedish",
    balance: 50000,
    curency: "kronor",
    active: true,
    amount: (prompt)
}