const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  // Code here!

  for(let recipe of recipes){
  var ingredientA = ingredientCheck(bakeryA, recipe.ingredients);
  var ingridientB = ingredientCheck(bakeryB, recipe.ingredients);
  if(ingredientA != ingridientB){
      
  }
  
  }
  /*
  for(let i = 0;i < bakeryA.length;i++){
          if(bakeryA[i] === recipe.ingredients[0]){
              for(let j = 0;j < bakeryB.length;j++){
                  if(bakeryB[j] === recipe.ingredients[1]){
                      return recipe.name;
                  }
              }
          }else if(bakeryA[i] === recipe.ingredients[1]){
            for(let j = 0;j < bakeryB.length;j++){
                if(bakeryB[j] === recipe.ingredients[0]){
                    return recipe.name;
                }
            }
          }
              
            
      }
      //if(recipe)
  */
}
const ingredientCheck = function(bakery, ingredient){
   // console.log("ing:" + ingredient);
   for(let i = 0;i < bakery.length;i++){
        if(bakery[i] === ingredient[0]){
            return ingredient[0];
        }
        else if(bakery[i] === ingredient[1]){
            return ingredient[1];
        }
   }



}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
