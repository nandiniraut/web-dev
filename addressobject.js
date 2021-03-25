let address = {
street: 'north star',
city: 'new york',
zipcode: '101010',
};

function showaddress(address) {
    for (let key in address) 
    console.log(key, address[key]);
}

showaddress(address);

//factory function method for the same code as above

function showaddress (street, city, zipcode){
    return {
        street,
        city,
        zipcode,
    }
}

const address = showaddress('a', 'b', 'c');
console.log(address);

// constructor function for the same code as above

function showaddress (street, city, zipcode){
this.street = street;
this.city = city;
this.zipcode =  zipcode;
}

let address = new showaddress ('a', 'b', 'c');
console.log(address);
