let count=0;

document.getElementById('increase').onclick=function()
{
    count+=1;
    document.getElementById('label1').innerText=count;
}
document.getElementById('decrease').onclick=function()
{
    count-=1;
    document.getElementById('label1').innerText=count;
    if(count<1)
    {
        document.getElementById('label1').innerHTML="sorry"
    }
}
document.getElementById('reset').onclick=function()
{
  count=0;
    document.getElementById('label1').innerText=count;
}