// const groceryList = Object.freeze([
//   { "item": "carrots",           "haveIngredient": false },
//   { "item": "onions",            "haveIngredient": true  },
//   { "item": "celery",            "haveIngredient": false },
//   { "item": "cremini mushrooms", "haveIngredient": false },
//   { "item": "butter",            "haveIngredient": true  }
// ]);

// const trial=groceryList.slice(2)
// console.log(trial)

// const needThyme = [ ...groceryList, { "item": "thyme", "haveIngredient": false } ];
// // console.log(needThyme);


// const concatThyme = needThyme.concat( [ { "item": "oil", "haveIngredient": false } ] );
// // console.log(concatThyme);

// const gotTheThyme = [ ...concatThyme.slice(0, 5), { ...concatThyme[5], "haveIngredient": true } ,{...concatThyme[6]}];
// // console.log(gotTheThyme)


// const deleteIngredient=[...gotTheThyme.slice(0,3),...gotTheThyme.slice(4)]
// console.log(deleteIngredient)

// const items = ["carrots", "onions", "celery", "mushrooms", "butter", "thyme"];
// // items.sort(); 
// // console.log(items)

// const sortedGroceries = [...items].sort( (a, b) => a.item > b.item ? 1 : -1);
// console.log(sortedGroceries)


const values = [1, 2, 3, 4, 5];
const cubes = values.map( val => val**3 );
console.log(cubes)
console.log(values)