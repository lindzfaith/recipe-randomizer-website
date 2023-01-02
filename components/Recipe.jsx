import React from 'react'
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';

import { urlFor } from '../lib/client';

const Recipe = ( { recipe: { image, name, meal, slug }  } ) => {

  return (
    <div>
        <Link href={`../recipe/${slug.current}`}>
        <div>
          <img src={urlFor(image && image[0])} width={330} height={330}/>
          <h3>{name}</h3>
          <h2>{meal}</h2>
        </div>
        </Link>
    </div>
  )
}

export default Recipe