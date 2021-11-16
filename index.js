//Javascript program to count number occurrences of an element//
arr=[1,2,3,4,1,2,3,4,5,6,7,8,9,7,6,1]
let n= arr.length;
let x =2;
 // get input from user
function numberOccurance(arr, n, x)
{
let res = 0;
for(i=0;i<n;i++)
{
if (x == arr[i])
res++; 

}
return res;

}
document.write(numberOccurance(arr , n , x ));