// let count=0;

// document.getElementById('increase').onclick=function()
// {
//     count+=1;
//     document.getElementById('label1').innerText=count;
// }
// document.getElementById('decrease').onclick=function()
// {
//     count-=1;
//     document.getElementById('label1').innerText=count;
//     if(count<1)
//     {
//         document.getElementById('label1').innerHTML="sorry"
//     }
// }
// document.getElementById('reset').onclick=function()
// {
//   count=0;
//     document.getElementById('label1').innerText=count;
// }
// Increase,Decrease,Reset work

//Dies Js

// let x;
// let y;
// let z;
// document.getElementById('roll-btn').onclick=function()
// {
//     x=Math.floor(Math.random()*6)+1;    //want to generate 1 to 6 have to add 1 because computer genrate 0 to 5;
//     y=Math.floor(Math.random()*6)+1;
//     z=Math.floor(Math.random()*6)+1;

//     document.getElementById('label1').innerHTML= x;
    
//     document.getElementById('label2').innerHTML= y;
    
//     document.getElementById('label3').innerHTML=z;
  
// }

// String Operation

// There are 3 methods for extracting a part of a string:

// slice(start, end)
// substring(start, end)
// substr(start, length)

let userName="Bro Code";
let Name="Snoop Dog";
let phonenumber="123-234-443"
let text = "Apple, Banana, Kiwi";
// console.log(userName.length);
// console.log(userName.charAt(3));
// console.log(userName.indexOf('C'));
// console.log(userName.lastIndexOf('d'));
//  console.log(userName.trim());//whitespace remove
// console.log(userName.toUpperCase())
// console.log(userName.toLowerCase())  
// console.log(text.slice(8,13));//anana
// console.log(text.slice(7));//Banana, Kiwi
// console.log(text.slice(-12));//Banana, Kiwi
// console.log(text.slice(-12,-6));//Banana
// console.log(Name.slice(0,Name.indexOf(' ')));//Snoop
// console.log(Name.slice(Name.indexOf(" ")+1));//Dog
// console.log(text.substring(7,13))//Banana
// console.log(phonenumber.replaceAll('-','/'));


// checked property
// if(mybutton.checked)

// let username;
// console.log(username);//if we donot assaign a value it return undefiended


//  for( let count=1;count<=10;count++ )
//  {
//     console.log(count);
//  }


// Nested Loop;
// let symbol=window.prompt('Enter the symbol:');
// let rows=window.prompt('Enter no of Rows');
// let coloums=window.prompt('Enter no of coloums');

// for(let i=1;i<=rows;i++)
// {
//    for(k=1;k<=coloums;k++){
//       document.getElementById('Rectangle').innerHTML+=symbol;
//    }
//    document.getElementById('Rectangle').innerHTML+="<br>"
// }


// Function Program


// function happyBirthday(a,b)
// {
//    console.log("Happy Brthday to you",a);
//    console.log("Your age is:",b);
//    console.log("Happy Brthday to you");
//    console.log("Happy Brthday to you");
//    console.log("Happy Brthday to you");
// }
//  happyBirthday("Emon hasan",22);//This are arguments

//  function startProgram()
//  {
//    let myName='Emon';
// let age=21;
// happyBirthday(myName,age);
//  }
//  startProgram()
// let x="Emon";
// console.log(`welcome emon ${x}`);
// function area(a,b)
// {
//    return a*b;
// }
// console.log(area(7,8));

// var vs let
// var=variables are limited with function scope;
// let=variables are limited with block scope;
// for(let i=1;i<=3;i++)
// {

// }
// console.log(i);

// toLocalString()=to return a string with a language sensetive representation of this number;
// let myNumber=109;
// let result=myNumber.toLocaleString('en-US');
// let result1=myNumber.toLocaleString('en-US',{style:"currency",currency:"USD"});
// let result2=myNumber.toLocaleString('hi-IN',{style:"currency",currency:"INR"});
// let result3=myNumber.toLocaleString(undefined,{style:'unit',unit:'celsius'})
// console.log(result3);

// Temperature converter

document.getElementById('submitButton').onclick=function()
{
   let temp;
   if(document.getElementById('cButton').checked){
      temp=document.getElementById('textBox').value;
      temp=Number(temp);
      temp=toCelcius(temp).toFixed(2);
      document.getElementById('tempLabel').innerHTML=temp;

    
   }
   else if(document.getElementById('fButton').checked)
   {
      temp=document.getElementById('textBox').value;
      temp=Number(temp);
      temp=toFarenheit(temp);
      document.getElementById('tempLabel').innerHTML=temp;
   }
   else{
      document.getElementById('tempLabel').innerHTML='Select a Button';
   }
}

function toCelcius(temp)
{
return (temp-32)*(5/9);
}
function toFarenheit(temp)
{
return temp*9/5+32;
}