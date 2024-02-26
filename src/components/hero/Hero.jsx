import './Hero.scss';
import heroImage1 from '../hero/images/image bg.png';
import heroImage2 from '../hero/images/image.png';
import heroImage3 from '../hero/images/Bitmap.png';
import heroImage4 from '../hero/images/star.png';
import heroImage5 from '../hero/images/Ellipse 2.png';
import heroImage6 from '../hero/images/Ellipse 3.png';
import heroImage7 from '../hero/images/Ellipse 4.png';





function Hero() {
  return <div>
    <section>
      <div className="container">
        <div className="strategys">
          <div className="strategys__text">
            <h1>Contents Strategies</h1>
            <p>We focus on ergonomics and meeting you where you work. It's only a keystroke away. </p>
          </div>
          <ul className='strategy__cards'>
        <li className='strategy__card'>
          <div className='strategy__img1'>
            <img src={heroImage1} alt="" />
          </div>
          <div className='strategy__text'>
            <p>By Wahid Ari |  03 March 2019</p>
            <h2>Increasing Prosperity With Positive Thinking</h2>
          </div>
        </li>
        <li className='strategy__card'>
          <div className='strategy__img1'>
            <img src={heroImage2} alt="" />
          </div>
          <div className='strategy__text'>
            <p>By Wahid Ari |  03 March 2019</p>
            <h2>Increasing Prosperity With Positive Thinking</h2>
          </div>
        </li>
        <li className='strategy__card'>
          <div className='strategy__img1'>
            <img src={heroImage3} alt="" />
          </div>
          <div className='strategy__text'>
            <p>By Wahid Ari |  03 March 2019</p>
            <h2>Increasing Prosperity With Positive Thinking</h2>
          </div>
        </li>
        
      </ul>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="tebles">
          <div className="tables__text">
            <h1>Price Table</h1>
          <p>We offer competitive price</p>
          </div>
          <div className="table">
            <div className="table__card">
          <div className='table__free'>
            <h2>Free</h2>
            <p>Brief price description</p>
          </div>
          <div className='table__money'>
            <h1>0</h1>
            <div className='money__per'>
              <h4>$</h4>
              <p>Per / month</p>
            </div>
            
          </div>
          <div className='table__text'>
            <h4>Only 2 Operators</h4>
            <h4>Notifications</h4>
            <h4>Landing Pages</h4>
          </div>
          <div className='btn table__btn'>
            <button>Order Now</button>
          </div>
              
            </div>
            
            <div className="table__card">
          <div className='table__free'>
            <h2>Standard</h2>
            <p>Brief price description</p>
          </div>
          <div className='table__money'>
            <h1>5</h1>
            <div className='money__per'>
              <h4>$</h4>
              <p>Per / month</p>
            </div>
            
          </div>
          <div className='table__text'>
            <h4>5+ Operators</h4>
            <h4>Notifications</h4>
            <h4>Landing Pages</h4>
          </div>
          <div className='btn table__btn'>
            <button>Order Now</button>
          </div>
              
            </div>

            <div className="table__card">
          <div className='table__free'>
            <h2>Premium</h2>
            <p>Brief price description</p>
          </div>
          <div className='table__money'>
            <h1>10</h1>
            <div className='money__per'>
              <h4>$</h4>
              <p>Per / month</p>
            </div>
            
          </div>
          <div className='table__text'>
            <h4>10+ Operators</h4>
            <h4>Notifications</h4>
            <h4>Landing Pages</h4>
          </div>
          <div className='btn table__btn'>
            <button>Order Now</button>
          </div>
              
            </div>

          </div>
          
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className='clients'>
          <div className='clients__text'>
            <h1>What Clients Say</h1>
            <p>Problems trying to resolve the conflict between 
the two major realms of Classical physics: Newtonian mechanics </p>
          </div>
          <div className='client__cards'>
          <div className='client__card'>
            <div className='client__product'>
            <img src={heroImage4} alt="" />
            <p>Product helps you see how many 
more days you need to work to 
reach your financial goal.</p>
          </div>
            <div className='avatar'>
            <span className='avatar__img'><img src={heroImage5} alt="" /></span>
            <div className='avatar__name'>
              <h3>Wahid Ari</h3>
              <h4>Designer</h4>
            </div>
          </div>
          </div>
          <div className='client__card'>
            <div className='client__product'>
            <img src={heroImage4} alt="" />
            <p>Product helps you see how many 
more days you need to work to 
reach your financial goal.</p>
          </div>
            <div className='avatar'>
            <span className='avatar__img'><img src={heroImage6} alt="" /></span>
            <div className='avatar__name'>
              <h3>Wahid Ari</h3>
              <h4>Designer</h4>
            </div>
          </div>
          </div>
          <div className='client__card'>
            <div className='client__product'>
            <img src={heroImage4} alt="" />
            <p>Product helps you see how many 
more days you need to work to 
reach your financial goal.</p>
          </div>
            <div className='avatar'>
            <span className='avatar__img'><img src={heroImage7} alt="" /></span>
            <div className='avatar__name'>
              <h3>Wahid Ari</h3>
              <h4>Designer</h4>
            </div>
          </div>
          </div>

          </div>

          
        </div>
      </div>
    </section>

  </div>;
}

export default Hero;
