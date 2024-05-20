let x=[1,2,3,4,5,6,7,8,9];
//console.log(x);
//filter even and double it
// x.forEach((element)=>element%2==0?x.map(element=>element*2):console.log("odd"))
// z=x.map(element=>element*2);
// console.log(z)

// const nw= (x.filter(element=>element%2==0)).map(element=>element*2);
// console.log(nw);

// //sum using for each
// sum=0;
// x.forEach(element => sum+=element);
// console.log(sum);

//console.log(x.filter(y=>y%2!=0));

//every func : checks whether all elements pass a certain condition(true /false)
//console.log(x.every(y=> y>10));

//reduce : results in a single output after a certain function implementation
console.log(x.reduce(function(ac,cv){
    return (cv > ac)?cv:ac;}));
    

