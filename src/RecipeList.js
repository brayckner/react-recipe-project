import React, {Component} from 'react';
import './RecipeList.css';
import Recipe from './Recipe';
import PropTypes from 'prop-types';

class RecipeList extends Component {
    static defaultProps = {
        recipes: [
            {
                title: "Spaghetti",
                ingredients: ["Flour","Water"],
                instructions: "Mix ingredients",
                img: "spaghetti.jpeg"
            },
            {
                title: "Milkshake",
                ingredients: ["2 Scoops of Ice Cream","8oz of Whole Milk"],
                instructions: "Combine Ice cream and milk blend until creamy",
                img: "milkShake.jpeg"
            },
            {
                title: "Avocado Toast",
                ingredients: ["2 slices of bread","1 avocado","1 tablespoon of olive oil","1 pinch of salt","pepper"],
                instructions: "Toast bread. Slice avocado and spread on bread. Add salt and pepper to taste.",
                img: "avocadoToast.jpeg"
            }
        ]
    }

    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.object).isRequired
    }
    render() {
        const recipes = this.props.recipes.map((r,index) => (
            <Recipe key={index} {...r} />
        ));
        return (
            <div className="recipe-list">
                {recipes}
            </div>
        );
    }
}

export default RecipeList;