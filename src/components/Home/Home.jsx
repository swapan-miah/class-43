import { Link } from 'react-router-dom';
import './Home.css'
const Home = () => {
    return (
        <div>
            <div className='home-container'>

                <div className="home-item-head">

                    <div className="home-left">
                        <span>Sale up to 70% off</span>
                        <h3>New Collection For Fall</h3>
                        <p>Discover all the new arrivals of ready-to-wear collection.</p>
                        <Link to="/product"><button>Shop Now</button></Link>
                    </div>

                    <div className="home-right">
                        <div className="images">
                            <img src="Group 12.jpg" alt="" />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Home;