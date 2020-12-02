var Employee = /** @class */ (function () {
    function Employee(first, last) {
        this.firstName = first;
        this.lastName = last;
    }
    return Employee;
}());
var myEmployee = new Customer("priti", "rout");
console.log(myEmployee.firstName);
console.log(myEmployee.lastName);
