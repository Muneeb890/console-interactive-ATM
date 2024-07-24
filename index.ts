#! /usr/bin/env/node
import inquirer from "inquirer";

let myBalance = 0;
let isContinue = true;
const pinCode = 2002;

const message = "Welcome To ATM";
console.log(message);

let pin_ans = await inquirer.prompt({
    type: "number",
    name: "ans",
    message: "Please Enter Pin Code: "
})

if(pin_ans.ans === 2002){
    do {
        let ans = await inquirer.prompt({
            type: "list",
            name: "list",
            message: "Select any option",
            choices: ["Deposit", "Withdraw", "Fast Cash", "Balance check"]
        })
    
        if(ans.list === "Deposit"){
            let ans = await inquirer.prompt({
                type: "number",
                name: "Deposit_Amount",
                message: "Please Enter Your Amount: "
            })
    
            if(ans.Deposit_Amount > 0){
                myBalance = myBalance + ans.Deposit_Amount
                console.log(myBalance);  
            }else{
                console.log("Not Enough Money");
                
            }
        }
    
        else if(ans.list === "Fast Cash"){
            let ans = await inquirer.prompt({
                type: "list",
                name: "fast_cash",
                message: "Please Select One",
                choices: ["500", "1000", "5000"]
            })
            if(ans.fast_cash <= myBalance){
                if(ans.fast_cash === "500"){
                    myBalance -= ans.fast_cash
                    console.log(myBalance);
                }else if(ans.fast_cash === "1000"){
                    myBalance -= ans.fast_cash
                    console.log(myBalance);
                }else if(ans.fast_cash === "5000"){
                    myBalance -= ans.fast_cash
                    console.log(myBalance);
                }
            }
        }
    
        else if(ans.list === "Balance Check"){
            console.log(`Your Balance Is: ${myBalance}`);
        }
        
        let while_ans = await inquirer.prompt({
            type: "confirm",
            name: "condition",
            message: "Do You Want To Continue: "
        })
        if(while_ans.condition === false){
            isContinue = false
        }
        
    } while (isContinue);
}
else{
    console.log("Invalid Pin Code");
    
}

