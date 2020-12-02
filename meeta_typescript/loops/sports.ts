let sports:String[]=["golf","cricket","tennis","swimming"];

for(let i=0;i<sports.length;i++){
    console.log(sports[i]);
}


for(let sportsall of sports){
   // console.log(sportsall);

   if(sportsall=="cricket"){
       console.log("its my favourite game");
   }
}