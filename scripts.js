// function to asynchronously fetch file contents from path/URL "fromFile" 
// and insert them in the DOM object found with "whereTo" -- note this
// uses document.querySelector, so use CSS notation on "whereTo"

function loadFileInto(recipeName, listName, whereTo) {

	// 1. creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();
  
  fromFile = "recipes.php?recipeName=" + recipeName + "&recipeList=" + listName;
  
  console.log("From URL: " + fromFile);

	// 2. defines the GET/POST method, the source, and the async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// 3. provides code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {

		if ((this.readyState == 4) && (this.status == 200)) { // if .readyState is 4, the process is done; and if .status is 200, there were no HTTP errors

			document.querySelector(whereTo).innerHTML = this.responseText; // insert received output directly into the chosen DOM object

		} else if ((this.readyState == 4) && (this.status != 200)) { // if .readyState is 4, the process is done; and if .status is NOT 200, output the error into the console

			console.log("Error: " + this.responseText);

		}

	} // end ajax.onreadystatechange function

	// 4. let's go -- initiate request and process the responses
	ajax.send();

}

// new Recipe object
function Recipe(recipeName, contributorName, imageURL) {
  
  this.recipe = recipeName;
  this.contributor = contributorName;
  this.img = imageURL;

  
  this.displayRecipe = function() {
    
    document.querySelector("#cookieHeader").innerHTML = this.recipe;
    document.querySelector("#contributor").innerHTML = this.contributor;
    document.querySelector("#cookieHeader").style.backgroundImage = "url(" + this.img + ")";
    
    loadFileInto(this.recipe, "ingredients", "#ingredients ul");
    loadFileInto(this.recipe, "equipment", "#equipment ul");
    loadFileInto(this.recipe, "directions", "#directions ol");
  
  } 
  
}

AppleButterSnickerdoodles = new Recipe("Apple Butter Snickerdoodles",
                                       "Ethan Breymeyer",
                                       "https://images.unsplash.com/photo-1608512114587-dd7bda2c5ac1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80");

BestBigFatChewyChocolateCipCookie = new Recipe("Best Big, Fat, Chewy Chocolate Chip Cookie",
                                               "Marley Schneider",
                                               "https://images.unsplash.com/photo-1582385760710-4300982782c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");

MrsSiggsSnickerdoodles = new Recipe("Mrs. Sigg's Snickerdoodles",
                                    "Theo McBurney",
                                    "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1751192.jpg&w=596&h=596&c=sc&poi=face&q=85");


window.onload = function() {
  
  document.querySelector("#cookieHeader").classList.add("name");
  

document.querySelector("#ingredients").onclick = function() {
  document.querySelector("#ingredients ul").classList.toggle("showMe");
}

document.querySelector("#equipment").onclick = function() {
  document.querySelector("#equipment ul").classList.toggle("showMe");
}

document.querySelector("#directions").onclick = function() {
  document.querySelector("#directions ol").classList.toggle("showMe");
}

document.querySelector("#cookieHeader").onclick = function() {
 this.classList.toggle("name");
}


document.querySelector("#r1").onclick = function() {
  AppleButterSnickerdoodles.displayRecipe();
}
  
  document.querySelector("#r2").onclick = function() {
    BestBigFatChewyChocolateCipCookie.displayRecipe();
  }
  
  document.querySelector("#r3").onclick = function() {
    MrsSiggsSnickerdoodles.displayRecipe();
  }
  
}
// end of window.onload

