import { NavLink } from 'react-router-dom';
import './Header.css'

function Header() {


  return (
    <>
    <section className="header-section">

        <div className="header-container">
            <div className="header-head">
                <div className="icon"><img src="Logo.png" alt="" /></div>
                <div className="menu">
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/product">Order</NavLink></li>
                        <li><NavLink to="/cart">Order Review</NavLink></li>
                        <li><NavLink to="/dashboard/home">Go Dashboard</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>

    </section>
      
    </>
  )
}

export default Header;