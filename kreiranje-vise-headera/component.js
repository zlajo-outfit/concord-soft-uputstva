import React from 'react';
import Cookies from 'universal-cookie';
import Router from 'next/router';
const cookies = new Cookies();
import Image from "next/image";

export const HeaderSpecific = (props) => {

  return (
      <header>
      
        {props.headerLeftText ?
        <div className='container container--fullWidth'>
        <Image
        alt="Mountains"
        src="/images/home-header-image.png"
        layout="fill"
        objectFit="cover"
        quality={100}
        />
        <div className="homeHeaderMain">
        </div> 
        </div>
        : ""
        }
      
      </header>
  );
};
export default HeaderSpecific;