function showaddress (street, city, zipcode){
    this.street = street;
    this.city = city;
    this.zipcode =  zipcode;
    }
    
    let address = new showaddress ('a', 'b', 'c');
    console.log(address);