// fetch card from api 
const fetchCard = async () => {
    const url = https://www.themealdb.com/api/json/v1/1/search.php?s=fish;
    const response = await fetch(url);
    const data = await response.json();
    const {meals} = data;
    showCard(meals);
}

const showCard = (meals) => {
    const mealConainer = document.getElementById("food-meal-container");
    meals.forEach(meal => {
        mealConainer.innerHTML += `
        <article class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img src="${meal.strMealThumb}" alt="">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">${meal.strCategory}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                <button onclick="showModal('${meal.idMeal}')" class="btn btn-accent" type="button">details</button>            
        </article>
        `
    });

}

fetchCard()

// show modal 
const showModal = async (id) =>  {
    const url = https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id};
    const response = await fetch(url);
    const data = await response.json();
    const meal = data.meals[0]
    document.getElementById("my-modal-3").checked = true;
    document.getElementById("title").innerHTML = <img src="${meal.strMealThumb}">;

    

}