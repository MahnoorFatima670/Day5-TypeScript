//problem no:1
function manipulateArrays(array1:number[],array2:number[]):number[]|number|string
{
    let counter=0;
    let mergearray:number[]=[];
    let product=1;
    let sum=0;
    let sum1=0;
    let middleEle;
    console.log(`First array:${array1}`);
    console.log(`second array:${array2}`);
if(array1.length==array2.length)
{
for(let i=0;i<array1.length;i++)
{
    if(array1[i]==array2[i])
    {
counter++;
    }
}
if(counter==array1.length&&counter==array2.length)
    {
    mergearray.push(...array1,...array2);
    console.log(`merge two arrays:${mergearray}`);
    for(let j=0;j<mergearray.length;j++)
    {
        product=product*mergearray[j];
    }
return `Product of merged array is:${product}`;
   }
else
{  
for(let a=0;a<array1.length;a++)
{
sum=array1[a]+array2[a];
mergearray.push(sum);
}
console.log(`Merge Array by adding corresponding elements of two arrays:${mergearray}`);
for(let b=0;b<mergearray.length;b++)
{
    sum1=sum1+mergearray[b];
}
console.log(`sum of merged array is:${sum1}`);
 }
}
else
{
    mergearray.push(...array1,...array2);
    console.log(`Merge array of two arrays array1 and array2 is:${mergearray}`);
    middleEle=mergearray[Math.floor(mergearray.length/2)]
    console.log(`middle element of merged array is:${middleEle}`);
}
}
console.log(manipulateArrays([1,9],[1,9,3]));



//problem no:2
function extractFirstLetter(myArray:string[]):string[]
{
let firstLetterarray:string[]=[];
for(let z=0;z<myArray.length;z++)
{
firstLetterarray.push(myArray[z][0]);
}
return firstLetterarray;
}
console.log(extractFirstLetter(['hadia','eman','Tuba']));
