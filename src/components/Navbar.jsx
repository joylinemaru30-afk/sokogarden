import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (

<nav className='navbar navbar-expand-md navbar-ligth bg-ligth shadow-sm mt-1'>
{/* {Below is the navbar logo/brand} */}
<Link to="/"className="navbar-brand fw-bold m-2">Soko <span className="text-danger">Garden</span></Link>



{/* {Below is the toggle button} */}
<button className="navbar-toggler"
type='button'
data-bs-toggle="collapse"
data-bs-target="#navbarcontents"
> 
<span className='navbar-toggler-icon'></span>
</button>

{/* {Below is the div that contains al the links to the diffrent pages} */}

<div id ="navbarcontents" className='collapse navbar-collapse'>
    <ul className='navbar-nav me-auto'>

    <li className='=nav-item'>
            <b><Link to="/" className='nav-link'>Home</Link></b>
            </li>
        <li className='=nav-item'>
            <b><Link to="/addproduct" className='nav-link'>Sell</Link></b>
            </li>

    </ul>

    {/* {Below unordered list contains links alinged from th erigth hand side} */}
    <ul className='navbar-nav ms auto'>
        <li className='nav-item'>
            <b><Link to="/aboutus" className='nav-link'>About us</Link></b>

        </li>

        <li className='nav-item'>
            <b><Link to="/signin" className='nav-link'>signin</Link></b>

        </li>

        <li className='nav-item'>
            <b><Link to="/signup" className='nav-link'>signup</Link></b>

        </li>

    </ul>




</div>


    
</nav>
)
}

export default Navbar