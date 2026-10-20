// TASK-1

function checkEvenOdd(number){
    if(number%2===0){
        return "Even Number";
    }
    else{
        return "Odd Number"
    }
}
console.log(checkEvenOdd(11062006));

// TASK-2

function findLargest(a, b){
    if(a>b){
        return a;
    }
    else{
        return b;
    }
}
console.log( findLargest(45,60));


// TASK-3

function checkVote(age){
    if(age>=18){
        return "Eligible to vote"
    }
    else{
        return "Not eligible to vote"
    }
}

console.log(checkVote(18));

// TASK-4

function getTotal(numbers){
    let total=0;
    for(let sum=0;sum<numbers.length;sum++){
        total=total+numbers[sum];
    }
    return total;
}
console.log(getTotal([10, 20, 30, 40, 50]));

// TASK-5

function countEven(Even){
    let num=0
    for(let i=0;i<Even.length;i++){
        if(Even[i]%2==0){
            num++;
        }
    }
    return num;
}
console.log(countEven([10, 15, 20, 25, 30, 35, 40]));







