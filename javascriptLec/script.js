
function printNumbers(){
    let i = 1;
    while(i <= 100){
        document.write("<pI am an odd number></p>", i);
        i= i+2;
    }
}

function multiplyNumbers(input1, input2){
    console.log("First input", input1)
    console.log("Second input", input2)
 var output = input1 * input2;
 console.log("Output", output)
}

function returnOutput(input){
    switch(input){
    case 1:
        console.log("Output", input)       
    break;
    case "Days":
        console.log("Days Output", input)
    break;
    default:
        console.log("This is a default")
    break;
}
}

function checkForBiggerNumbers(input1, input2){
//     console.log("First input", input1)
//     console.log("Second input", input2)
//  var output = input1 * input2;
//  console.log("Output", output)
if(input1>input2) {
     var output = input1 * input2;
 console.log("Output", output)
    console.log("Output", input1)
}
}

function showNewOtherText(){
    // document.open();
    /* document.write('<h1>I am a new text document</h1>')
     document.close();*/
    // alert('I am a page that is refreshed');
    // var newValue = "<p> I am a paragraph </p>";
    // console.log("I am the second function called (New value var)= ", funcVariable);
}

