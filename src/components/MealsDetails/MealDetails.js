import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {Button} from 'react-bootstrap'
const MealDetails = () => {
    
   const {mealId}= useParams()
   const [meals,setMeals]=useState([]);


   useEffect(() => {
       fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
       .then(res => res.json())
       .then(data => setMeals(data.meals[0]));
   }, [])
   
   const {strMeal,strArea,strInstructions,strYoutube,strMealThumb}=meals;
   
    return (
        <div>
            <img src={strMealThumb} className='w-25 mt-3' alt="" />
            <h2>{strMeal}</h2>
            <h5>Area: {strArea}</h5>
            <p>{strInstructions}</p>
            <Button href={strYoutube} className='btn btn-primary m-2'>Food Review</Button>
            <Link to={'/'} className='btn btn-success'>Back to Restaurants</Link>
        </div>
    );
};

export default MealDetails;