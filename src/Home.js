import React from 'react';
import web from "../src/images/card.jpg"

const Home = () => {
  return (
    <section id="header" className="">
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
          <div className="row">
          
            <div className="col-md-60 pt-5 pt-lg-0 order-2 order-lg-1">
                <h1>Grow your business with <strong> Nikhil Rajbhar </strong> </h1>
                <h3 className="my-3">we are the team of talented designer</h3>

              <div className="mt-3">
                <a href="https://www.google.com/" className="button">Get Started </a>
              </div>
            </div>
              <div className="center">
                <img src={web} className="img-fluid animated" alt="Card" width="400px" height="600px" />
              </div>
              </div>
              
          </div>

          </div>
        </div>
      
    </section>
  );
};

export default Home;