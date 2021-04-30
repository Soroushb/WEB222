/**************************************************************************** 
 * 
 * * Assignment 1 
 * * I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 * * No part of this assignment has been copied manually or electronically from any other source
 * * (including web sites) or distributed to other students. 
 * * Name: __Soroush Bahrami__ Student ID: __152499182__ Date: 2020-06-03
 * 
 * ****************************************************************************/

console.log("/***************************** Task1 *************************/");
var sum = 0;
var average = 0.00;
var lastVar;
var argument = "";
var largest = 0;
function playNumbers(){
    
 if (arguments.length == 0) {
      console.log("There are no inputs.");}

      else if(arguments.length != 0)

        {for(var i = 0; i < arguments.length; i++){
            
            if(isNaN(arguments[i])){
                console.log(arguments[i] + " is not a number.");
            }}
            
            for(var i = 0; i < arguments.length; i++){
                if(isNaN(arguments[i])){
                    break
                }
            else if(!isNaN(arguments[i]) && arguments.length != 0)
            {
                
                for(var i = 0; i < arguments.length; i++){
                while(arguments[i] > largest){
                    
                    largest = arguments[i];
                }
                sum += arguments[i];
            average = sum / arguments.length;}
            for(var i = 0; i < arguments.length-1; i++){
            argument += arguments[i] + ", ";}
            var flag = 1;
            } 
            lastVar = arguments[arguments.length - 1]
        }
        if(flag == 1){
        console.log("the largest number of "+ "("+ argument + lastVar + ")"+ " is "+  largest);
        console.log("the average of "+ "("+ argument + lastVar + ")"  + " is "+  average);
        largest = 0;
        average = 0;
        sum = 0;
        argument = "";
       
        }
    } }

playNumbers();
playNumbers("abc", 3, "hello");
playNumbers(9,3,6);
playNumbers(3,5,1,3,5);
playNumbers("Good day!",3,4,32,"hi", "we"); 
console.log("/***************************** Task2 *************************/");
var convertCF = function(val,cf){
    var cel;
    var far;
    if(isNaN(val)){
        console.log("I need a number.");
    }else if(!(cf == "C" || cf == "F")){
        console.log("I am confused :(");
    }else if(cf == "C"){
        far = (val * 9.5) + 32;
        console.log(val + "C is equivalent to "+ far + "F");
    }else if(cf == "F"){
        cel = (val - 32) * 5/9;
        console.log(val + "F is equivalent to "+ cel + "C");
    }
}
convertCF("avc", "F");
convertCF("32", "M");
convertCF(32, 'F');
convertCF(0, "C");
convertCF(122, "F");