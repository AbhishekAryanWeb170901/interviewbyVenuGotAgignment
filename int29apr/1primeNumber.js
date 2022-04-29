
function checkPrimeorNot(number)
{
  var count = 0;
  for(var i=1; i<=number; i++)
  {
    if(number % i == 0)
    {
      count++;
    }
  } 
  if(count==2)
  {
    return true;
  }
  else
  {
    return false;
  }   
}

var limit = 50;
for(var i=2; i<=limit; i++)
{
  var x = checkPrimeorNot(i);
  if(x == true)
  {
    console.log(i,"is prime");
  }  
  else[
      console.log(i, "is not Prime")
  ]
}