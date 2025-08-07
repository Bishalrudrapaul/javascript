let array = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;
for(let i =0; i<10;i++)
{
    if(array[i]%2==0)
    {
        sum+=array[i];
    }
}
console.log(sum , "iis the sum of all even numbers in the array");
