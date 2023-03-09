const fetchCard = async () =>{
    const SearchBtn = document.getElementById('default-search');
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${SearchBtn.value}`;
    const res = await fetch(url);
    const data = await res.json();
    showCard(data)

}

const showCard = (data) =>{
    console.log(data)
    const cardContainer = document.getElementById("food-meal-container");
    data.meals.forEach(data => {
        cardContainer.innerHTML +=`
        <article class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img src="${data.strMealThumb}" alt="">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">${data.strCategory}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
                <button onclick="showModal('${data.idMeal}')" class="btn btn-accent" type="button">details</button>            
        </article>
        ` 
    });
}
fetchCard()

const showModal = async(id)=>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    const res = await fetch(url);
    const data = await res.json();
    const male = data.meals[0];
    console.log(male)
    document.getElementById("my-modal-3").checked = true;
    document.getElementById('modal-img').src = `${male.strMealThumb}`;
    document.getElementById('title').innerText = `${male.strArea}`;
    document.getElementById("modal-des").innerText = `${male.strInstructions
    }`
}