const express = require("express");
const app = express();


app.get("/api", (req, res) => {
  res.send("Our express api server is now sending this over to the browser");
});

// //users-----------------------------------------------
// const users = [
//     { firstName: "Reimu",  lastName: "Hakurei"    },
//     { firstName: "Marisa", lastName: "Kirisame"   },
//     { firstName: "Sanae",  lastName: "Kochiya"    },
//     { firstName: "Sakuya", lastName: "Izayoi"     },
//     { firstName: "Momiji", lastName: "Inubashiri" }
// ];

// // make sure these lines are above any app.get or app.post code blocks
// app.use( express.json() );
// app.use( express.urlencoded({ extended: true }) );

// app.post("/api/users", (req, res) => {

//     console.log(req.body);
//     users.push(req.body);
//     res.json( { status: "ok" } );
//     });
    

// app.get("/api/users/:id", (req, res) => {
    
//     console.log(req.params.id);
//     res.json( users[req.params.id] );
//     });

//     app.put("/api/users/:id", (req, res) => {
       
//         const id = req.params.id;
//         users[id] = req.body;
//         res.json( { status: "ok" } );
//         });
//     app.patch("/api/users/:id", (req, res) => {
       
//         const id = req.params.id;
//         users[id].firstName = req.body.firstName;
//         res.json( { status: "ok" } );
//         });

//         app.delete("/api/users/:id", (req, res) => {
//             const id = req.params.id;
//             users.splice(id, 1);
//             res.json( { status: "ok" } );
//         });
        
// app.get("/api/users", (req, res) => {
//     res.json( users );
// });
// //users-----------------------------------------------


app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


const { faker } = require('@faker-js/faker');

const createProduct = () => {
    const newFake = {
        name: faker.commerce.productName(),
        price: "$" + faker.commerce.price(),
        department: faker.commerce.department()
    };
    return newFake;
};

const createCompany = () => {
    const newFake = {
        id:faker.datatype.uuid(),
        name: faker.company.name(),
        address: {

        street:faker.address.street(),
        city:faker.address.city(),
        state:faker.address.state(),
        zipcode:faker.address.zipCode(),
        country:faker.address.country(),

        },
       
    };
    return newFake;
};

const createUser = () => {
    const newFake = {

        password:faker.internet.password(),
        email:faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.firstName(),
        firstName: faker.name.lastName(),
        id:faker.datatype.uuid(),
        
        
       
    };
    return newFake;
};

    
const newFakeProduct = createProduct();
console.log(newFakeProduct);

const newFakeCompany = createCompany();
console.log(newFakeCompany);

const newFakeUser = createUser();
console.log(newFakeUser);


app.get("/api/product", (req, res) => {
    res.json(newFakeProduct );
});

app.get("/api/companies/new", (req, res) => {
    res.json(newFakeCompany );
});


app.get("/api/user/company", (req, res) => {
    res.json({
        user: createUser(),
        company: createCompany()
    });
})

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);


