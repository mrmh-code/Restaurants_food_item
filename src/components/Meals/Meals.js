import React from 'react';
import { Link } from 'react-router-dom';
const Meals = (props) => {
    const {strMeal,strInstructions,strMealThumb,idMeal}=props.meal;
   
    return (
        <div>
    <div className="col">
    <div className="card">
      <img src={strMealThumb} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{strMeal}</h5>
        <p className="card-text">{strInstructions.slice(1,200)}</p>
        <Link to={`/meal/${idMeal}`} className='btn btn-primary'>Visit Details Meal</Link>
      </div>
    </div>
  </div>
        </div>
    );
};

export default Meals;