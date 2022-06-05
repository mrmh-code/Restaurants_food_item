import './App.css';
import Restaurants from './components/Restaurants/Restaurants';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import MealDetails from './components/MealsDetails/MealDetails';
import NotFound from './components/NotFound/NotFound';
function App() {
  return (
    <div className="App">
           
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Restaurants/>}/>
         <Route path='/meal/:mealId' element={<MealDetails/>}/>
         <Route path='*' element={<NotFound/>} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
