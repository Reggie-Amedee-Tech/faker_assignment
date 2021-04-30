const express = require("express");
const app = express();
const port = 8000;
const faker = require("faker");

class users {
    constructor() {
        this.id = faker.datatype.number()
        this.firstName = faker.name.firstName()
        this.lastName = faker.name.lastName()
        this.phoneNumber = faker.phone.phoneNumber()
        this.email = faker.internet.email()
        this.password = faker.internet.password()
    }
}

class company {
    constructor() {
        this.id = faker.datatype.number()
        this.companyName = faker.company.companyName()
        this.address = {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
            
        }
    }
}

app.get('/api/users/new', (req, res) => {
    let user1 = new users;
    res.json(user1);
    
});

app.get('/api/company/new', (req,res) => {
    let company1 = new company;
    res.json(company1)
});

app.get('/api/users/company', (req,res) => {
    let user1 = new users;
    let company1 = new company;
    let userandcompanyArray = [user1, company1]
    res.json(userandcompanyArray)
})

app.listen( port, () => console.log(`listening on port: ${port}`))


