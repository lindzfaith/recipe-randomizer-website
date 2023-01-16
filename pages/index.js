import React from 'react'

import {Recipe} from '../components';
import { client } from '../lib/client';
import { SocialIcon } from 'react-social-icons';

const Home = ( { recipes } ) => (
    <div>
      <div className="main-container">
        <h1>Unsure What To Cook?</h1>
        <div>
            <div className="header">
                <a href="">All Recipes</a>
                <a href="randomizer">Randomizer</a>
                <a href="about">About</a>
            </div>
        </div>
        <hr/>
        <div className="recipe-container">
          {recipes?.map(
            (recipe) => <Recipe key=
            {recipe._id} recipe={recipe} /> )}
        </div>
        <div className="footer">
            <hr className="footer-line"/>
            <SocialIcon url="https://twitter.com/lindzdev"/>
        </div>
    </div>
    </div>
  );

  export const getServerSideProps = async () => {
    const query = '*[_type == "recipe"]';
    const recipes = await client.fetch(query);

    return {
      props: { recipes }
    }
  }

export default Home;
