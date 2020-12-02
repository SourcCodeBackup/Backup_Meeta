class Customer{
    private _firstName:String;
    private _lastName:String;
 
    constructor(first:String ,last:String){
 
     this._firstName=first;
     this._lastName=last;
 
    }

    public get firstName():String{
       return this._firstName;

    }

    public set firstName(value:String){
        this._firstName=value;

    }

    public get lastName():String{
        return this._lastName;
 
     }
 
     public set lastName(value:String){
         this._lastName=value;
 
     }
 
 

     
 }
 
 
 
 let myCustomer=new Customer("priti","rout");
 
 
 
 console.log(myCustomer.firstName);
 console.log(myCustomer.lastName);
 
 