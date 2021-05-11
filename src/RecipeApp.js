// import logo from './logo.svg';
import './RecipeApp.css';
import Recipe from './Recipe'
import Navbar from './Navbar';
import RecipeList from './RecipeList';

function RecipeApp() {
  return (
    
    <div className="App">
      <Navbar/> {/* Adding Navbar */}
      <RecipeList/> {/* Adding the Recipe List */}
    </div>
  );
}

export default RecipeApp;
