import React, { useState } from 'react';

import { client, urlFor } from '../../lib/client';
import { Recipe, SideRecipe } from '../../components';
import { SocialIcon } from 'react-social-icons';

const RecipeDetails = ({ recipe, recipes }) => {
  const { image, name, meal, step1, step2, step3, step4, step5, step6, step7, ingredients } = recipe;
  const [index, setIndex] = useState(0);

  return (
    <div>
        <div className="main-container">
          <h1>Unsure What To Cook?</h1>
          <div>
            <div className="header">
                <a href="/">All Recipes</a>
                <a href="../randomizer">Randomizer</a>
                <a href="about.html">About</a>
            </div>
          </div>
          <hr/>
        <div className="recipe-container-slug">
          <h3>{name}</h3>
          <img className="img-2" src={urlFor(image && image[0])}/>
          <p className="ingredients">Ingredients: {ingredients}</p>
        </div>
        <div className="text-container">
          <p className="instructions">Instructions: </p>
          <p className="instructions">{step1}</p>
          <p className="instructions">{step2}</p>
          <p className="instructions">{step3}</p>
          <p className="instructions">{step4}</p>
          <p className="instructions">{step5}</p>
          <p className="instructions">{step6}</p>
          <p className="instructions">{step7}</p>
        </div>
        <div>
        <div className="heading">
          <h3>All Recipes</h3>
        </div>
          <div className="side-container">
          {recipes?.map(
            (recipe) => <SideRecipe key=
            {recipe._id} recipe={recipe} /> )}
          </div>
        </div>
      </div>
      <div className="footer">
            <hr className="footer-line"/>
            <SocialIcon url="https://twitter.com/lindzfaith"/>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "recipe"] {
    slug {
      current
    }
  }
  `;

  const recipes = await client.fetch(query);

  const paths = recipes.map((recipe) => ({
    params: { 
      slug: recipe.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "recipe" && slug.current == '${slug}'][0]`;
  const recipesQuery = '*[_type == "recipe"]'
  
  const recipe = await client.fetch(query);
  const recipes = await client.fetch(recipesQuery);

  console.log(recipes.size);

  return {
    props: { recipes, recipe }
  }
}

export default RecipeDetails