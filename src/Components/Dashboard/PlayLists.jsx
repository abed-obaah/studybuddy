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
import post1 from '../../assets/post-1-1.png'
import post2 from '../../assets/post-1-2.png'
import post3 from '../../assets/post-1-3.png'
import post4 from '../../assets/post-1-4.png'
import post5 from '../../assets/post-1-5.png'
import post6 from '../../assets/post-1-6.png'
import { Link } from 'react-router-dom';
import Navbar from '../sidebar/navbar'



export default function Playlists(){
    return(
        <div>
             <Navbar/>
             <main className="-mt-24 pb-8 bg-Neutral">
                            <section className="playlist-details pt-10">

                <h1 className="heading ml-10">playlist details</h1>

                <div className="row">

                <div className="column">
                    <form action="" method="post" className="save-playlist">
                        <button type="submit"><i className="far fa-bookmark"></i> <span>save playlist</span></button>
                    </form>

                    <div className="thumb">
                        <img src={thumb1} alt=""/>
                        <span>10 videos</span>
                    </div>
                </div>
                <div className="column">
                    <div className="tutor">
                        <img src={pic2} alt=""/>
                        <div>
                            <h3>john deo</h3>
                            <span>21-10-2022</span>
                        </div>
                    </div>

                    <div className="details">
                        <h3>complete HTML tutorial</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum minus reiciendis, error sunt veritatis exercitationem deserunt velit doloribus itaque voluptate.</p>
                        <a href="teacher_profile.html" className="inline-btn">view profile</a>
                    </div>
                </div>
                </div>

                        </section>

                <section className="playlist-videos mt-10">

                <h1 className="heading ml-10">playlist videos</h1>

                <div className="box-container">
                
                        <a className="box" href="watch-video.html">
                        <Link to='/Watchvideo'>
                            <i className="fas fa-play"></i>
                            <img src={post1} alt=""/>
                            <h3>complete HTML tutorial (part 01)</h3>
                            </Link>
                        </a>
                
                
                
                <a className="box" href="watch-video.html">
                <Link to='/Watchvideo'>
                    <i className="fas fa-play"></i>
                    <img src={post2}alt=""/>
                    <h3>complete HTML tutorial (part 02)</h3>
                    </Link>
                </a>
                

                
                    <a className="box" href="watch-video.html">
                    <Link to='/Watchvideo'>
                        <i className="fas fa-play"></i>
                        <img src={post3} alt=""/>
                        <h3>complete HTML tutorial (part 03)</h3>
                        </Link>
                    </a>
               
                
                
                        <a className="box" href="watch-video.html">
                        <Link to='/Watchvideo'>
                            <i className="fas fa-play"></i>
                            <img src={post4 } alt=""/>
                            <h3>complete HTML tutorial (part 04)</h3>
                            </Link>
                        </a>
                
                
                    <a className="box" href="watch-video.html">
                     <Link to='/Watchvideo'>
                        <i className="fas fa-play"></i>
                        <img src={post5} alt=""/>
                        <h3>complete HTML tutorial (part 05)</h3>
                        </Link>
                    </a>
               
                

                <a className="box" href="watch-video.html">
                    <Link to='/WatchVideo'>
                    <i className="fas fa-play"></i>
                    <img src={post6} alt=""/>
                    <h3>complete HTML tutorial (part 06)</h3>
                    </Link>
                   
                </a>

                </div>

                </section>
             </main>
           
        </div>
    )
}