import './Header.scss';
import myImage1 from '../header/images/Group 190.png';
import myImage2 from '../header/images/Frame 49.png';
import myImage3 from '../header/images/play.png';
import myImage4 from '../header/images/amico.png';
import myImage5 from '../header/images/mouse.png';
import myImage6 from '../header/images/design.png';
import myImage7 from '../header/images/healhy.png';
import myImage8 from '../header/images/clock.png';


function Header() {
  
  return <div className='body'>
    <section className="navigation">
  <div className="container">
    <div className="brand">
      <a href="#!"><img src={myImage1} alt="" /> Product</a>
    </div>
    <nav>
      <div className="nav-mobile">
        <a id="nav-toggle" href="#!"><span></span></a>
      </div>
      <ul className="nav-list">
        <li><a href="#!">Product</a></li>
        <li><a href="#!">Customers</a></li>
        <li><a href="#!">Pricing</a></li>
        <li><a href="#!">Resources</a></li>
        <li className='nav-list_btns'>
          <button>Sign In</button>
          <button>Sign up</button>
        </li>
        <li className="nav-list_img"><img src={myImage2} alt="" /></li>
      </ul>
    </nav>
  </div>
</section>
<section>
  <div className='container'>
    <div className='speeds'>
      <div className='speed__texts'>
        <div className='speed__text'>
          <h1>Work at the speed of thought</h1>
          <p>Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your next user experience.</p>
        </div>
        <div className='speed__btns btn'>
          <button>Get started</button>
          <a href="#"><img src={myImage3} alt="" />Watch the Video</a>
        </div>
      </div>
      <div className='speed__img'>
        <img src={myImage4} alt="" />
      </div>
    </div>
  </div>
</section>
<section>
  <div className="container">
    <div className='products'>
      <div className='products_text'>
        <h1>Product  was Built Specifically for You</h1>
      </div>
      <ul className='product__cards'>
        <li className='product__card'>
          <div className='product__img1'>
            <img src={myImage5} alt="" />
          </div>
          <div className='product__text'>
            <h2>First click tests</h2>
            <p>While most people enjoy casino gambling,</p>
          </div>
        </li>
        <li className='product__card'>
          <div className='product__img2'>
            <img src={myImage6} alt="" />
          </div>
          <div className='product__text'>
            <h2>Design surveys</h2>
            <p>Sports betting, lottery and bingo playing for the fun</p>
          </div>
        </li>
        <li className='product__card'>
          <div className='product__img3'>
            <img src={myImage7} alt="" />
          </div>
          <div className='product__text'>
            <h2>Preference tests</h2>
            <p>The Myspace page defines the individual.</p>
          </div>
        </li>
        <li className='product__card'>
          <div className='product__img4'>
            <img src={myImage8} alt="" />
          </div>
          <div className='product__text'>
            <h2>Five second tests</h2>
            <p>Personal choices and the overall personality of the person. </p>
          </div>
        </li>
      </ul>
      <div className='btn product__btn'>
              <button >SIGN UP NOW</button>
      </div>
    </div>
  </div>
</section>



  </div>;
  
}

export default Header;
