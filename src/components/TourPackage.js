import Footer from "../components/Footer";
import Header from "../components/Header";
import {Link} from "react-router-dom";
import { useEffect } from "react";

const TourPackage = ()=> {
  useEffect(()=> {
    window.scrollTo(0,0);
  });


    return(
    <>
    <Header/>
    <main class="main" id="main">
      <section
        class="section about-hero"
        style={{ backgroundImage: 'url(./media/bg-about.jpg)'}}
        id="hero"
      >
        <h1 class="hero__title">Tour Package</h1>
      </section>

      <section class="section tour container">
        <div class="tour__container">
          <div class="tour__card">
            <img src="./media/img-1.jpg" alt="" class="tour__card-img" />
            <div class="tour__data">
              <h5 class="tour__data-title">Jog Falls</h5>
              <span class="tour__data-subtitle">Shivamogga</span>
            </div>
            <Link to="/tour-package/asd" class="tour__link"></Link>
          </div>
          <div class="tour__card">
            <img src="./media/img-2.jpg" alt="" class="tour__card-img" />
            <div class="tour__data">
              <h5 class="tour__data-title">Mysore Palace</h5>
              <span class="tour__data-subtitle">Mysore</span>
            </div>
            <Link to="/tour-package/asd" class="tour__link"></Link>
          </div>
          <div class="tour__card">
            <img src="./media/img-3.jpg" alt="" class="tour__card-img" />
            <div class="tour__data">
              <h5 class="tour__data-title">Mullayanagiri</h5>
              <span class="tour__data-subtitle">Chikkamagaluru</span>
            </div>
            <Link to="/tour-package/asd" class="tour__link"></Link>
          </div>
          <div class="tour__card">
            <img src="./media/img-4.jpg" alt="" class="tour__card-img" />
            <div class="tour__data">
              <h5 class="tour__data-title">Murudeshwara</h5>
              <span class="tour__data-subtitle">Uttara Kannada</span>
            </div>
            <Link to="/tour-package/asd" class="tour__link"></Link>
          </div>
          <div class="tour__card">
            <img src="./media/img-5.jpg" alt="" class="tour__card-img" />
            <div class="tour__data">
              <h5 class="tour__data-title">Elephant Stables</h5>
              <span class="tour__data-subtitle">Hampi</span>
            </div>
            <Link to="/tour-package/asd" class="tour__link"></Link>
          </div>
          <div class="tour__card">
            <img src="./media/img-6.jpg" alt="" class="tour__card-img" />
            <div class="tour__data">
              <h5 class="tour__data-title">Nandi Hills</h5>
              <span class="tour__data-subtitle">Chikkaballapur</span>
            </div>
            <Link to="/tour-package/asd" class="tour__link"></Link>
          </div>
        </div>
      </section>
    </main>

    <Footer/>
    </>
    );
};


export default TourPackage;