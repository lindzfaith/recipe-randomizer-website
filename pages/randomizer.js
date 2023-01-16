import React from 'react'

import Link from 'next/link';
import {Recipe} from '../components';
import { client } from '../lib/client';
import { SocialIcon } from 'react-social-icons';

let recipes;

const Home = ( { recipes, allSlug, lunchSlug, breakfastSlug, dinnerSlug, dessertSlug } ) => (
    <div>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.js"></script>
    <script>
    </script>
      <div ng-controller="randomizerCtrl" className="main-container">
        <h1>Unsure What To Cook?</h1>
        <div>
            <div className="header">
                <a href="/">All Recipes</a>
                <a href="randomizer">Randomizer</a>
                <a href="about">About</a>
            </div>
        </div>
        <hr/>
        <div className="header-container">

          <div>
          <h3>Choose an option to get a randomized recipe!</h3>
          </div>
          <div ng-show="noSelected">
          <img className="img-3" src="https://proveg.com/wp-content/uploads/2019/01/egg-alternatives-1400x850.jpg" />
          </div>
            <div>
            <Link href={`../recipe/${breakfastSlug}`}>
                <button type="radio" class="meal-button">Breakfast</button>
              </Link>
                <div class="button-divider"></div>
              <Link href={`../recipe/${lunchSlug}`}>
                <button type="radio" class="meal-button">Lunch</button>
              </Link>
                <div class="button-divider"></div>
              <Link href={`../recipe/${dinnerSlug}`}>
                <button type="radio" class="meal-button">Dinner</button>
              </Link>
                <div class="button-divider"></div>
              <Link href={`../recipe/${dessertSlug}`}>
                <button type="radio" class="meal-button">Dessert</button>
              </Link>
                <div class="button-divider"></div>
              <Link href={`../recipe/${allSlug}`}>
                <button type="radio" className="meal-button">All</button>
            </Link>
            </div>
        </div>
        <div className="footer">
        <div className="footer">
            <hr className="footer-line"/>
            <SocialIcon url="https://twitter.com/lindzdev"/>
        </div>
    </div>
    </div>
    </div>
  );

  export const getServerSideProps = async () => {
    const query = '*[_type == "recipe"]';
    const recipes = await client.fetch(query);
    const slugs = ["burger", "blackened-chicken-salad", "mac-n-cheese", "pancakes", "chicken-hibachi",
    "monkey-bread", "ice-cream-sundae"];
    const breakfastSlugs = ["monkey-bread", "pancakes"];
    const lunchSlugs = ["blackened-chicken-salad", "mac-n-cheese"];
    const dinnerSlugs = ["burger", "chicken-hibachi"];
    const dessertSlugs = ["ice-cream-sundae", "oreo-cake"];
    let allSlug = slugs[Math.floor(Math.random()*slugs.length)];
    let lunchSlug = lunchSlugs[Math.floor(Math.random()*lunchSlugs.length)];
    let breakfastSlug = breakfastSlugs[Math.floor(Math.random()*breakfastSlugs.length)];
    let dinnerSlug = dinnerSlugs[Math.floor(Math.random()*dinnerSlugs.length)];
    let dessertSlug = dessertSlugs[Math.floor(Math.random()*dessertSlugs.length)];


    return {
      props: { recipes, allSlug, lunchSlug, breakfastSlug, dinnerSlug, dessertSlug }
    }
  }

export default Home;
