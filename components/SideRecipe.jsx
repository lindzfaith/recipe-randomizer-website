import React from 'react'
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';

import { urlFor } from '../lib/client';

const Recipe = ( { recipe: { image, name, meal, slug }  } ) => {

  return (
    <div>
        <Link href={`../recipe/${slug.current}`}>
        <div>
          <img className="img-4" src={urlFor(image && image[0])} width={200} height={200}/>
          <p>{name}</p>
        </div>
        </Link>
    </div>
  )
}

export default Recipe