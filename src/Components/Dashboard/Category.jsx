import Navbar from '../sidebar/navbar'
// import sec from '../../assets/secschool.jpeg'
import pic2 from '../../assets/pic-2.jpg'
import thumb1 from '../../assets/thumb-1.png'
import pic3 from '../../assets/pic-3.jpg'
import thumb2 from '../../assets/thumb-2.png'
import pic4 from '../../assets/pic-4.jpg'
import thumb3 from '../../assets/thumb-3.png'
import pic5 from '../../assets/pic-5.jpg'
import thumb4 from '../../assets/thumb-4.png'
import pic6 from '../../assets/pic-6.jpg'
import thumb5 from '../../assets/thumb-5.png'
import pic7 from '../../assets/pic-7.jpg'
import thumb6 from '../../assets/thumb-6.png'
import { Link } from 'react-router-dom';


export default function Category(){
    return(
        <div>
            <Navbar/>
            <main className="-mt-24 pb-8 bg-Neutral">
            <section className="courses">
  <h1 className="heading">our courses</h1>
  <div className="box-container">
    <div className="box">
      <div className="tutor">
        <img src={pic2 } alt="" />
        <div className="info">
          <h3>john deo</h3>
          <span>21-10-2022</span>
        </div>
      </div>
      <div className="thumb">
        <img src={thumb1} alt="" />
        <span>10 videos</span>
      </div>
      <h3 className="title">complete HTML tutorial</h3>
      <Link to='/PlayLists'>
      <a href="playlist.html" className="inline-btn">
        view playlist
      </a>
      </Link>
      
    </div>
    <div className="box">
      <div className="tutor">
        <img src={pic3} alt="" />
        <div className="info">
          <h3>john deo</h3>
          <span>21-10-2022</span>
        </div>
      </div>
      <div className="thumb">
        <img src={thumb2} alt="" />
        <span>10 videos</span>
      </div>
      <h3 className="title">complete CSS tutorial</h3>
      <Link to='/PlayLists'>
      <a href="playlist.html" className="inline-btn">
        view playlist
      </a>
      </Link>
    </div>
    <div className="box">
      <div className="tutor">
        <img src={pic4} alt="" />
        <div className="info">
          <h3>john deo</h3>
          <span>21-10-2022</span>
        </div>
      </div>
      <div className="thumb">
        <img src={thumb3} alt="" />
        <span>10 videos</span>
      </div>
      <h3 className="title">complete JS tutorial</h3>
      <Link to='/PlayLists'>
      <a href="playlist.html" className="inline-btn">
        view playlist
      </a>
      </Link>
    </div>
    <div className="box">
      <div className="tutor">
        <img src={pic5} alt="" />
        <div className="info">
          <h3>john deo</h3>
          <span>21-10-2022</span>
        </div>
      </div>
      <div className="thumb">
        <img src={thumb4} alt="" />
        <span>10 videos</span>
      </div>
      <h3 className="title">complete Boostrap tutorial</h3>
      <Link to='/PlayLists'>
      <a href="playlist.html" className="inline-btn">
        view playlist
      </a>
      </Link>
    </div>
    <div className="box">
      <div className="tutor">
        <img src={pic6} alt="" />
        <div className="info">
          <h3>john deo</h3>
          <span>21-10-2022</span>
        </div>
      </div>
      <div className="thumb">
        <img src={thumb5} alt="" />
        <span>10 videos</span>
      </div>
      <h3 className="title">complete JQuery tutorial</h3>
      <Link to='/PlayLists'>
      <a href="playlist.html" className="inline-btn">
        view playlist
      </a>
      </Link>
    </div>
    <div className="box">
      <div className="tutor">
        <img src={pic7} alt="" />
        <div className="info">
          <h3>john deo</h3>
          <span>21-10-2022</span>
        </div>
      </div>
      <div className="thumb">
        <img src={thumb6} alt="" />
        <span>10 videos</span>
      </div>
      <h3 className="title">complete SASS tutorial</h3>
      <Link to='/PlayLists'>
      <a href="playlist.html" className="inline-btn">
        view playlist
      </a>
      </Link>
    </div>
  </div>
  <div className="more-btn">
    <a href="courses.html" className="inline-option-btn">
      view all courses
    </a>
  </div>
              </section>
        </main>
        </div>
    )
}