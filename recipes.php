<?

$name = $_GET["recipeName"];

$list = $_GET["recipeList"];

if ($name == "Apple Butter Snickerdoodles") {
  
  if ($list == "ingredients") {   
    include "ingredients.html";
    
  } elseif ($list == "equipment") {
    include "equipment.html";
    
  } elseif ($list == "directions") {
    include "directions.html";
    
  } else {
    echo "1";
  }
  
  
} elseif ($name == "Best Big, Fat, Chewy Chocolate Chip Cookie") {
  
  if ($list == "ingredients") {
    include "marleyingredients.html";
    
  } elseif ($list == "equipment") {
    include "marleyequipment.html";
    
  } elseif ($list == "directions") {
    include "marleydirections.html";

} 
  
  
} elseif ($name = "Mrs. Sigg's Snickerdoodles") {
  
  if ($list == "ingredients") {
    include "theoingredients.html";
    
  } elseif ($list == "equipment") {
    include "theoequipment.html";
    
  } elseif ($list == "directions") {
    include "theodirections.html";
    
  }
  
  
  
} else {
  
  echo "0";
}