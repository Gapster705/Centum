

//get the values from the page
//Starts or controller function
function getValues(){
    //get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    // input validation
    // parse into integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if(Number.isInteger(startValue) && Number.isInteger(endValue)){
        //call generateNumbers
        let numbers = generateNumbers(startValue, endValue);
  
        //call displayNumbers
        displayNumbers(numbers);
    } else{
        alert("You must enter integers.");
    }
}

//generate numbers from the start value to the end value
//logic function(s)
function generateNumbers(startValue, endValue){
    let numbers = [];

    for (let i = startValue; i <= endValue; i++) {
       numbers.push(i);         
    }
    return numbers;
}

//display the numbers and mark the even numbers in bold
//display or view functions
function displayNumbers(numbers){
    let templateRows = "";
    let className = "";

    for (let index = 0; index < numbers.length; index++) {
        let number = numbers[index];

        if(number % 2 == 0){
            className = "even";
        } else {
            className = "odd";
        }
        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }
    document.getElementById("results").innerHTML = templateRows;
}