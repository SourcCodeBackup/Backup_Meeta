let reviews :number[]=[1,2,3,4];

let total:number=0; 

for(let i=0;i<reviews.length;i++){
    console.log(reviews[i]); //2
    total=total + reviews[i]; 
    console.log(total);  //3 
}
console.log(total);

let average:number=total/reviews.length;
console.log(average);