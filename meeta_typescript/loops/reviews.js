var reviews = [1, 2, 3, 4];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]); //2
    total = total + reviews[i];
    console.log(total); //3 
}
console.log(total);
var average = total / reviews.length;
console.log(average);
