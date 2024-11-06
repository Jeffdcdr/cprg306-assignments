"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ingredient}) {
  const [meals, setMeals] = useState([]);

  async function fetchMealIdeas(ingredient) {
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setMeals(data && data.meals ? data.meals : []);
    } catch (error) {
      console.error("Error fetching meal ideas", error);
      setMeals([]);
    }
  }

  const loadMealIdeas = (ingredient) => {
    fetchMealIdeas(ingredient);
    setMeals(meals);
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
            {meals.length > 0 ? (
                <ul>
                    <p className='text-2xl'>Here are some meal ideas using {ingredient}</p>
                    {meals.map(meal => (
                        <li key={meal.idMeal}>
                            <h3>{meal.strMeal}</h3>
                            {/* <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: '100px', height: '100px' }} /> */}
                        </li>
                    ))}
                </ul>
            ) : <p className='text-2xl'>No meal ideas available for "{ingredient}".</p>}
        </div>
    );
}
