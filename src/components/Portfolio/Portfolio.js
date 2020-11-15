import React, { useState } from 'react';
import Slider from "react-slick";
import {Helmet} from 'react-helmet';

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Portfolio() {
  const config = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };

  const [settings] = useState(config);

  const products = [
    {
      img: require('../../images/Cocktail_Coterie.PNG'),
      title: 'Project 2 - Cocktail_Coterie',
      description: 'Description of Project: This app allows the user in seclusion during the covid pandemic to socialize with friends while staying safe at home. The user can organize an online cocktail party and stay socially connected with friends. Searching for a favorite cocktail by ingredient will bring up recipes containing that ingredient.',
      technologies: 'Technologies Used: Axios, bCrypt, Bootstrap, Express, Express-Session, Handlebars, Javascript, jQuery, Node, Node FS, Passport, Sequelize',
      deploy: "https://cocktail-coterie.herokuapp.com/" ,
      git: "https://github.com/JulieAnn2330/cocktail_coterie"
    },
    {
      img: require('../../images/Nasa.PNG'),
      title: 'Project 1 - Spacex/NASA Flight Data',
      description: 'Description of Project: This interactive site provides information about NASA, SpaceX and their relative flight data information. Explore the history of NASA and SpaceX with interactive timelines that include links for additional organizational and mission detail, or pick a mission from the dropdown and click the link in the data table to view specific mission details.',
      technologies:'Technologies Used: HTML, Bulma, CSS, Javascript, jQuery, AJAX, API Calls NASA, SpaceX and DarkSky, moment.js',
      deploy: "https://reidbuckingham48.github.io/spacex-nasa-flight-data/",
      git: "https://github.com/JulieAnn2330/spacex-nasa-flight-data"
    },
    {
      img: require('../../images/GoogleBooks.PNG'),
      title: 'Google Book Library',
      description: 'Description of Project: This interactive application allows the user to create a library of saved books using the GoogleBooks API call. Users can view the books on the GoogleBooks site, save books to their library and remove books from their library.',
      technologies:'Technologies Used: API Calls, Axios, Bootstrap, CSS, Heroku, HTML, JavaScript, mongoDB, node.js, React',
      deploy: "https://vast-peak-23165.herokuapp.com/",
      git: "https://github.com/JulieAnn2330/Google-Books-Library"
    },
    {
      img: require('../../images/Employee.PNG'),
      title: 'Midtown Full Stack Employee Directory',
      description: 'Description of Project: This project allows employees in a company to view non-sensitive information about company employees. The directory can be sorted by any column.',
      technologies: 'Technologies Used: React',
      deploy: "https://julieann2330.github.io/Midtown-Full-Stack-Employee-Directory/",
      git: "https://github.com/JulieAnn2330/Midtown-Full-Stack-Employee-Directory"
    },
    {
      img: require('../../images/Burger.PNG'),
      title: 'Eat-Da-Burger',
      description: 'Description of Project: This interactive application takes users through a restaurant experience. Users can order the burger of their choice, devour the burger and trash the burger all with the click of a button.',
      technologies: 'Technologies Used: AJAX, CSS, Express, Handlebars, HTML, JavaScript, MySQL, Node, ORM',
      deploy: "https://afternoon-plains-66165.herokuapp.com/",
      git:"https://github.com/JulieAnn2330/burger-logger"
    }
  ]

  // const onChangeCenterMode = e => {
  //   if (e.target.checked) {
  //     setSettings({
  //       ...config,
  //       centerMode: true,
  //       centerPadding: '50px'
  //     });
  //   } else {
  //     setSettings(config);
  //   }
  // }

  return (
    <div className="App">
    <Helmet>
    <style>{'body { background-color: slategray; }'}</style>
    </Helmet>
    <h1 className="portfolioLabel">Portfolio Work</h1>
      {/* <h3>Carousel Slider in React - <a href="https://www.cluemediator.com" target="_blank">Clue Mediator</a></h3>

      <label className="cb-centermode">
        <input type="checkbox" checked={settings.centerMode} onChange={onChangeCenterMode} />
        <span>Enable Center Mode</span>
      </label> */}

      <Slider {...settings}>
        {products.map((x, i) => {
          return <div key={i} className="img-card">
            <img className="img" src={x.img} alt="project" />
            <div class="card-body">
              <div className="card-title">{x.title}</div>
              <div className="card-text">{x.description}</div>
              <div className="card-text">{x.technologies}</div>
              <div className="card-text"><a href={x.deploy} target="blank">Link to Deployed Project</a></div>
              <div className="card-text"><a href={x.git} target="blank">Link to GitHub Repo</a></div>
            </div>
          </div>
        })}
      </Slider>
    </div>
  );
}

export default Portfolio;
