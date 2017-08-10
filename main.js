let clear = document.querySelector("#clear");
let calculate = document.querySelector("#calculate");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let divide = document.querySelector("#divide");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let multiply = document.querySelector("#multiply");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let subtract = document.querySelector("#subtract");
let zero = document.querySelector("#zero");
let modulo = document.querySelector("#modulo");
let squareRoot = document.querySelector("#squareRoot");
let decimal = document.querySelector("#decimal");
let equal = document.querySelector("#equal");
let plus = document.querySelector("#plus");
let input = "";
let inputOperators = "";
let numbers = [];
let operators =[];

function enterCalculation (num) {

   if (num === "sum") {
     for (let i=0; i < input.length; i++) {
      if (!isNaN(input[i])) {
      } else if  (input[i] === "+" || input[i] === "-" || input[i] === "*" || input[i] === "/" || input[i] === "%" || input[i] === "&#8730;") {
         (inputOperators=(input[i]));
         operators.push(inputOperators);
}
}
numbers = input.split(/[*+-/%]/);
}
else {
   input += num;
}
    if ( num === "c") {
      input="";
      numbers =[];
      operators = [];
      document.querySelector('#calculate p').innerHTML = "0";
    } else {
      document.querySelector('#calculate p').innerHTML = input;
    }

  } /* End of function */

function math(x,y) {
  for (let i=0; i<operators.length; i++) {
    if (operators[i] === "+"){
    let result = parseFloat(numbers[0]) + parseFloat(numbers[1]);
    numbers.splice(0,2);
    numbers.unshift(result);
    console.log(numbers);
    console.log(operators);
      input =result;
}

    if (operators[i] === "-") {
      result = parseFloat(numbers[0]) - parseFloat(numbers[1]);
      numbers.splice(0,2);
      console.log(numbers);
      numbers.unshift(result);
      console.log(numbers);
        input =result;
    }

    if (operators[i] === "*") {
     result = parseFloat(numbers[0]) * parseFloat(numbers[1]);
      numbers.splice(0,2);
      console.log(numbers);
      numbers.unshift(result);
      console.log(numbers);
        input =result;
    }

    if (operators[i] === "/") {
       result = parseFloat(numbers[0]) / parseFloat(numbers[1]);
      numbers.splice(0,2);
      console.log(numbers);
      numbers.unshift(result);
      console.log(numbers);
        input =result;
    }
    if (operators[i] === "%") {
      result = parseFloat(numbers[0]) % parseFloat(numbers[1]);
      numbers.splice(0,2);
      console.log(numbers);
      numbers.unshift(result);
      console.log(numbers);
        input =result;
    }
    if (operators[i] === "&#8730;") {
     result = Math.sqrt(parseFloat(numbers[0]));

      console.log(numbers);
      numbers.unshift(result);
      console.log(numbers);
        input =result;
    }
 else

    calculate.innerHTML = "<p>" + input + "<p>";

  }
  }
  clear.addEventListener('click', function () {
    enterCalculation("c")
  });
one.addEventListener('click', function () {
  enterCalculation(1)
});
two.addEventListener('click', function () {
  enterCalculation(2)
});
three.addEventListener('click', function () {
  enterCalculation(3)});
four.addEventListener('click', function () {
  enterCalculation(4)});
five.addEventListener('click', function () {
  enterCalculation(5)});
six.addEventListener('click', function () {
  enterCalculation(6)});
seven.addEventListener('click', function () {
  enterCalculation(7)});
eight.addEventListener('click', function () {
  enterCalculation(8)});
nine.addEventListener('click', function () {
enterCalculation(9)});
zero.addEventListener('click', function () {
enterCalculation(0)});
modulo.addEventListener('click', function () {
    enterCalculation("%")});
    squareRoot.addEventListener('click', function () {
        enterCalculation("&#8730;")});
divide.addEventListener('click', function () {
    enterCalculation("/")});
multiply.addEventListener('click', function () {
    enterCalculation("*")});
plus.addEventListener('click', function () {
    enterCalculation("+")
  });

subtract.addEventListener('click', function () {
    enterCalculation("-")});
decimal.addEventListener('click', function () {
    enterCalculation(".")});
equal.addEventListener('click', function () {
  enterCalculation("sum"); math(numbers[0], numbers[1]);

});
