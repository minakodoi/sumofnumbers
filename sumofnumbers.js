/**
 * Created by Minako on 2016/09/18.
 */

let numbers = [1, 2, 3, 4, 5];
//console.log(numbers);

function sumFor (num)
{
  let total = 0;
  for (let i = 0; i < num.length; i ++)
  {
    total += num[i];
  }
  return total;
}
//console.log(sumFor(numbers));

function sumWhile(num)
{
  let total = 0;
  let i = 0;
  while(i < num.length)
  {
    total += num[i];
    i++;
  }
  return total;
}
//console.log(sumWhile(numbers));

function sumRecursion (num)
{
  if(num.length === 0)
  {
    return 0;
  }
  else
  {
    return num[0] + sumRecursion(num.slice(1, num.length));
  }
}
//console.log(sumRecursion(numbers));

function sumTheSimpleWay (num)
{
  let total = 0;
  return _.reduce(num, function(memo, num) { return memo + num}, 0);
}
console.log(sumTheSimpleWay(numbers));
