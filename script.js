// Basic search function (contributors can improve later!)
function searchRecipes() {
  let input = document.getElementById("searchBar").value.toLowerCase();
  let list = document.getElementById("recipeList").getElementsByTagName("li");

  for (let i = 0; i < list.length; i++) {
    let item = list[i].innerText.toLowerCase();
    if (item.includes(input)) {
      list[i].style.display = "";
    } else {
      list[i].style.display = "none";
    }
  }
}

// TODO: Contributors can add more features here
// - Filter by country
// - Sort recipes alphabetically
// - Highlight search terms
