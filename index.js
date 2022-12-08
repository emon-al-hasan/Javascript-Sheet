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
let x;
let y;
let z;
document.getElementById('roll-btn').onclick=function()
{
    x=Math.floor(Math.random()*6)+1;    //want to generate 1 to 6 have to add 1 because computer genrate 0 to 5;
    y=Math.floor(Math.random()*6)+1;
    z=Math.floor(Math.random()*6)+1;

    document.getElementById('label1').innerHTML= x;
    
    document.getElementById('label2').innerHTML= y;
    
    document.getElementById('label3').innerHTML=z;
  
}