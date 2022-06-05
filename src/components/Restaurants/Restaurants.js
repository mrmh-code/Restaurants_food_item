import React, { useEffect, useState } from 'react';
import Meals from '../Meals/Meals';


const Restaurants = () => {
    const [searchText,setSearchText]=useState('');
    const [meals, setMeals]=useState([]);

    useEffect(() =>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
        .then(res => res.json())
        .then(data =>setMeals(data.meals));
    }, [searchText])


    if(meals==null){
        return <h2 className='mt-3'>Search result is not found...pls back</h2>;
    }

    
    const HandlerEvent=e =>{
        const searchText=e.target.value;
         setSearchText(searchText);
    }
 

    return (
        <div>
            
            <input onChange={HandlerEvent} className='m-2 w-25' type="text"  placeholder='Search Meals Here' />
            <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4 ">
            {
              
                 meals.map(meal => <Meals
                 key={meal.idMeal}
                 meal={meal}
                 />)
            }
              </div>
        </div>
    );
};

export default Restaurants;