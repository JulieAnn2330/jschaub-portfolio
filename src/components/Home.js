import React from 'react';
import {Helmet} from 'react-helmet';

export const Home = () => (
<div className="bg_image">
    <Helmet>
      <style>{'body { background-color: black; }'}</style>
    </Helmet>
    <h1 className="title">Julie Schaub</h1>
    <h3 className="subtitle">Professional Portfolio</h3>
</div>

);


export default Home;