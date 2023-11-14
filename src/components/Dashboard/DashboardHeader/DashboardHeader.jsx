/* eslint-disable react/no-unescaped-entities */
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink } from 'react-router-dom';
import './DashboardHeader.css';

const DashboardHeader = () => {


    return (
      <>

        <div className="p-3 left">
          
          <img className='profile' src="/public/site-rafiki.png" alt="" />
          <p>Admin</p>

          <NavLink to="/dashboard/home"><button className='w-100 text-start my-1 p-2 rounded fs-5 fw-semibold'>Home</button></NavLink>
          <NavLink to="/dashboard/about"><button className='w-100 text-start my-1 p-2 rounded fs-5 fw-semibold'>About</button></NavLink>
          <NavLink to="/dashboard/portfolio"><button className='w-100 text-start my-1 p-2 rounded fs-5 fw-semibold'>Portfolio</button></NavLink>
          <NavLink to="/dashboard/contact"><button className='w-100 text-start my-1 p-2 rounded fs-5 fw-semibold'>Contact</button></NavLink>

        </div>

       
      
      </>
    );
};

export default DashboardHeader;