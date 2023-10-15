import React, { useState } from 'react';
import { FaFacebookSquare , FaInstagramSquare , FaYoutubeSquare } from 'react-icons/fa';
import {GiHamburgerMenu} from "react-icons/gi";

const Navbar = () => {

	const [showMediaIcons , setshowMediaIcons] = useState(false);
  return (
	<>
	<nav className="main-nav">
		<div className="logo">
			<h2>
				<span>T</span>hapa
				<span>T</span>echnical
			</h2>
		</div>

		<div  className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"}>
			<ul>
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#">About</a>
				</li>
				<li>
					<a href="#">Service</a>
				</li>
				<li>
					<a href="#">Contact</a>
				</li>
			</ul>
		</div>

		<div className="social-media">
			<ul className="social-media-desktop">
				<li>
					<a href="www.google.com" target="_blank"><FaFacebookSquare className='facebook'/></a>
				</li>
				<li>
					<a href="www.google.com" target="_blank"><FaInstagramSquare className='instagram'/></a>
				</li>
				<li>
					<a href="www.google.com" target="_blank"><FaYoutubeSquare className='youtube'/></a>
				</li>
			</ul>

			<div className="hamburger-menu">
				<a href="#" onClick={() => setshowMediaIcons(!showMediaIcons)}>
				<GiHamburgerMenu />
				</a>
			</div>
		</div>

	</nav>

	{/*hero section */}

	<section className="hero-section">
		<p>Welcome to</p>
		<h1>Thapa Technical</h1>
	</section>
	</>
  )
}

export default Navbar