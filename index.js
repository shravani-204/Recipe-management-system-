document.getElementById("button").addEventListener('click', searchMeals);
    
    function searchMeals() {
        let inputValue = document.getElementById('inputName').value;
        let details = document.getElementById("details");
        details.innerHTML = "";
        
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
        
       
       
            .then(response => response.json())
            .then(data => {
                const items = document.getElementById("items");
                items.innerHTML = "";
                if (data.meals == null) {
                    document.getElementById("msg").style.display = "block";
                } else {
                    document.getElementById("msg").style.display = "none";
                    data.meals.forEach(meal => {
                        let itemDiv = document.createElement("div");
                        itemDiv.className = "m-2 singleItem";
                        itemDiv.setAttribute('onclick', `details('${meal.idMeal}')`);
                        let itemInfo = `
                        <div class="card" style="width: 12rem;">
                            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                            <div class="card-body text-center">
                                <h5 class="card-text">${meal.strMeal}</h5>
                            </div>
                        </div>
                        `;
                        itemDiv.innerHTML = itemInfo
                        items.appendChild(itemDiv);
                    });
                }
            });
    }

    function filterCategory(category) {
        let inputValue = category;
        let details = document.getElementById("details");
        details.innerHTML = "";
        
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${inputValue}`)
       fetch(`https:// www.themealdb.com/api/json/v1/1/search.php?f=a`)
            .then(response => response.json())
            .then(data => {
                const items = document.getElementById("items");
                items.innerHTML = "";
                if (data.meals == null) {
                    document.getElementById("msg").style.display = "block";
                } else {
                    document.getElementById("msg").style.display = "none";
                    data.meals.forEach(meal => {
                        let itemDiv = document.createElement("div");
                        itemDiv.className = "m-2 singleItem";
                        itemDiv.setAttribute('onclick', `details('${meal.idMeal}')`);
                        let itemInfo = `
                        <div class="card" style="width: 12rem;">
                            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                            <div class="card-body text-center">
                                <h5 class="card-text">${meal.strMeal}</h5>
                            </div>
                        </div>
                        `;
                        itemDiv.innerHTML = itemInfo;
                        items.appendChild(itemDiv);
                    });
                }
            });
    }

    function details(id) {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => res.json())
            .then(detail => {
                let meal = detail.meals[0];
                console.log(meal);
                let details = document.getElementById("details");
                details.innerHTML = "";
                let detailsDiv = document.createElement("div");
                let detailsInfo = `
                <div class="card" style="width: 19rem;">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h3 class="card-text">${meal.strMeal}</h3>
                        <h6>Ingredients</h6>
                        <ul>
                            <li>${meal.strArea}</li>
                            <li>${meal.strCategory}</li>
                            <li>${meal.strIngredient1}</li>
                            <li>${meal.strIngredient2}</li>
                            <li>${meal.strIngredient3}</li>
                            <li>${meal.strIngredient4}</li>
                            <li>${meal.strIngredient5}</li>
                        </ul>
                        <div class="recipe-instructions">
                            <h6>Instructions:</h6>
                            <p>${meal.strInstructions}</p>
                        </div>
                        <button class="favorite-btn" onclick="toggleFavorite('${meal.idMeal}')">❤️ Favorite</button>
                        <button class="download-btn" onclick="downloadRecipe('${meal.idMeal}')">Download Recipe</button>
                    </div>
                </div>
                `;
                detailsDiv.innerHTML = detailsInfo;
                details.appendChild(detailsDiv);
            });
    }

    function downloadRecipe(id) {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => res.json())
            .then(detail => {
                let meal = detail.meals[0];
                let recipeText = `
                Meal: ${meal.strMeal}\n
                Category: ${meal.strCategory}\n
                Area: ${meal.strArea}\n
                Ingredients:\n
                ${meal.strIngredient1}\n
                ${meal.strIngredient2}\n
                ${meal.strIngredient3}\n
                ${meal.strIngredient4}\n
                ${meal.strIngredient5}\n
                Instructions:\n
                ${meal.strInstructions}
                `;
                
                let blob = new Blob([recipeText], { type: "text/plain" });
                let link = document.createElement("a");
                link.href = URL.createObjectURL(blob);
                link.download = `${meal.strMeal}_Recipe.txt`;
                link.click();
            });
    }

    function toggleFavorite(id) {
        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        if (favorites.includes(id)) {
            favorites = favorites.filter(fav => fav !== id); // Remove from favorites
        } else {
            favorites.push(id); // Add to favorites
        }
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }

