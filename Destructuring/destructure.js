// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars
// const [ ,otherRandomCar ] = cars

// console.log(randomCar) //Tesla
// console.log(otherRandomCar)//Mercedes


// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;

// // console.log(name);//not defined
// console.log(otherName);//Elon


// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;  
// console.log(password);//12345
// console.log(hashedPassword);//not defined




// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers;//2
// const [,,,second] = numbers;//5
// const [,,,,,,,,third] = numbers;//2
// console.log(second)
// console.log(first == second);//false
// console.log(first == third);//True




// const lastTest = {
//     key: 'value',
//     secondKey: [1, 5, 1, 8, 3, 3]
// }
// const { key } = lastTest;  
// const { secondKey } = lastTest;
// const [ ,willThisWork] = secondKey;

// console.log(key);//value
// console.log(secondKey);//[1,5,1,8,3,3]
// console.log(secondKey[0]);//1
// console.log(willThisWork);//5

// const person = { 
//     firstName: 'Bob', 
//     lastName: 'Marley', 
//     email: 'bob@marley.com', 
//     password: 'sekureP@ssw0rd9', 
//     username: 'barley', 
//     createdAt: 1543945177623
// };
// const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

// const { email, password } = person;
// const [firstAnimal, secondAnimal, thirdAnimal] = animals;

// console.log( email)
// console.log(firstAnimal)


// 

// const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];
// // const [firstAnimal, secondAnimal] = animals;

// const [firstAnimal, secondAnimal, ...otherAnimals] = animals;
// console.log(otherAnimals)


const person = {
  firstName: 'Bob',
  lastName: 'Marley',
  email: 'bob@marley.com',
  password: 'sekureP@ssw0rd9',
  username: 'barley',
  addresses: [
    {
      address: '1600 Pennsylvania Avenue',
      city: 'Washington, D.C.',
      zipcode: '20500',
    },
    {
      address: '221B Baker St.',
      city: 'London',
      zipcode: 'WC2N 5DU',
    }
  ],
  createdAt: 1543945177623
};

// var {firstName}=person

// console.log(firstName)
// firstName="hala"
// console.log(firstName)


const {firstName,...attributes } = person;
console.log(attributes)

// const person = {
//   firstName: 'Bob',
//   lastName: 'Marley',
//   email: 'bob@marley.com',
//   password: 'sekureP@ssw0rd9',
//   username: 'barley',
//   addresses: [
//     {
//       address: '1600 Pennsylvania Avenue',
//       city: 'Washington, D.C.',
//       zipcode: '20500',
//     },
//     {
//       address: '221B Baker St.',
//       city: 'London',
//       zipcode: 'WC2N 5DU',
//     }
//   ],
//   createdAt: 1543945177623
// };

// const { addresses: [ , { city }] } = person;
// console.log(city);


