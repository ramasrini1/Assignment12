function Recipe (title, servings, ingredients) {
    let _title      = title;
    let _servings   = servings;
    let _ingredients = [];
    
    for (let index=0; index<ingredients.length; index++){
        _ingredients[index] = ingredients[index];
    }

    let getRecipe = function(){
        console.log(title);
        console.log(`Serves:${servings}`);
        console.log("Ingredients:");
        for (let i=0; i<_ingredients.length; i++){
            console.log(`.${ingredients[i]}`);
        }
    }

    this.displayRecipe = function(){
        getRecipe();
    }
}

let ingredients = ["3 Avocados", "1 lime", "1 Teaspoon Salt", 
                        "1/2 cup Onion", "3 Tablespoons Cilantro", 
                        "2 Diced Tomatoes", "1 Teaspoon Garlic", 
                        "1 pinch Ground Pepper"];

const guacamole = new Recipe("Guacamole", "2", ingredients);
guacamole.displayRecipe();
