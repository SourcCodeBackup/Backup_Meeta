var Customer = /** @class */ (function () {
    function Customer(first, last) {
        this._firstName = first;
        this._lastName = last;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: true,
        configurable: true
    });
    return Customer;
}());
var myCustomer = new Customer("priti", "rout");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
