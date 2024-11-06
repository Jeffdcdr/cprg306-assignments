"use client"

import { useState, useEffect } from "react";

export default function MealIdeas(ingredient) {
    const [meals, setMeals] = useState([]);



    const fetchMealIdeas = async (ingredient) => {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        console.log(data);
        setMeals(data.meals);
    };

    const loadMealIdeas = () => {
        fetchMealIdeas(ingredient);
        setMeals(meals);
    };

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);



}