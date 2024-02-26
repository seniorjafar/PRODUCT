import './Footer.scss';
import footerImage1 from '../footer/images/screen.png';


function Footer() {
  return <div>
    <footer>
      <div className='container'>
        <div className='joins'>
          <div className='join__text'>
            <h1>Join 100 Compannies who boost their business with Product</h1>
            <div className=' join__btn'>
              <button>Get This</button>
            </div>
          </div>
          <div className='join__img'>
            <img src={footerImage1} alt="" />
          </div>
        </div>
      </div>
    </footer>
  </div>;
}

export default Footer;
