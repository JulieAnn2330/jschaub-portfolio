import React, { useState } from 'react';
import {Helmet} from 'react-helmet';
import Cocktail from '../images/Cocktail_Coterie.PNG';
import Burger from '../images/Burger.PNG';
import SpaceX from '../images/Nasa.PNG';
import Workout from '../images/Workout.PNG';
import Employee from '../images/Employee.PNG';
import Weather from '../images/Weather.PNG';
import Books from '../images/GoogleBooks.PNG';
import Carousel from 'react-bootstrap/Carousel';

export function Portfolio() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
    <Helmet>
    <style>{'body { background-color: slategray; }'}</style>
 </Helmet>
 <h1 className="portfolioLabel">Portfolio Work</h1>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= { Cocktail }
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="caption">Project 2 - Cocktail_Coterie</h3>
          <p className="carouselText"><a href="https://github.com/AuroraBrune/cocktail_coterie" target="_blank" rel="noopener noreferrer">Link to GitHub Repo</a>  |  <a href="https://cocktail-coterie.herokuapp.com/" target="_blank" rel="noopener noreferrer">Link to Deployed App</a></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ SpaceX }
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className="caption">NASA/SpaceX Flight Data</h3>
          <p className="carouselText">
          <a href="https://github.com/reidbuckingham48/spacex-nasa-flight-data" target="_blank" rel="noopener noreferrer">Link to GitHub Repo</a>  |  <a href="https://reidbuckingham48.github.io/spacex-nasa-flight-data/" target="_blank" rel="noopener noreferrer">Link to Deployed App</a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ Books }
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Google Books Library</h3>
          <p className="carouselText"><a href="https://github.com/JulieAnn2330/Google-Books-Library" target="_blank" rel="noopener noreferrer">Link to GitHub Repo</a>  |  <a href="https://vast-peak-23165.herokuapp.com/" target="_blank" rel="noopener noreferrer">Link to Deployed App</a></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ Employee }
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h3 className="label3">Midtown Full Stack Employee Directory</h3>
          <p className="carouselText"><a href="https://github.com/JulieAnn2330/Midtown-Full-Stack-Employee-Directory" target="_blank" rel="noopener noreferrer">Link to GitHub Repo</a>  |  <a href="https://julieann2330.github.io/Midtown-Full-Stack-Employee-Directory/" target="_blank" rel="noopener noreferrer">Link to Deployed App</a></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ Burger }
          alt="Fifth slide"
        />
        <Carousel.Caption>
          <h3 className="caption">Eat-Da-Burger</h3>
          <p className="carouselText"><a href="https://github.com/JulieAnn2330/burger-logger" target="_blank" rel="noopener noreferrer">Link to GitHub Repo</a>  |  <a href="https://afternoon-plains-66165.herokuapp.com/" target="_blank" rel="noopener noreferrer">Link to Deployed App</a></p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ Workout }
          alt="Sixth slide"
        />
        <Carousel.Caption>
          <h3 className="label3">Workout Tracker</h3>
          <p className="carouselText">
          <a href="https://github.com/JulieAnn2330/workout-tracker" target="_blank" rel="noopener noreferrer">Link to GitHub Repo</a>  |  <a href="https://cryptic-sands-27710.herokuapp.com/?id=5f7e298bc8df200017c17715" target="_blank" rel="noopener noreferrer">Link to Deployed App</a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={ Weather }
          alt="Seventh slide"
        />
        <Carousel.Caption>
          <h3 className="label3">Weather Dashboard</h3>
          <p className="carouselText">
          <a href="https://github.com/JulieAnn2330/weather-dashboard" target="_blank" rel="noopener noreferrer">Link to GitHub Repo</a>  |  <a href="https://julieann2330.github.io/weather-dashboard/" target="_blank" rel="noopener noreferrer">Link to Deployed App</a>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    </div>
  );
}

//render(<Portfolio />);

export default Portfolio
