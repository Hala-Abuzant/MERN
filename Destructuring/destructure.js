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
// const [,,,second] = numbers;//4
// const [,,,,,,,,third] = numbers;//2

// console.log(first == second);//false
// console.log(first == third);//True

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;  
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;

console.log(key);//value
console.log(secondKey);//[1,5,1,8,3,3]
console.log(secondKey[0]);//1
console.log(willThisWork);//5

