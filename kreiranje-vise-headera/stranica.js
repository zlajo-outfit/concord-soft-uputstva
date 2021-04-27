import React from "react";
import Axios from "axios";
import getConfig from "next/config";
import Layout from "../layouts/Layout";
import Product from "../components/frontend/Product";
import HeaderSpecific from "../components/HeaderSpecific/index";

import Image from "next/image";

const { publicRuntimeConfig } = getConfig();
const { SERVER_URL } = publicRuntimeConfig;

let headerData = {
    "leftText": "here is header text main"
  }

const headerLeftText = headerData.leftText;

const HomePage = props => {
  const { products } = props;

  return (
    <div>
      <Layout {...props}>
        <HeaderSpecific headerLeftText={headerLeftText} />
        <main>
          {/* INFO SECTION 1 Lets stretch the surface section */}
          <div className="container container--fullWidth">
            <div className="info info--surface">
              <div className="infoContainer">
              <div className="info__content">
                <h1>Let's scrath the surface</h1>
                <p>In the United States, atherosclerotic cardiovascular disease is a leading cause of death and disability for men, women, and people of most racial and ethnic groups.</p>
                <div className="button">
                  <div className="button__text">let's dig deeper</div>{/* button__text */} 
                </div>{/* button */} 
                </div>{/* info__content */} 
              </div>{/* infoContainer */} 
              <div className="info__image">
                <Image
                  alt="human heart 3d rendered"
                  src="/images/human-heart-edited.jpg"
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />
                </div>{/* info__image */}   
            </div>{/* info info--surface */}
            </div>{/* container--fullWidth */}
            {/* INFO SECTION 1 Lets stretch the surface section */}

            {/* Blurbs section */}
            <div className="container container--fullWidth container--blurbs">
              <div className="blurbs blurbs--technology">
                  <div className="blurbsContainer">
                  <div className="blurb blurb--left">
                  <Image
                    src="/images/doctor-image-1.png"
                    alt="Picture of the pacient with doctor"
                    width={900}
                    height={668}
                    className="blurbImage"
                    />{/* blurbImage */}
                    <div className="blurbText">Learn how we plan to help cardiovascular patients.</div>{/* blurbText */}
                    </div>{/* blurb blurb--left */} 
                    <div className="blurb blurb--right">
                  <Image
                    src="/images/doctor-image-2.png"
                    alt="Picture of the pacient with doctor"
                    width={900}
                    height={668}
                    className="blurbImage"
                    />{/* blurbImage */}
                    <div className="blurbText">See how our technology will empower physicians.</div>{/* blurbText */}
                    </div>{/* blurb blurb--left */} 
                  </div>{/* blurbsContainer */} 
              </div>{/* blurbs blurbs--technology */} 
            </div>{/* container container--fullWidth */} 
            {/* Blurbs section */}


            {/* INFO SECTION 2 A big problem set us */}
          <div className="container container--fullWidth">
            <div className="info info--bigProblem">
              <div className="infoContainer">
              <div className="info__content">
                <h1>A big problem set us on an even bigger mission.</h1>
                <p>Our goal is to develop a more precise method and diagnostic tool for assessing and managing risk in cardiovascular disease.</p>
                <div className="button">
                  <div className="button__text">learn how we plan to fulfill it</div>{/* button__text */} 
                </div>{/* button */} 
                </div>{/* info__content */} 
              </div>{/* infoContainer */} 
              <div className="info__image">
                <Image
                  alt="human heart 3d rendered"
                  src="/images/human-3d-rendered.png"
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />
                </div>{/* info__image */}   
            </div>{/* info info--surface */}
            </div>{/* container--fullWidth */}
            {/* INFO SECTION 2 A big problem set us */}



            {/* INFO SECTION 3 Meet the future of precision */}
          <div className="container container--fullWidth">
            <div className="info info--meetTheFuture">
              <div className="infoContainer">
              <div className="info__content">
                <h1>Meet the future of precision diagnostics.</h1>
                <p>An innovative diagnostic test that is being developed to help doctors make more informed treatment decisions.</p>
                <div className="button">
                  <div className="button__text">discover our test</div>{/* button__text */} 
                </div>{/* button */} 
                </div>{/* info__content */} 
              </div>{/* infoContainer */} 
              <div className="info__image">
                <Image
                  alt="human heart 3d rendered"
                  src="/images/red-blood-cells.png"
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                />
                </div>{/* info__image */}   
            </div>{/* info info--surface */}
            </div>{/* container--fullWidth */}
            {/* INFO SECTION 3 Meet the future of precision */}

            


          




          
        </main>
      </Layout>
    </div>
  );
};

export async function getServerSideProps(ctx) {
  let products = [];

  try {
    const pageResponse = await Axios.get(`${SERVER_URL}/data?limit=10`);
    products = pageResponse.data;
  } catch (err) {
    console.log(err.message);
  }

  return { props: { products } };
}

export default HomePage;
