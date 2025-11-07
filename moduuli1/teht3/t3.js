let num1 = Number(prompt("Input a number: "));
let num2 = Number(prompt("Input a number: "));
let num3 = Number(prompt("Input a number: "));

let sum = num1 + num2 + num3;
let mul= num1 * num2 * num3;
let div = sum/3;
        document.querySelector('#numbers').innerHTML =
            'The sum of your given numbers is ' + sum + '.<br>'+
            'The product of your given numbers is ' + mul + '.<br>'+
            'The average of your given numbers is ' + div + '.';



