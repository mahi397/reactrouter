import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
 

function App() {
  return (
    <div class="content">
      <header> 
	      <img src="logostellar.jpg" alt="Logo image of a house enclosing the letter S." class="logo center" ></img>
        <h1>Stellar Sitting Services   </h1>
      </header>
      
      <p>Looking for a pet and/or house sitter? We have you covered!</p>
      <p><img src="doghouse.jpg" alt="Photo of a dog next to a large doghouse." class="round right" ></img> </p>
      <p>Our company has been open and providing excellent services for over a dozen years. Our sitters are thoughtful, respectful, and well trained in home and pet care.</p>
      <nav>
        <ul>
          <li> Home  </li>
          <li> <a href="stellarhouse.html">House Sitting</a> </li>
          <li> <a href="stellarpet.html">Pet Sitting</a> </li>
          <li> <a href="contact.html">Contact Us</a> </li>
        </ul>
      </nav>
        
      <h2>About Stellar Sitting Services</h2>  
      <p>
        At Stellar, we take pride in our exceptional customer service. We began our business with one employee - Janie Stellar, owner and founder. Janie's reputation for trustworthy and caring service grew over the years, as did the company. Stellar now employs over 300 sitters.
      </p>
      <p>
        Every one of our sitters has completed extensive security checks, along with intensive training on pet care, home care, and security/emergency procedures. You can trust a Stellar sitter!
      </p>
      
      <footer> 
        &copy; Copyright 2007 Stellar Sitting Services, LLC
      </footer>
     </div>
  );
}

export default App;
